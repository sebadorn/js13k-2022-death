'use strict';


js13k.Level = class {


	/**
	 * @constructor
	 * @param {Vector2} size
	 */
	constructor( size ) {
		this.size = size;
		this.step = 0;

		js13k.TurnManager.reset();

		this.tiles = [...Array( this.size.x )].map( _ => [] );

		this.decorations = [];
		this.monsters = [];
		this.objects = [];

		this._tileContentMap = {};
	}


	/**
	 *
	 * @param {Vector2} pos
	 */
	addBlood( pos ) {
		this.decorations.push(
			new js13k.Decoration( js13k.Decoration.BLOOD, pos )
		);
	}


	/**
	 *
	 * @param  {Vector2} pos
	 * @param  {number}  tileIndex
	 * @return {EngineObject}
	 */
	buildObject( pos, tileIndex ) {
		const object = new EngineObject( pos, vec2( 1 ), tileIndex );
		object.renderOrder = pos.y + 0.5;

		return object;
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
	 *
	 */
	renderAfter() {}


	/**
	 *
	 */
	update() {
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
