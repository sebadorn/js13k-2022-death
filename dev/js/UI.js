'use strict';


js13k.UI = {


	parser: new DOMParser(),

	_gameOverScreen: null,
	_node: {},


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
			`<div style="background:#000a;border:2px solid #fff;padding:10px;position:absolute;text-transform:uppercase;z-index:1">${text}</div>`,
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
			'<div style="background:#000a;color:#c7e;font-size:32px;font-style:italic;font-weight:600;height:100vh;padding-top:45%;position:absolute;text-align:center;width:100%">With your body prematurely destroyed,<br>your soul’s home remains Niflheim.<br><br>END</div>',
			'text/html'
		).body.firstChild;

		document.body.append( node );

		this._gameOverScreen = node;
	},


	/**
	 *
	 * @param {string}   id
	 * @param {string}   speaker
	 * @param {string}   text
	 * @param {function} onClick
	 */
	showDialog( id, speaker, text, onClick ) {
		let node = this._node[id];

		if( !node ) {
			const width = min( 800, mainCanvas.width );
			const bottom = 20 + ( window.innerHeight - mainCanvas.height ) / 2;
			const left = ( window.innerWidth - width - 20 ) / 2;

			node = this.parser.parseFromString(
				`<div style="background:#000c;border:4px solid #fff;bottom:${bottom}px;left:${left}px;padding:10px;position:absolute;width:${width}px">` +
					`<div style="color:#c7e;font-style:italic;font-weight:600;margin:0 0 10px">${speaker}</div>` +
					`<div>${text}</div>` +
					'<div class="n" style="background:#fff;color:#000;font-weight:600;margin:10px 0 0;padding:10px;text-align:center">Continue</div>' +
				'</div>',
				'text/html'
			).body.firstChild;

			document.body.append( node );

			node.querySelector( '.n' ).onclick = () => {
				node.remove();
				delete this._node[id];
				onClick();
			};

			this._node[id] = node;
		}
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
