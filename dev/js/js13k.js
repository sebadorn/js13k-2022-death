'use strict';


/**
 * @namespace js13k
 */
const js13k = {
	currentLevel: null,

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

	const hlColor = new Color( 1, 1, 1 );

	engineInit(
		// init/setup
		() => {
			js13k.currentLevel = new js13k.Level();
			js13k.turnCreature = js13k.TurnManager.get();
		},

		// update, handle input and game state
		() => {
			// toggle pause: Escape
			if( keyWasPressed( 27 ) ) {
				paused = !paused;
			}
		},

		// post update, handle camera
		() => {
			if( paused ) {
				return;
			}

			if( js13k.TurnManager.isPlayerTurn() ) {
				const mouseX = Math.round( mousePos.x );
				const mouseY = Math.round( mousePos.y );

				const tile = js13k.currentLevel.tiles[mouseX]?.[mouseY];

				if( tile ) {
					tile.color = hlColor;

					if( mouseWasPressed( 0 ) ) {
						js13k.currentLevel.player.pos.x = mouseX;
						js13k.currentLevel.player.pos.y = mouseY;

						js13k.TurnManager.next();
					}
				}
			}

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
