'use strict';


js13k.Player = class extends js13k.Creature {


	/**
	 * @constructor
	 * @override
	 * @param {Vector2} pos
	 */
	constructor( pos ) {
		const size = vec2( 0.5 );
		const tileIndex = -1;

		super( 'Player', pos, size, tileIndex, new Color() );

		this.health = 3;
		this.moveDistance = 5;
	}


};
