'use strict';


/**
 * @namespace js13k
 */
const js13k = {};


window.addEventListener( 'load', () => {
	engineInit(
		// init/setup
		() => {
			mainCanvas.style.background = new Color( 0.16, 0.4, 0.13 );
			new js13k.Character( vec2( 0, 0 ) );
		},

		// update, handle input and game state
		() => {},

		// post update, handle camera
		() => {},

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
