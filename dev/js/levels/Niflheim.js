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
				const color = new Color( 0.4, 0.7, 0.8 );
				const ground = new js13k.Tile( vec2( x, y ), color, 7 );

				this.tiles[ground.pos.x][ground.pos.y] = ground;
			}
		}

		this.objects.push(
			new js13k.Decoration( js13k.Decoration.FOG, vec2( 4, 3 ) ),
			new js13k.Decoration( js13k.Decoration.FOG, vec2( 6, 4 ) )
		);

		this.player = player;

		player.pos = vec2( 5, 0 );
		player.renderOrder = player.pos.y;
		player.hasMoveLeft = true;
		player.hasAttackLeft = true;

		js13k.TurnManager.reset();
		js13k.TurnManager.addCreature( player );

		const monsterPosList = [
			vec2( 5, 6 ),
			vec2( 3, 7 )
		];

		monsterPosList.forEach( pos => {
			const monster = new js13k.Creature( js13k.Creature.GIANT, pos );
			this.monsters.push( monster );
			js13k.TurnManager.addCreature( monster );
		} );

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
