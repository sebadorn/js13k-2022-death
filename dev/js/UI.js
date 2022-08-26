'use strict';


js13k.UI = {


	parser: new DOMParser(),


	/**
	 * Draw the fixed positioned UI overlay.
	 */
	drawHUD() {
		overlayContext.imageSmoothingEnabled = false;

		const player = js13k.currentLevel.player;

		if( player ) {
			// Draw health indicators.
			for( let i = 0; i < player.health; i++ ) {
				overlayContext.drawImage( tileImage, 32, 0, 16, 16, i * 64, 0, 64, 64 );
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
	 * @param {HTMLElement} node
	 * @param {object}      data
	 * @param {Vector2}     data.pos
	 */
	updateNode( node, data ) {
		if( data.pos ) {
			const rect = node.getBoundingClientRect();
			node.style.left = Math.round( data.pos.x - rect.width / 2 ) + 'px';
			node.style.top = Math.round( data.pos.y - rect.height - 32 ) + 'px';
		}
	}


};
