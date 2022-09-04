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

		cameraPos = this.player.pos;
	}


	/**
	 * @override
	 */
	renderAfter() {
		if( this.step < 3 ) {
			drawTile( vec2( 1, 2.4 ), vec2( 4 ), 5 );
		}
	}


	/**
	 * @override
	 */
	update() {
		// Intro.
		if( this.step == 0 ) {
			js13k.UI.showDialog(
				'h1',
				'Hel, Ruler of Niflheim',
				'Pitiful souls! Once proud warriors that unfortunately passed of sickness or old age and where thus cast into my Niflheim! Rejoice, for you are granted a chance to die <s>horrib…</s> honorably and ascend into the ranks of Valhalla!',
				() => this.step = 1
			);
		}
		else if( this.step == 1 ) {
			js13k.UI.showDialog(
				'h2',
				'Hel, Ruler of Niflheim',
				'I have granted you a brittle body and weapon, so that you may fight and absorb the soul power of those slayed. Only a strong enough soul can be counted as killed in battle.',
				() => this.step = 2
			);
		}
		else if( this.step == 2 ) {
			js13k.UI.showDialog(
				'h3',
				'Hel, Ruler of Niflheim',
				'The battle begins! First fight your way out of my hall!',
				() => this.step = 3
			);
		}

		if( this.step < 3 ) {
			return;
		}

		super.update();
	}


};
