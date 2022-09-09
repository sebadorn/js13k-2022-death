'use strict';


js13k.Level.HallOfHel = class extends js13k.Level {


	/**
	 *
	 * @constructor
	 */
	constructor() {
		super( vec2( 15, 15 ) );

		const floorPlan =
			'       ,       ' +
			'       ,       ' +
			'wwwwwww,wwwwwww' +
			'p,,,,,p,p,,,,,p' +
			',,,,,,,,,,,,,,,' +
			',,    ,,,    ,,' +
			',,wwww,,,wwww,,' +
			',,,,,p,,,p,,,,,' +
			',,,,,,,,,,,,,,,' +
			',,,,,,,,,,,,,,,' +
			'    ,p,,,p,    ' +
			'    ,,,,,,,    ' +
			'    ,,,,,,,    ' +
			'    ,p,,,p,    ' +
			'    ,,,,,,,    ';

		for( let y = 0; y < this.size.y; y++ ) {
			for( let x = 0; x < this.size.x; x++ ) {
				let floor = floorPlan[( this.size.y - 1 - y ) * this.size.x + x];

				if( floor === ' ' ) {
					continue;
				}

				if( floor === ',' || floor === 'p' ) {
					const s = rand( 0.005, -0.005 );
					let color = new Color( 0.2 + s, 0.2 + s, 0.25 + s );

					const ground = new js13k.Tile( vec2( x, y ), color, 6 );
					this.tiles[ground.pos.x][ground.pos.y] = ground;
				}

				if( floor === 'w' ) {
					this.objects.push( this.buildObject( vec2( x, y ), 2 ) );
				}
				else if( floor === 'p' ) {
					const pillar = this.buildObject( vec2( x, y + 0.25 ), 0 );
					pillar.renderOrder = pillar.pos.y + 1.5;

					this.objects.push( pillar );
				}
			}
		}

		// Player
		this.player = new js13k.Player( vec2( 7, 1 ) );
		js13k.TurnManager.addCreature( this.player );

		this.decorations.push( new EngineObject( this.player.pos, vec2( 1 ), 7 ) );

		const monsterPosList = [
			vec2( 6, 4 ),
			vec2( 6, 5 )
		];

		monsterPosList.forEach( pos => {
			const monster = new js13k.Creature( js13k.Creature.DOG, pos, vec2( 0.5 ) );
			this.monsters.push( monster );
			js13k.TurnManager.addCreature( monster );
		} );

		this.updateTileMap();

		cameraPos = this.player.pos;
	}


	/**
	 *
	 * @return {boolean} True if the level has ended.
	 */
	checkForAndHandleEnd() {
		// Player has reached the gate.
		if( this.player.pos.y >= this.size.y - 1 ) {
			// TODO:

			return true;
		}

		return false;
	}


	/**
	 *
	 */
	destroy() {
		this.decorations.forEach( d => d.destroy() );
		this.monsters.forEach( m => m.destroy() );
		this.objects.forEach( o => o.destroy() );
		this.tiles.forEach( list => list.forEach( tile => tile.destroy() ) );
	}


	/**
	 * @override
	 */
	renderAfter() {
		if( this.step < 3 ) {
			overlayContext.imageSmoothingEnabled = false;
			overlayContext.drawImage(
				tileImage,
				// source
				32, 32,
				32, 32,
				// destination
				max( Math.round( overlayCanvas.width * 0.5 - 700 ), 0 ),
				Math.round( overlayCanvas.height * 0.5 ),
				512, 512
			);
		}

		const whiteAlphaColor = new Color( 1, 1, 1, 0.02 );
		drawRect( vec2( 7, 13.25 ), vec2( 1, 2.5 ), whiteAlphaColor );
		drawRect( vec2( 7, 13.5 ), vec2( 1, 2 ), whiteAlphaColor );
		drawRect( vec2( 7, 13.75 ), vec2( 1, 1.5 ), whiteAlphaColor );
		drawRect( vec2( 7, 14 ), vec2( 1, 1 ), whiteAlphaColor );
		drawRect( vec2( 7, 14.25 ), vec2( 1, 0.5 ), whiteAlphaColor );
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
				'Pitiful soul! Once proud warrior that unfortunately passed of sickness or old age and where thus cast into my Niflheim! Rejoice, for you are granted a chance to die honorably and ascend into the ranks of Valhalla!',
				() => this.step = 1
			);
		}
		else if( this.step == 1 ) {
			js13k.UI.showDialog(
				'h2',
				'Hel, Ruler of Niflheim',
				'I have granted you a brittle body and weapon, so that you may fight and absorb the soul power of those slayed.',
				() => this.step = 2
			);
		}
		else if( this.step == 2 ) {
			js13k.UI.showDialog(
				'h3',
				'Hel, Ruler of Niflheim',
				'The trial begins! First fight your way out of my hall!',
				() => this.step = 3
			);
		}

		if( this.step < 3 ) {
			return;
		}

		super.update();
	}


};
