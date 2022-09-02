'use strict';


js13k.UI = {


	parser: new DOMParser(),

	_gameOverScreen: null,


	/**
	 * Draw the fixed positioned UI overlay.
	 */
	drawHUD() {
		overlayContext.imageSmoothingEnabled = false;

		const player = js13k.currentLevel.player;

		if( player ) {
			// Draw health indicators.
			for( let i = 0; i < player.health; i++ ) {
				overlayContext.drawImage(
					tileImage,
					// source
					32, 0, 16, 16,
					// destination
					16 + i * 42, 16, 32, 32
				);
			}
		}
	},


	/**
	 * @param {string}  text
	 * @param {Vector2} pos
	 */
	hoverBoxCreature( text, pos ) {
		const node = this.parser.parseFromString(
			`<div class="box">${text}</div>`,
			'text/html'
		).body.firstChild;

		document.body.append( node );

		this.updateNode( node, { pos: pos } );

		return node;
	},


	/**
	 *
	 */
	showGameOver() {
		if( this._gameOverScreen ) {
			return;
		}

		const node = this.parser.parseFromString(
			'<div>YOU STAYED DEAD</div>',
			'text/html'
		).body.firstChild;

		node.style.background = '#000';
		node.style.color = '#F00';
		node.style.font = 'bold 72px Arial, sans-serif';
		node.style.height = '100vh';
		node.style.opacity = 0.7;
		node.style.paddingTop = '45%';
		node.style.position = 'absolute';
		node.style.textAlign = 'center';
		node.style.width = '100%';

		document.body.append( node );

		this._gameOverScreen = node;
	},


	/**
	 *
	 * @param {HTMLElement} node
	 * @param {object}      data
	 * @param {Vector2}     data.pos
	 */
	updateNode( node, data ) {
		if( data.pos ) {
			const rect = node.getBoundingClientRect();
			node.style.left = Math.round( data.pos.x - rect.width / 2 ) + 'px';
			node.style.top = Math.round( data.pos.y - rect.height - 48 ) + 'px';
		}
	}


};
