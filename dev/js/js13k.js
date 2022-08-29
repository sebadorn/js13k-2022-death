'use strict';


/**
 * @namespace js13k
 */
const js13k = {
	currentLevel: null,
	isGameOver: false,
	tileColorAttackTarget: new Color( 1, 0, 0 ),
	tileColorMoveTarget: new Color( 1, 1, 1 ),

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
			if( this.isGameOver ) {
				return;
			}

			const player = js13k.currentLevel.player;

			if( player ) {
				if( player.health <= 0 ) {
					this.isGameOver = true;
					js13k.UI.showGameOver();
				}
			}
		},

		// post update
		() => {
			if( this.isGameOver ) {
				return;
			}

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
			if( this.isGameOver ) {
				return;
			}

			js13k.UI.drawHUD();
		},

		// sprite sheet
		'tiles.png'
	);
} );
