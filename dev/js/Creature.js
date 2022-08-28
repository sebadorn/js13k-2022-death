'use strict';


js13k.Creature = class extends EngineObject {


	/**
	 * @constructor
	 * @override
	 * @param {string}  name
	 * @param {Vector2} pos
	 * @param {Vector2} size
	 * @param {number}  tileIndex
	 * @param {Color}   color
	 */
	constructor( name, pos, size, tileIndex, color ) {
		super( pos, size, tileIndex, null, 0, color );

		this._overlay = null;

		this.attackDamage = 1;
		this.attackRange = 1.5;
		this.health = 3;
		this.moveDistance = 1;
		this.name = name;
		this.viewRange = 5;
		this.weapon = null; // TODO: weapon should decide attack damage and range
	}


	/**
	 * @return {function}
	 */
	decideOnTurnAction() {
		let action = null;

		const level = js13k.currentLevel;
		const player = level.player;
		const distance = this.pos.distance( player.pos );

		// Player is within view range.
		if( distance <= this.viewRange ) {
			// Player is also within attack range.
			if( distance <= this.attackRange ) {
				action = this.getTurnActionAttack( player );
			}
			// Move towards player.
			else {
				let normedDirection = player.pos.subtract( this.pos ).normalize();
				let step = min( this.moveDistance, distance );
				let target = null;

				// Check if target tile is free. If not free try to find
				// a free tile on the path there. Only relevant for
				// creatures if a moveDistance >= 2.
				while( step >= 1 ) {
					target = this.pos.add( normedDirection.scale( step ) );
					target.x = Math.round( clamp( target.x, 0, level.size.x - 1 ) );
					target.y = Math.round( clamp( target.y, 0, level.size.y - 1 ) );

					if( level.canTileBeMovedTo( target ) ) {
						break;
					}

					step--;
				}

				if( step < 1 ) {
					target = this.pos;
				}

				action = this.getTurnActionMove( target.x, target.y );
			}
		}
		// Nothing to do. Move 1 tile in a random direction or just stand still.
		else {
			let target = this.pos;
			const free = level.getFreeSurroundingTiles( this.pos );

			if( free.length > 0 ) {
				target = free[Math.round( rand( free.length - 1, 0 ) )];
			}

			action = this.getTurnActionMove( target.x, target.y );
		}

		return action;
	}


	/**
	 * @override
	 */
	destroy() {
		if( this._overlay ) {
			this._overlay.remove();
		}

		js13k.TurnManager.removeCreature( this );

		super.destroy();
	}


	/**
	 * @param  {js13k.Creature} target
	 * @return {function}
	 */
	getTurnActionAttack( target ) {
		return cbEnd => {
			target.health -= this.attackDamage;

			if( target.health <= 0 ) {
				target.destroy();
			}

			cbEnd();
		};
	}


	/**
	 * @param  {number} endX
	 * @param  {number} endY
	 * @return {function}
	 */
	getTurnActionMove( endX, endY ) {
		// Animation duration depends on length of movement.
		const duration = this.pos.distance( vec2( endX, endY ) ) * 0.15;
		const timer = new Timer( duration );
		const startPos = this.pos.copy();

		// Function is called with each main update until "cbEnd" is called.
		return cbEnd => {
			// Smooth the animation with a slow start and end.
			// Math.sin( 0 ) == 0
			// Math.sin( Math.PI / 2 ) == 1
			const progress = Math.sin( Math.PI / 2 * timer.getPercent() );
			this.pos.x = startPos.x * ( 1 - progress ) + endX * progress;
			this.pos.y = startPos.y * ( 1 - progress ) + endY * progress;

			if( timer.elapsed() ) {
				cbEnd();
			}
		};
	}


	/**
	 * @override
	 */
	render() {
		if( !paused ) {
			if(
				abs( mousePos.x - this.pos.x ) < this.size.x / 2 &&
				abs( mousePos.y - this.pos.y ) < this.size.y / 2
			) {
				if( !this._overlay ) {
					this._overlay = js13k.UI.hoverBoxCreature( this.name, worldToScreen( this.pos ) );
				}
				else {
					this._overlay.hidden = false;
					js13k.UI.updateNode( this._overlay, { pos: worldToScreen( this.pos ) } );
				}
			}
			else if( this._overlay ) {
				this._overlay.hidden = true;
			}
		}

		super.render();
	}


};
