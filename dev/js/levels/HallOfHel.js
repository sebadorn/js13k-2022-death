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
				const color = new Color( 0.2, 0.2, 0.25 );
				const ground = new js13k.Tile( vec2( x, y ), color, 6, js13k.TILEDATA_GROUND );

				this.addTile( ground );
			}
		}

		const monsterPosList = [
			vec2( 5, 6 ),
			vec2( 3, 7 )
		];

		monsterPosList.forEach( pos => {
			const monster = new js13k.Creature( 'Warrior', pos, vec2( 0.5 ), 16, vec2( 16 ) );
			this.monsters.push( monster );
			js13k.TurnManager.addCreature( monster );
		} );

		this.objects.push(
			// wall left top
			this.buildObject( vec2( 0, 13 ), 2 ),
			this.buildObject( vec2( 1, 13 ), 2 ),
			this.buildObject( vec2( 2, 13 ), 2 ),

			// wall right top
			this.buildObject( vec2( 6, 13 ), 2 ),
			this.buildObject( vec2( 7, 13 ), 2 ),
			this.buildObject( vec2( 8, 13 ), 2 ),

			// pillars
			this.buildObject( vec2( 2, 10.25 ), 0 ),
			this.buildObject( vec2( 6, 10.25 ), 0 ),
			this.buildObject( vec2( 2, 7.25 ), 0 ),
			this.buildObject( vec2( 6, 7.25 ), 0 ),
			this.buildObject( vec2( 2, 4.25 ), 0 ),
			this.buildObject( vec2( 6, 4.25 ), 0 ),
			this.buildObject( vec2( 2, 1.25 ), 0 ),
			this.buildObject( vec2( 6, 1.25 ), 0 )
		);

		// Player
		this.player = new js13k.Player( vec2( 4, 4 ) );
		js13k.TurnManager.addCreature( this.player );

		this.updateTileMap();
	}


};
