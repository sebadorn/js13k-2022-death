'use strict';


/**
 * @namespace js13k.UI
 */
js13k.UI = {


	parser: new DOMParser(),

	_node: {},


	/**
	 *
	 * @param {string} cursor
	 */
	setCursor( cursor ) {
		document.body.style.cursor = cursor;
	},


	/**
	 * Draw the fixed positioned UI overlay.
	 */
	drawHUD() {
		const player = js13k.currentLevel.player;

		if( player ) {
			overlayContext.font = '600 16px monospace';
			overlayContext.fillStyle = '#fff';
			overlayContext.fillText( 'SP ' + player.soulPower.toFixed( 0 ), 16, 28 );
			overlayContext.fillText( 'MV ' + player.movesLeft.toFixed( 0 ), 16, 50 );

			// Update "end turn" button.
			this._buttonEndTurn.hidden = !js13k.TurnManager.isPlayerTurn();
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
	init() {
		const button = this.parser.parseFromString(
			'<button style="position:absolute;left:45%;top:20px;z-index:1">End Turn</button>',
			'text/html'
		).body.firstChild;

		const attacks = this.parser.parseFromString(
			'<div style="position:absolute;left:45%;top:60px;z-index:1">' +
				'<button id="a0" class="a">Normal</button>' +
				'<button id="a1">Whirlwind</button>' +
				'<button id="a2">Throw</button>' +
			'</div>',
			'text/html'
		).body.firstChild;

		document.body.append( button, attacks );

		button.onclick = () => {
			js13k.turnCreature.movesLeft = 0;
			js13k.turnCreature.attacksLeft = 0;
			js13k.TurnManager.endTurn();
		};

		const attackButtons = [];

		attacks.querySelectorAll( 'button' ).forEach( btn => {
			attackButtons.push( btn );

			btn.onclick = _ev => {
				attackButtons.forEach( ab => ab.className = '' );
				js13k.turnCreature.setAttack( Number( btn.id.substring( 1 ) ) );
				btn.className = 'a';
			};
		} );

		this._buttonEndTurn = button;
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
				`<div style="background:#000c;border:4px solid #fff;bottom:${bottom}px;display:flex;flex-direction:column;left:${left}px;min-height:200px;padding:10px;position:absolute;width:${width}px">` +
					`<div style="color:#c7e;font-style:italic;font-weight:600;margin:0 0 10px">${speaker}</div>` +
					`<div style="flex: 1 1">${text}</div>` +
					'<div class="n" style="background:#fff;color:#000;cursor:pointer;font-weight:600;margin:10px 0 0;padding:10px;text-align:center">Continue</div>' +
				'</div>',
				'text/html'
			).body.firstChild;

			document.body.append( node );

			node.querySelector( '.n' ).onclick = _ev => {
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
