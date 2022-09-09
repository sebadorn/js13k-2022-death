'use strict';


/**
 * @namespace js13k
 */
const js13k = {
	currentLevel: null,
	isGameOver: false
};


window.addEventListener( 'load', () => {
	// LittleJS settings
	cameraScale = 128;
	canvasMaxSize = vec2( 1600, 900 );
	showWatermark = true; // TODO: disable/remove for release
	tileSizeDefault = vec2( 32 );

	js13k.UI.init();

	engineInit(
		// init/setup
		() => {
			js13k.currentLevel = new js13k.Level.HallOfHel();
			js13k.turnCreature = js13k.TurnManager.get();
		},

		// update, handle game state
		() => {
			if( js13k.isGameOver ) {
				return;
			}

			if( mouseWheel < 0 ) {
				cameraScale -= 32;
			}
			else if( mouseWheel > 0 ) {
				cameraScale += 32;
			}

			cameraScale = clamp( cameraScale, 96, 256 );

			const player = js13k.currentLevel.player;

			if( player ) {
				if( player.soulPower <= 0 ) {
					js13k.isGameOver = true;
					js13k.UI.showGameOver();
				}
			}
		},

		// post update
		() => {
			if( js13k.isGameOver ) {
				return;
			}

			// toggle pause: Escape
			if( keyWasPressed( 27 ) ) {
				paused = !paused;
			}

			if( paused ) {
				return;
			}

			js13k.currentLevel.update();
		},

		// before rendering, draw background effects
		() => {},

		// after rendering, draw overlay, e.g. UI
		() => {
			if( js13k.isGameOver ) {
				return;
			}

			js13k.currentLevel.renderAfter();
			js13k.UI.drawHUD();
		},

		// sprite sheet
		'tiles.png'
	);
} );
