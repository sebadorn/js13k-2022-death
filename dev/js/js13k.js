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

	engineInit(
		// init/setup
		() => {
			js13k.currentLevel = new js13k.Level.HallOfHel();
			js13k.turnCreature = js13k.TurnManager.get();

			setTimeout( () => js13k.UI.init(), 10 );
		},

		// update, handle game state
		() => {
			if( js13k.isGameOver ) {
				return;
			}

			if( js13k.currentLevel.playOutroTimer ) {
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

				// Digit1, Numpad1
				if( keyWasPressed( 49 ) || keyWasPressed( 97 ) ) {
					player.setAttack( 0 );
				}
				// Digit2, Numpad2
				else if( keyWasPressed( 50 ) || keyWasPressed( 98 ) ) {
					player.setAttack( 1 );
				}
				// Digit3, Numpad3
				else if( keyWasPressed( 51 ) || keyWasPressed( 99 ) ) {
					player.setAttack( 2 );
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

			js13k.currentLevel.update();
		},

		// before rendering, draw background effects
		() => {},

		// after rendering, draw overlay, e.g. UI
		() => {
			// Pause screen
			if( paused ) {
				overlayContext.fillStyle = '#0007';
				overlayContext.fillRect( 0, 0, overlayCanvas.width, overlayCanvas.height );

				overlayContext.font = '600 italic 72px monospace';
				overlayContext.textAlign = 'center';
				overlayContext.textBaseline = 'bottom';

				overlayContext.fillStyle = '#0ac';
				overlayContext.fillText( 'PAUSED', overlayCanvas.width * 0.5 - 3, overlayCanvas.height * 0.5 );

				overlayContext.fillStyle = '#d0a';
				overlayContext.fillText( 'PAUSED', overlayCanvas.width * 0.5, overlayCanvas.height * 0.5 );
			}

			if( js13k.isGameOver ) {
				return;
			}

			js13k.currentLevel.renderAfter();

			if( !js13k.currentLevel.playOutroTimer ) {
				js13k.UI.drawHUD();
			}
		},

		// sprite sheet
		'tiles.png'
	);
} );
