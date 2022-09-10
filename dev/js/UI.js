'use strict';


/**
 * @namespace js13k.UI
 */
js13k.UI = {


	isOverCanvas: false,
	parser: new DOMParser(),

	_buttonEndTurn: null,
	_dialogs: {},


	/**
	 * Draw the fixed positioned UI overlay.
	 */
	drawHUD() {
		const player = js13k.currentLevel.player;

		if( player && !paused ) {
			overlayContext.font = '600 16px monospace';
			overlayContext.textAlign = 'left';
			overlayContext.textBaseline = 'top';

			overlayContext.fillStyle = '#000';
			overlayContext.fillText( 'SP ' + player.soulPower.toFixed( 0 ), 15, 29 );
			overlayContext.fillStyle = '#fff';
			overlayContext.fillText( 'SP ' + player.soulPower.toFixed( 0 ), 16, 28 );

			overlayContext.fillStyle = '#000';
			overlayContext.fillText( 'MV ' + player.movesLeft.toFixed( 0 ), 15, 51 );
			overlayContext.fillStyle = '#fff';
			overlayContext.fillText( 'MV ' + player.movesLeft.toFixed( 0 ), 16, 50 );

			overlayContext.fillStyle = '#000';
			overlayContext.fillText( '(1) Direct Attack,   0 SP', 15, 95 );
			overlayContext.fillStyle = player.attackType == 0 ? '#f00' : '#fff';
			overlayContext.fillText( '(1) Direct Attack,   0 SP', 16, 94 );

			overlayContext.fillStyle = '#000';
			overlayContext.fillText( '(2) Sweeping Blow, -20 SP', 15, 117 );
			overlayContext.fillStyle = player.attackType == 1 ? '#f00' : '#fff';
			overlayContext.fillText( '(2) Sweeping Blow, -20 SP', 16, 116 );

			overlayContext.fillStyle = '#000';
			overlayContext.fillText( '(3) Throw Hatchet, -20 SP', 15, 139 );
			overlayContext.fillStyle = player.attackType == 2 ? '#f00' : '#fff';
			overlayContext.fillText( '(3) Throw Hatchet, -20 SP', 16, 138 );

			// Update "end turn" button.
			if( this._buttonEndTurn ) {
				this._buttonEndTurn.hidden = !js13k.TurnManager.isPlayerTurn();
			}
		}

		if( paused && this._buttonEndTurn ) {
			this._buttonEndTurn.hidden = true;
		}
	},


	/**
	 *
	 */
	hideAllDialog() {
		for( const key in this._dialogs ) {
			this._dialogs[key].style.display = 'none';
		}
	},


	/**
	 *
	 */
	init() {
		document.onmouseover = ev => {
			this.isOverCanvas = ev.target.tagName === 'CANVAS';
		};

		const button = this.parser.parseFromString(
			'<button style="top:20px">End Turn</button>',
			'text/html'
		).body.firstChild;

		const attacks = this.parser.parseFromString(
			'<div class="b">' +
				'<button style="top:0">(1) Direct Attack,   0 SP</button>' +
				'<button style="top:22px">(2) Sweeping Blow, -20 SP</button>' +
				'<button style="top:44px">(3) Throw Hatchet, -20 SP</button>' +
			'</div>',
			'text/html'
		).body.firstChild;

		document.body.append( button, attacks );

		button.style.left = ( window.innerWidth - button.getBoundingClientRect().width ) * 0.5 + 'px';

		attacks.style.left = 16 + ( window.innerWidth - mainCanvas.width ) * 0.5 + 'px';
		attacks.style.top = 92 + ( window.innerHeight - mainCanvas.height ) * 0.5 + 'px';

		button.onclick = () => {
			js13k.turnCreature.movesLeft = 0;
			js13k.turnCreature.attacksLeft = 0;
			js13k.TurnManager.endTurn();
		};

		attacks.querySelectorAll( 'button' ).forEach( btn => {
			btn.onclick = _ev => js13k.turnCreature.setAttack( Number( btn.textContent.substring( 1, 2 ) ) - 1 );
		} );

		this._buttonEndTurn = button;
	},


	/**
	 *
	 * @param {string} cursor
	 */
	setCursor( cursor ) {
		document.body.style.cursor = cursor;
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
	 * @param {string}   key
	 * @param {string}   speaker
	 * @param {string}   text
	 * @param {function} onClick
	 */
	showDialog( key, speaker, text, onClick ) {
		let node = this._dialogs[key];

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
				delete this._dialogs[key];
				onClick();
			};

			this._dialogs[key] = node;
		}
		else {
			node.style.display = 'flex';
		}
	}


};
