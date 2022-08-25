'use strict';


/**
 * @namespace js13k
 */
const js13k = {
	currentLevel: null,
	tileHighlightColor: new Color( 1, 1, 1 ),

	TILEDATA_GROUND: -1,
	TILEDATA_EMPTY: 0,
	TILEDATA_BLOCK: 1
};


window.addEventListener( 'load', () => {
	// LittleJS settings
	cameraScale = 96;
	canvasMaxSize = vec2( Infinity, Infinity );
	fontDefault = 'monospace';
	tileSizeDefault = vec2( 32 );

	engineInit(
		// init/setup
		() => {
			js13k.currentLevel = new js13k.Level();
			js13k.turnCreature = js13k.TurnManager.get();
		},

		// update, handle game state
		() => {
			const player = js13k.currentLevel.player;

			if( player ) {
				if( player.health <= 0 ) {
					// TODO: game over
				}
			}
		},

		// post update
		() => {
			// toggle pause: Escape
			if( keyWasPressed( 27 ) ) {
				paused = !paused;
			}

			if( paused ) {
				return;
			}

			js13k.TurnManager.doTurn();
			cameraPos = js13k.currentLevel.player.pos;
		},

		// before rendering, draw background effects
		() => {},

		// after rendering, draw overlay, e.g. UI
		() => {
			// const font = new FontImage();
			// font.drawText( 'Test', vec2( 0, 22 ), 0.2, 1 );
		},

		// sprite sheet
		// 'tiles.png'
	);
} );
