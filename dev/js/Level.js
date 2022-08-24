'use strict';


js13k.Level = class {


	/**
	 * @constructor
	 */
	constructor() {
		this.size = vec2( 20 );

		js13k.TurnManager.reset();

		// Tiles
		initTileCollision( this.size );
		this.tiles = [...Array( this.size.x )].map( _ => [] );

		for( let x = 0; x < this.size.x; x++ ) {
			for( let y = 0; y < this.size.y; y++ ) {
				const ground = new js13k.Ground( vec2( x, y ) );
				this.tiles[x][y] = ground;
			}
		}

		// Player
		this.player = new js13k.Player( vec2( 10 ) );
		js13k.TurnManager.addCreature( this.player );

		// Monsters
		this.monsters = [];

		const monsterPosList = [
			vec2( 0, 0 ),
			vec2( 1, 0 ),
			vec2( 2, 0 ),
			vec2( 3, 0 )
		];

		monsterPosList.forEach( pos => {
			const monster = new js13k.Creature( pos, vec2( 0.3 ), -1, new Color( 1, 0, 0 ) );
			this.monsters.push( monster );
			js13k.TurnManager.addCreature( monster );
		} );

		// Other objects
		this.objects = [
			new js13k.Block( vec2( 10, 12 ) )
		];
	}


};
