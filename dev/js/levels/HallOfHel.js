'use strict';


js13k.Level.HallOfHel = class extends js13k.Level {


	/**
	 *
	 * @constructor
	 */
	constructor() {
		super( vec2( 9, 14 ) );

		for( let x = 0; x < this.size.x; x++ ) {
			for( let y = 0; y < this.size.y; y++ ) {
				const color = new Color( 0.4, 0.4, 0.5 );
				const ground = new js13k.Tile( vec2( x, y ), color, js13k.TILEDATA_GROUND );

				this.addTile( ground );
			}
		}

		// // Monsters
		// const monsterPosList = [
		// 	vec2( 0, 0 ),
		// 	vec2( 1, 0 ),
		// 	vec2( 2, 0 ),
		// 	vec2( 3, 0 )
		// ];

		// monsterPosList.forEach( ( pos, i ) => {
		// 	const monster = new js13k.Creature( 'Monster #' + ( i + 1 ), pos, vec2( 0.3 ), -1, new Color( 1, 0, 0 ) );
		// 	this.monsters.push( monster );
		// 	js13k.TurnManager.addCreature( monster );
		// } );

		this.objects.push(
			this.buildObject( vec2( 2, 10.3 ), 0 ),
			this.buildObject( vec2( 6, 10.3 ), 0 ),
			this.buildObject( vec2( 2, 7.3 ), 0 ),
			this.buildObject( vec2( 6, 7.3 ), 0 ),
			this.buildObject( vec2( 2, 4.3 ), 0 ),
			this.buildObject( vec2( 6, 4.3 ), 0 ),
			this.buildObject( vec2( 2, 1.3 ), 0 ),
			this.buildObject( vec2( 6, 1.3 ), 0 )
		);

		// Player
		this.player = new js13k.Player( vec2( 4, 4 ) );
		js13k.TurnManager.addCreature( this.player );

		this.updateTileMap();
	}


};
