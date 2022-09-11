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

		this.rand = randInt( 5, 1 );
		this._animTimerIdle = new Timer( this.rand );

		this.type = type;

		const map = [];
		map[js13k.Creature.BEAST] = [
			 8, // soulPower
			 2, // moveDistance
			 6, // viewRange
			 3, // attackDamage
			 1, // attackRange
			24, // tileIndex
			 0, // tileSize
		];
		map[js13k.Creature.SNAKE] = [
			 8, // soulPower
			 1, // moveDistance
			 5, // viewRange
			 5, // attackDamage
			 1, // attackRange
			25, // tileIndex
			 0, // tileSize
		];
		map[js13k.Creature.GIANT] = [
			20, // soulPower
			 1, // moveDistance
			 5, // viewRange
			10, // attackDamage
			 1, // attackRange
			 8, // tileIndex
			tileSizeDefault, // tileSize
		];
		map[js13k.Creature.SOUL] = [
			12, // soulPower
			 1, // moveDistance
			20, // viewRange
			 2, // attackDamage
			 1, // attackRange
			36, // tileIndex
			 0, // tileSize
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

		this.soulPowerTotal = this.soulPower;
		this.movesLeft = this.moveDistance;
		this.attacksLeft = 1;
		this.attackCost = 0;
	}


	/**
	 *
	 * @private
	 * @param  {js13k.Creature} target
	 * @return {function}
	 */
	_getTurnActionAttackNormal( target ) {
		const timerTo = new Timer( 0.4 );
		const timerBack = new Timer();

		this.angle = 0.1;
		this.mirror = target.pos.x < this.pos.x;

		const origPos = this.pos.copy();
		let stepPos = this.pos.copy();
		let startPos = this.pos.copy();
		let endPos = target.pos;

		let attackDone = false;
		let progress = 0;

		const isPlayer = this === js13k.currentLevel.player;

		this.soulPower -= this.attackCost;

		return cbEnd => {
			this.isWalking = true;

			if( timerTo.elapsed() ) {
				progress = timerBack.getPercent();
				this.mirror = target.pos.x > origPos.x;
			}
			else {
				progress = timerTo.getPercent();
				this.mirror = target.pos.x < origPos.x;
			}

			if( timerTo.elapsed() && !attackDone ) {
				timerBack.set( 0.3 );

				endPos = startPos.copy();
				startPos = target.pos;

				target.soulPower -= this.attackDamage;
				isPlayer ? js13k.soundHit1.play() : js13k.soundHit2.play();

				if( target.soulPower <= 0 ) {
					target.die();

					// Destroying an enemy increases soul power.
					if( isPlayer ) {
						this.soulPower += 5;
						js13k.UI.effectSP( this, 5 );
					}
				}

				attackDone = true;
			}
			else if( timerBack.elapsed() ) {
				this.angle = 0;
				this.isWalking = false;
				this.mirror = target.pos.x < origPos.x;
				this.pos = origPos;

				js13k.UI.effectSP( target, -this.attackDamage );

				cbEnd();

				return;
			}

			this.pos.x = startPos.x * ( 1 - progress ) + endPos.x * progress;
			this.pos.y = startPos.y * ( 1 - progress ) + endPos.y * progress;

			const distanceWalked = stepPos.distance( this.pos );

			if( distanceWalked >= 0.5 ) {
				this.angle *= -1;
				stepPos = this.pos.copy();
			}

			if( isPlayer ) {
				cameraPos = origPos;
			}
		};
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
			// Player is also within attack range.
			if( this.attacksLeft && distance <= this.attackRange ) {
				action = this.getTurnActionAttack( player );
				this.attacksLeft--;
			}
			// Move towards player.
			else if( this.movesLeft ) {
				const normedDirection = player.pos.subtract( this.pos ).normalize();
				const maxSteps = min( this.movesLeft, distance );
				let step = 1;
				let lastTarget = null;

				// Check if target tile is free. If not free try to find
				// a free tile on the path there. Only relevant for
				// creatures if a moveDistance >= 2.
				while( step <= maxSteps ) {
					const target = this.pos.add( normedDirection.scale( step ) );
					target.x = Math.round( clamp( target.x, 0, js13k.currentLevel.size.x - 1 ) );
					target.y = Math.round( clamp( target.y, 0, js13k.currentLevel.size.y - 1 ) );

					// Tile does not exist.
					if( !js13k.currentLevel.tiles[target.x]?.[target.y] ) {
						break;
					}

					// Tile cannot be moved to if not empty.
					if( js13k.currentLevel.getTileContent( target ) ) {
						break;
					}

					lastTarget = target;
					step++;
				}

				if( lastTarget ) {
					action = this.getTurnActionMove( lastTarget.x, lastTarget.y );
				}

				this.movesLeft = 0; // NPCs always use up all of their movement.
			}
		}

		return action;
	}


	/**
	 *
	 */
	die() {
		js13k.TurnManager.removeCreature( this );
		js13k.currentLevel.addBlood( this.pos );
		this.destroy();
	}


	/**
	 * @param  {js13k.Creature} target
	 * @return {function}
	 */
	getTurnActionAttack( target ) {
		return this._getTurnActionAttackNormal( target );
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

				cbEnd();
			}
		};
	}


	/**
	 * @override
	 */
	render() {
		const currentPos = this.pos.copy();

		if( !paused ) {
			overlayContext.font = '600 16px monospace';
			overlayContext.textAlign = 'center';

			if(
				abs( mousePos.x - this.pos.x ) < this.size.x / 2 &&
				abs( mousePos.y - this.pos.y ) < this.size.y / 2
			) {
				const pos = worldToScreen( vec2( currentPos.x, currentPos.y + 0.5 ) );
				overlayContext.textBaseline = 'top';

				js13k.UI.writeText( 'SP ' + this.soulPower, pos.x, pos.y + 8, '#fff', '#000', vec2( 1, -1 ) );
			}

			if( this.expectedDamage ) {
				const pos = worldToScreen( vec2( currentPos.x, currentPos.y - 0.5 ) );
				overlayContext.textBaseline = 'bottom';

				js13k.UI.writeText( -this.expectedDamage + ' SP', pos.x, pos.y, '#f00', '#000', vec2( 1, -1 ) );
			}

			if( this.type === js13k.Creature.SOUL ) {
				this.pos.y += Math.sin( this.rand + time ) * 0.05;
			}
		}

		super.render();
		this.pos = currentPos;
	}


	/**
	 * @override
	 */
	update() {
		this.expectedDamage = 0;

		if( this.type > 0 ) {
			if( this.isWalking ) {
				this.tileIndex = this._tileIndexDefault;
			}
			else if( this.soulPower > 0 ) {
				this.tileIndex = this._tileIndexDefault;

				if( this.type !== js13k.Creature.SOUL ) {
					if( this._animTimerIdle.elapsed() ) {
						this._animTimerIdle.set( 2.5 );
					}
					else if( this._animTimerIdle.get() >= -0.5 ) {
						this.tileIndex = this._tileIndexDefault + 1;
					}
				}
			}
		}

		super.update();
	}


};


js13k.Creature.BEAST = 1;
js13k.Creature.SNAKE = 2;
js13k.Creature.GIANT = 3;
js13k.Creature.SOUL = 4;
