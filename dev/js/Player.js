'use strict';


js13k.Player = class extends js13k.Creature {


	/**
	 * @constructor
	 * @override
	 * @param {Vector2} pos
	 */
	constructor( pos ) {
		super( 'Player', pos, vec2( 0.5 ), 16, vec2( 16 ) );

		this.health = 3;
		this.moveDistance = 5;
	}


	/**
	 * @override
	 */
	update() {
		this.tileIndex = 16;

		if( Math.round( time * 2 ) % 4 === 0 ) {
			this.tileIndex = 17;
		}

		super.update();
	}


};
