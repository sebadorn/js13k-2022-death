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
		this.weapon = null; // TODO: weapon should decide attack damage and range
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
