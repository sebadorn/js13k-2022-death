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

		monsterPosList.forEach( ( pos, i ) => {
			const monster = new js13k.Creature( 'Monster #' + ( i + 1 ), pos, vec2( 0.3 ), -1, new Color( 1, 0, 0 ) );
			this.monsters.push( monster );
			js13k.TurnManager.addCreature( monster );
		} );

		// Other objects
		this.objects = [
			new js13k.Block( vec2( 10, 12 ) )
		];

		this._tileContentMap = {};
		this.updateTileMap();
	}


	/**
	 * @param  {Vector2} pos
	 * @return {boolean}
	 */
	canTileBeMovedTo( pos ) {
		// Tile is free if there is no entry in the tile content map.
		return !this.getTileContent( pos );
	}


	/**
	 *
	 * @param  {Vector2} pos
	 * @return {Vector2[]}
	 */
	getFreeSurroundingTiles( pos ) {
		const directions = [];

		for( let i = -1; i <= 1; i++ ) {
			for( let j = -1; j <= 1; j++ ) {
				if( i !== 0 && j !== 0 ) {
					directions.push( vec2( i, j ) );
				}
			}
		}

		const free = [];

		directions.forEach( direction => {
			const posTest = pos.add( direction );

			// Do not leave the map.
			if(
				posTest.x < 0 || posTest.x >= this.size.x ||
				posTest.y < 0 || posTest.y >= this.size.y
			) {
				return;
			}

			const entry = this._tileContentMap[posTest.toString( 0 )];

			if( !entry ) {
				free.push( posTest );
			}
		} );

		return free;
	}


	/**
	 *
	 * @param  {Vector2} pos
	 * @return {?EngineObject[]}
	 */
	getTileContent( pos ) {
		return this._tileContentMap[pos.toString( 0 )];
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

			const key = entry.pos.toString( 0 );
			this._tileContentMap[key] = this._tileContentMap[key] || [];
			this._tileContentMap[key].push( entry );
		};

		this.objects.forEach( object => add( object ) );
		this.monsters.forEach( monster => add( monster ) );
		add( this.player );
	}


};
