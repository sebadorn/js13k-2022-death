'use strict';


/**
 * @namespace js13k
 */
const js13k = {
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

	let level = null;

	engineInit(
		// init/setup
		() => {
			level = new js13k.Level();
		},

		// update, handle input and game state
		() => {},

		// post update, handle camera
		() => {
			cameraPos = level.player.pos;
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
