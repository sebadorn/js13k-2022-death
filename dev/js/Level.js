'use strict';


js13k.Level = class {


	/**
	 * @constructor
	 * @param {Vector2} size
	 */
	constructor( size ) {
		this.size = size;

		js13k.TurnManager.reset();

		// Tiles
		initTileCollision( this.size );
		this.tiles = [...Array( this.size.x )].map( _ => [] );

		this.monsters = [];
		this.objects = [];

		this._tileContentMap = {};
	}


	/**
	 *
	 * @param {js13k.Ground} tile
	 */
	addTile( tile ) {
		this.tiles[tile.pos.x][tile.pos.y] = tile;
	}


	/**
	 *
	 * @param  {Vector2} pos
	 * @param  {number}  tileIndex
	 * @return {EngineObject}
	 */
	buildObject( pos, tileIndex ) {
		const object = new EngineObject( pos, vec2( 1 ), tileIndex );
		object.setCollision( 0, 0, 0 );

		return object;
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
