'use strict';


js13k.Level = class {


	/**
	 * @constructor
	 */
	constructor() {
		this.size = vec2( 20 );

		initTileCollision( this.size );
		this.tiles = [...Array( this.size.x )].map( _ => [] );

		for( let x = 0; x < this.size.x; x++ ) {
			for( let y = 0; y < this.size.y; y++ ) {
				const ground = new js13k.Ground( vec2( x, y ) );
				this.tiles[x][y] = ground;
			}
		}

		this.player = new js13k.Player( vec2( 10 ) );

		this.objects = [
			new js13k.Block( vec2( 10, 12 ) )
		];

		js13k.TurnManager.reset();
		js13k.TurnManager.addCreature( this.player );
	}


};
