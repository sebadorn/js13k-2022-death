'use strict';


js13k.Creature = class extends EngineObject {


	/**
	 * @constructor
	 * @override
	 * @param {Vector2} pos
	 * @param {Vector2} size
	 * @param {number}  tileIndex
	 * @param {Color}   color
	 */
	constructor( pos, size, tileIndex, color ) {
		super( pos, size, tileIndex, null, 0, color );

		this.attackDamage = 1;
		this.attackRange = 1;
		this.health = 3;
		this.moveDistance = 1;
		this.viewRange = 5;
		this.weapon = null; // TODO: weapon should decide attack damage and range
	}


	/**
	 *
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
				action = () => {
					player.health -= this.attackDamage;
				};
			}
			// Move towards player.
			else {
				const step = min( this.moveDistance + 0.5, distance );

				action = () => {
					this.pos = this.pos.add( player.pos.subtract( this.pos ).normalize().scale( step ) ).floor();
					this.pos.x = clamp( this.pos.x, 0, level.size.x - 1 );
					this.pos.y = clamp( this.pos.y, 0, level.size.y - 1 );

					// TODO: make sure tile isn't already taken
				};
			}
		}
		// Nothing to do. Move 1 tile in a random direction or just stand still.
		else {
			let xMax = this.pos.x >= level.size.x - 1 ? 0 : 1;
			let xMin = this.pos.x <= 0 ? 0 : -1;

			let yMax = this.pos.y >= level.size.y - 1 ? 0 : 1;
			let yMin = this.pos.y <= 0 ? 0 : -1;

			// TODO: make sure tile isn't already taken

			const step = vec2( rand( xMax, xMin ), rand( yMax, yMin ) );

			action = () => {
				this.pos = this.pos.add( step ).floor();
			};
		}

		return action;
	}


	/**
	 * @override
	 */
	update() {
		if(
			abs( mousePos.x - this.pos.x ) < 0.5 &&
			abs( mousePos.y - this.pos.y ) < 0.5
		) {
			// TODO: handle mouse being over creature, display info in UI?
		}

		super.update();
	}


};
