'use strict';


js13k.Level.Niflheim = class extends js13k.Level {


	/**
	 *
	 * @constructor
	 * @param {js13k.Player} player
	 */
	constructor( player ) {
		super( vec2( 10, 10 ) );

		for( let x = 0; x < this.size.x; x++ ) {
			for( let y = 0; y < this.size.y; y++ ) {
				const color = new Color( 0.2, 0.5, 0.3 );
				const ground = new js13k.Tile( vec2( x, y ), color, -1 );

				this.addTile( ground );
			}
		}

		this.player = player;

		player.pos = vec2( 5, 0 );
		player.turnMoves = player.defaultNumTurnMoves;

		js13k.TurnManager.reset();
		js13k.TurnManager.addCreature( player );

		this.updateTileMap();

		cameraPos = player.pos;
	}


	/**
	 *
	 * @return {boolean}
	 */
	checkForAndHandleEnd() {
		return false;
	}


};
