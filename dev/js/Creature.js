'use strict';


js13k.Creature = class extends EngineObject {


	/**
	 * @constructor
	 * @override
	 * @param {number}  type
	 * @param {Vector2} pos
	 * @param {Vector2} size
	 * @param {number}  tileIndex
	 */
	constructor( type, pos, size, tileIndex, tileSize ) {
		super( pos, size, tileIndex, tileSize || tileSizeDefault, 0 );

		this._animTimerIdle = new Timer( randInt( 5, 1 ) );

		this.type = type;

		const map = [];
		map[js13k.Creature.DOG] = [
			1, // soulPower
			2, // moveDistance
			4, // viewRange
			1, // attackDamage
			1, // attackRange
			24, // tileIndex
			0, // tileSize
		];
		map[js13k.Creature.SNAKE] = [
			1, // soulPower
			1, // moveDistance
			3, // viewRange
			1, // attackDamage
			1, // attackRange
			25, // tileIndex
			0, // tileSize
		];
		map[js13k.Creature.GIANT] = [
			2, // soulPower
			2, // moveDistance
			4, // viewRange
			2, // attackDamage
			2, // attackRange
			8, // tileIndex
			tileSizeDefault, // tileSize
		];

		const values = map[type];

		if( values ) {
			this.soulPower = values[0];
			this.moveDistance = values[1];
			this.viewRange = values[2];
			this.attackDamage = values[3];
			this.attackRange = values[4] + 0.5;

			this._tileIndexDefault = values[5];
			this.tileIndex = values[5];
			this.tileSize = values[6] || vec2( 16 );
		}

		this.hasMoveLeft = true;
		this.hasAttackLeft = true;
	}


	/**
	 * @return {function}
	 */
	decideOnTurnAction() {
		let action = null;

		const player = js13k.currentLevel.player;
		const distance = this.pos.distance( player.pos );

		// Player is within view range.
		if( distance <= this.viewRange ) {
			const tileContent = js13k.currentLevel.getTileContent( player.pos );
			const playerIsHidden = tileContent && tileContent.find( c => c.type === js13k.Decoration.FOG );

			if( !playerIsHidden ) {
				// Player is also within attack range.
				if( this.hasAttackLeft && distance <= this.attackRange ) {
					action = this.getTurnActionAttack( player );
					this.hasAttackLeft = false;
				}
				// Move towards player.
				else if( this.hasMoveLeft ) {
					let normedDirection = player.pos.subtract( this.pos ).normalize();
					let step = min( this.moveDistance, distance );
					let target = null;

					// Check if target tile is free. If not free try to find
					// a free tile on the path there. Only relevant for
					// creatures if a moveDistance >= 2.
					while( step >= 1 ) {
						target = this.pos.add( normedDirection.scale( step ) );
						target.x = Math.round( clamp( target.x, 0, js13k.currentLevel.size.x - 1 ) );
						target.y = Math.round( clamp( target.y, 0, js13k.currentLevel.size.y - 1 ) );

						// Tile cannot be moved to if not empty.
						if( !js13k.currentLevel.getTileContent( target ) ) {
							break;
						}

						step--;
					}

					if( step >= 1 ) {
						action = this.getTurnActionMove( target.x, target.y );
					}

					this.hasMoveLeft = false;
				}
			}
		}

		return action;
	}


	/**
	 *
	 */
	die() {
		if( this._overlay ) {
			this._overlay.remove();
		}

		js13k.TurnManager.removeCreature( this );
		js13k.currentLevel.addBlood( this.pos );
		this.destroy();
	}


	/**
	 * @param  {js13k.Creature} target
	 * @return {function}
	 */
	getTurnActionAttack( target ) {
		const timer = new Timer( 0.5 );

		let attackDone = false;

		return cbEnd => {
			if( !attackDone ) {
				target.soulPower -= this.attackDamage;

				if( target.soulPower <= 0 ) {
					target.die();
				}

				attackDone = true;
			}
			else if( timer.elapsed() ) {
				cbEnd();
			}
		};
	}


	/**
	 * @param  {number} endX
	 * @param  {number} endY
	 * @return {function}
	 */
	getTurnActionMove( endX, endY ) {
		// Animation duration depends on length of movement.
		const duration = this.pos.distance( vec2( endX, endY ) ) * 0.25;
		const timer = new Timer( duration );
		const startPos = this.pos.copy();

		let stepPos = startPos;
		this.angle = 0.1;
		this.mirror = endX < this.pos.x;

		// Function is called with each main update until "cbEnd" is called.
		return cbEnd => {
			this.isWalking = true;

			// Smooth the animation with a slow start and end.
			// Math.sin( 0 ) == 0
			// Math.sin( Math.PI / 2 ) == 1
			const progress = Math.sin( Math.PI / 2 * timer.getPercent() );
			this.pos.x = startPos.x * ( 1 - progress ) + endX * progress;
			this.pos.y = startPos.y * ( 1 - progress ) + endY * progress;

			const distanceWalked = stepPos.distance( this.pos );

			if( distanceWalked >= 0.5 ) {
				this.angle *= -1;
				stepPos = this.pos.copy();
			}

			this.renderOrder = this.pos.y;

			if( timer.elapsed() ) {
				this.angle = 0;
				this.isWalking = false;

				// Moving costs soul power for the player.
				if( this === js13k.currentLevel.player ) {
					this.soulPower--;
				}

				cbEnd();
			}
		};
	}


	/**
	 * @override
	 */
	render() {
		if( !paused ) {
			if( this !== js13k.currentLevel.player ) {
				// Hide if in fog.
				const tileContent = js13k.currentLevel.getTileContent( this.pos );

				if( tileContent && tileContent.find( c => c.type === js13k.Decoration.FOG ) ) {
					return;
				}

				if(
					abs( mousePos.x - this.pos.x ) < this.size.x / 2 &&
					abs( mousePos.y - this.pos.y ) < this.size.y / 2
				) {
					// const pos = worldToScreen( this.pos );
					// pos.x += ( window.innerWidth - parseInt( mainCanvas.width, 10 ) ) / 2;
					// pos.y += ( window.innerHeight - parseInt( mainCanvas.height, 10 ) ) / 2;

					// if( !this._overlay ) {
					// 	this._overlay = js13k.UI.hoverBoxCreature( this.name, pos );
					// }
					// else {
					// 	this._overlay.hidden = false;
					// 	js13k.UI.updateNode( this._overlay, { pos: pos } );
					// }
				}
				// else if( this._overlay ) {
				// 	this._overlay.hidden = true;
				// }
			}
		}

		super.render();
	}


	/**
	 * @override
	 */
	update() {
		if( this.type === js13k.Creature.DOG ) {
			if( this.isWalking ) {
				this.tileIndex = this._tileIndexDefault;
			}
			else if( this.soulPower > 0 ) {
				this.tileIndex = this._tileIndexDefault;

				if( this._animTimerIdle.elapsed() ) {
					this._animTimerIdle.set( 2.5 );
				}
				else if( this._animTimerIdle.get() >= -0.2 ) {
					this.tileIndex = this._tileIndexDefault + 1;
				}
			}
		}

		super.update();
	}


};


js13k.Creature.DOG = 1;
js13k.Creature.SNAKE = 2;
js13k.Creature.GIANT = 3;
