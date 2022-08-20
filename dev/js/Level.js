'use strict';


js13k.Level = class {


	/**
	 * @constructor
	 */
	constructor() {
		this.size = vec2( 20 );
		initTileCollision( this.size );

		this.ground = [];

		for( let x = 0; x < this.size.x; x++ ) {
			for( let y = 0; y < this.size.y; y++ ) {
				this.ground.push( new js13k.Ground( vec2( x, y ) ) );
			}
		}

		this.player = new js13k.Player( vec2( 10 ) );

		this.objects = [
			new js13k.Block( vec2( 10, 12 ) )
		];
	}


};
