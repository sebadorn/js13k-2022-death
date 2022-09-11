'use strict';


js13k.Level = class {


	/**
	 *
	 * @constructor
	 */
	constructor() {
		this.size = vec2( 15 );
		this.step = 0;

		js13k.TurnManager.reset();

		this.tiles = [...Array( this.size.x )].map( _ => [] );

		this.decorations = [];
		this.monsters = [];
		this.objects = [];

		this._tileContentMap = {};

		const floorPlan =
			'       ,       ' +
			'       ,       ' +
			'wwwwwww,wwwwwww' +
			'p,,,,,p,p,,,,,p' +
			',,,,,,,,,,,,,,,' +
			',,           ,,' +
			',,wwwwwwwwwww,,' +
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
				const floor = floorPlan[( this.size.y - 1 - y ) * this.size.x + x];

				if( floor == ' ' ) {
					continue;
				}

				if( floor == ',' || floor == 'p' ) {
					const s = rand( 0.005, -0.005 );
					const color = new Color( 0.2 + s, 0.2 + s, 0.25 + s );

					const ground = new js13k.Tile( vec2( x, y ), color, 6 );
					this.tiles[ground.pos.x][ground.pos.y] = ground;
				}

				if( floor == 'w' ) {
					this.objects.push( this.buildObject( vec2( x, y ), 2 ) );
				}
				else if( floor == 'p' ) {
					const pillar = this.buildObject( vec2( x, y + 0.25 ), 0 );
					pillar.renderOrder = pillar.pos.y + 1.5;

					this.objects.push( pillar );
				}
			}
		}

		// Player
		this.player = new js13k.Player( vec2( 7, 1 ) );
		js13k.TurnManager.addCreature( this.player );

		this.decorations.push( new EngineObject( this.player.pos, vec2( 1 ), 3 ) );

		const monsterPlan =
			'       ,       ' +
			'       ,       ' +
			'wwwwwww,wwwwwww' +
			'pb,,g,p,ps,,b,p' +
			',,sb,,bsb,,g,sb' +
			'bb           s,' +
			',bwwwwwwwwwww,b' +
			'ss,b,p,,,p,b,s,' +
			',,b,b,,g,bb,,,s' +
			's,b,,,b,,,s,,b,' +
			'    ,pbb,p,    ' +
			'    s,,,bb,    ' +
			'    ,b,,,,s    ' +
			'    ,p,,,p,    ' +
			'    ,,,,,,,    ';

		for( let y = 0; y < this.size.y; y++ ) {
			for( let x = 0; x < this.size.x; x++ ) {
				const m = monsterPlan[( this.size.y - 1 - y ) * this.size.x + x];
				let monster = null;

				if( m == 'b' ) {
					monster = new js13k.Creature( js13k.Creature.BEAST, vec2( x, y ), vec2( 0.5 ) );
				}
				else if( m == 'g' ) {
					monster = new js13k.Creature( js13k.Creature.GIANT, vec2( x, y ), vec2( 1 ) );
				}
				else if( m == 's' ) {
					monster = new js13k.Creature( js13k.Creature.SOUL, vec2( x, y ), vec2( 0.5 ) );
				}

				if( monster ) {
					this.monsters.push( monster );
					js13k.TurnManager.addCreature( monster );
				}
			}
		}

		this.updateTileMap();

		cameraPos = this.player.pos;
	}


	/**
	 *
	 * @private
	 * @param {number} size
	 * @param {number} sizeHalf
	 */
	_outroDrawHel( screenPosHel, size, sizeHalf ) {
		overlayContext.drawImage(
			tileImage,
			// source
			96, 32, 32, 32,
			// destination
			screenPosHel.x - sizeHalf * 2, screenPosHel.y - sizeHalf * 2, size * 2, size * 2
		);
	}


	/**
	 *
	 * @param {Vector2} pos
	 */
	addBlood( pos ) {
		const blood = new EngineObject( pos, vec2( 0.5 ), 10, vec2( 16 ) );
		blood.pos.x += rand( 0.1, -0.1 );
		blood.pos.y += rand( 0.1, -0.1 );
		blood.isBlood = true;

		this.decorations.push( blood );
	}


	/**
	 *
	 * @param  {Vector2} pos
	 * @param  {number}  tileIndex
	 * @return {EngineObject}
	 */
	buildObject( pos, tileIndex ) {
		const object = new EngineObject( pos, objectDefaultSize, tileIndex );
		object.renderOrder = pos.y + 0.5;

		return object;
	}


	/**
	 *
	 * @return {boolean} True if the level has ended.
	 */
	checkForAndHandleEnd() {
		if( this.playOutroTimer ) {
			return true;
		}

		// Player has reached the gate.
		if( this.player.pos.y >= this.size.y - 1 ) {
			this.playOutroTimer = new Timer( 3 );
			this.lastCameraScale = cameraScale;

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
	 *
	 * @param  {Vector2} pos
	 * @return {?EngineObject[]}
	 */
	getTileContent( pos ) {
		return this._tileContentMap[pos.toString()];
	}


	/**
	 * @override
	 */
	renderAfter() {
		overlayContext.imageSmoothingEnabled = false;

		// Outro.
		if( this.playOutroTimer ) {
			js13k.UI.setCursor( '' );
			js13k.UI.buttonEndTurn.hidden = true;

			this.player.isWalking = true; // Disable idle animation.

			// Fade out
			let progress = this.step < 10 ? this.playOutroTimer.getPercent() : 1;
			let bgColor = ( new Color( 0.7, 0.8, 0.8, progress ) ).toString();
			overlayContext.fillStyle = bgColor;
			overlayContext.fillRect( 0, 0, overlayCanvas.width, overlayCanvas.height );
			document.body.style.background = bgColor;

			// Zoom in or out to desired camera scale.
			cameraScale = 128 * progress + this.lastCameraScale * ( 1 - progress );

			const scale = cameraScale / 32;
			const size = 16 * scale;
			const sizeHalf = size * 0.5;
			const screenPosPlayer = worldToScreen( this.player.pos );

			overlayContext.font = '600 19px monospace';
			overlayContext.fillStyle = '#000';
			overlayContext.textAlign = 'center';
			overlayContext.textBaseline = 'bottom';

			if( this.playOutroTimer.elapsed() ) {
				if( this.step < 10 ) {
					this.step = 10;
					this.playOutroTimer.set( 2 );
				}
				else if( this.step == 10 ) {
					this.step = 11;
					this.playOutroTimer.set( 3 );
				}
				else if( this.step == 11 ) {
					this.step = 12;
					this.playOutroTimer.set( 4 );
				}
				else if( this.step == 12 ) {
					this.step = 13;
					this.playOutroTimer.set( 5 );
				}
				else if( this.step == 13 ) {
					this.step = 14;
					this.playOutroTimer.set( 0.3 );
				}
				else if( this.step == 14 ) {
					this.step = 15;
					this.playOutroTimer.set( 0.3 );
					js13k.soundDie.play();
				}
				else if( this.step == 15 ) {
					this.step = 16;
					this.playOutroTimer.set( 1 );
				}
				else if( this.step == 16 ) {
					this.step = 17;
					this.playOutroTimer.set( 5 );
				}
				else {
					paused = true;
				}
			}

			progress = this.playOutroTimer.getPercent();

			const helPosAdd = vec2( 0, 1 );

			if( this.step == 12 ) {
				helPosAdd.y = 1 - progress * 0.5;
			}
			else if( this.step > 12 ) {
				helPosAdd.y = 0.5;
			}

			const screenPosHel = worldToScreen( this.player.pos.add( helPosAdd ) );

			if( this.step == 10 ) {
				overlayContext.globalAlpha = progress;
				this._outroDrawHel( screenPosHel, size, sizeHalf );
			}
			else if( this.step == 11 ) {
				this._outroDrawHel( screenPosHel, size, sizeHalf );
				overlayContext.globalAlpha = 1 - progress * progress;
				overlayContext.fillText( 'You have done well, warrior.', screenPosHel.x, screenPosHel.y - 76 );
			}
			else if( this.step == 12 ) {
				this._outroDrawHel( screenPosHel, size, sizeHalf );
				overlayContext.globalAlpha = 1 - progress * progress;
				overlayContext.fillText( 'Now it is my turn.', screenPosHel.x, screenPosHel.y - 76 );
			}
			else if( this.step == 13 ) {
				this._outroDrawHel( screenPosHel, size, sizeHalf );
				overlayContext.globalAlpha = 1 - progress * progress;
				overlayContext.fillText(
					'Fall a second time...',
					Math.round( screenPosHel.x - progress * 8 ),
					screenPosHel.y - 100
				);
				overlayContext.fillText(
					'...and ascend for the first.',
					Math.round( screenPosHel.x + progress * 8 ),
					screenPosHel.y - 76
				);
			}
			else if( this.step == 14 ) {
				const slashWidth = size * 3;
				this._outroDrawHel( screenPosHel, size, sizeHalf );
				overlayContext.fillStyle = '#f00';
				overlayContext.fillRect(
					screenPosPlayer.x + 32, screenPosPlayer.y,
					-slashWidth * progress, 3
				);
			}
			else if( this.step == 15 ) {
				const slashWidth = size * 3;
				this._outroDrawHel( screenPosHel, size, sizeHalf );
				overlayContext.fillStyle = '#f00';
				overlayContext.fillRect(
					screenPosPlayer.x + 32 - slashWidth * progress, screenPosPlayer.y,
					-slashWidth * ( 1 - progress ), 3
				);
			}
			else if( this.step == 16 ) {
				this._outroDrawHel( screenPosHel, size, sizeHalf );
			}
			else if( this.step == 17 ) {
				this._outroDrawHel( screenPosHel, size, sizeHalf );

				const brightColor = bgColor;

				document.documentElement.style.background = brightColor;
				bgColor = ( new Color( 0.1, 0.1, 0.1, progress ) ).toString();
				overlayContext.fillStyle = bgColor;
				overlayContext.fillRect( 0, 0, overlayCanvas.width, overlayCanvas.height );
				document.body.style.background = bgColor;

				overlayContext.globalAlpha = progress;

				overlayContext.font = '600 128px monospace';
				overlayContext.fillStyle = brightColor;
				overlayContext.fillText( 'Hel\'s Trial', overlayCanvas.width / 2, overlayCanvas.height / 2 );

				overlayContext.globalAlpha = Math.sqrt( progress );
				overlayContext.font = '600 32px monospace';
				overlayContext.fillText( '...is over', overlayCanvas.width / 2, overlayCanvas.height / 2 + 32 );
			}

			if( this.step < 17 ) {
				overlayContext.globalAlpha = this.step == 16 ? ( 1 - progress ) : 1;

				overlayContext.drawImage(
					tileImage,
					// source
					0, 32, 16, 16,
					// destination
					screenPosPlayer.x - sizeHalf, screenPosPlayer.y - sizeHalf, size, size
				);
			}

			overlayContext.globalAlpha = 1;
		}
		// Part of the intro.
		else if( this.step < 2 && !paused ) {
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

		// Light at exit.
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
		if( !paused ) {
			if( this.step == 0 ) {
				js13k.UI.showDialog(
					'h1',
					'Hel, Ruler of Niflheim',
					'Pitiful soul! Once proud warrior that unfortunately passed of old age and where thus cast into my Niflheim! Rejoice, for I give you a chance to die honorably and ascend into the ranks of Valhalla!',
					() => this.step = 1
				);
			}
			else if( this.step == 1 ) {
				js13k.UI.showDialog(
					'h2',
					'Hel, Ruler of Niflheim',
					'I have granted you a body and weapon, so that you may grow your soul power (SP) through the death of those you slay.<br><br>The trial begins! Fight your way out of my hall!',
					() => this.step = 2
				);
			}
		}

		if( this.step < 2 || paused ) {
			if( paused ) {
				js13k.UI.hideAllDialog();
			}

			return;
		}

		cameraPos = this.player.pos.copy();
		js13k.TurnManager.doTurn();
	}


	/**
	 *
	 */
	updateTileMap() {
		this._tileContentMap = {};

		const add = entry => {
			if( entry.destroyed ) {
				return;
			}

			const key = entry.pos.toString();
			this._tileContentMap[key] = this._tileContentMap[key] || [];
			this._tileContentMap[key].push( entry );
		};

		this.objects.forEach( object => add( object ) );
		this.monsters.forEach( monster => add( monster ) );
		add( this.player );
	}


};
