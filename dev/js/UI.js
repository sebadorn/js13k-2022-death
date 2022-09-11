'use strict';


/**
 * @namespace js13k.UI
 */
js13k.UI = {


	// buttonEndTurn: null,
	// isOverCanvas: false,

	_animations: [],
	_dialogs: {},


	/**
	 *
	 * @param  {string} html
	 * @return {HTMLElement}
	 */
	buildNode( html ) {
		const parser = new DOMParser();

		return parser.parseFromString( html, 'text/html' ).body.firstChild;
	},


	/**
	 * Draw the fixed positioned UI overlay.
	 */
	drawHUD() {
		const player = js13k.currentLevel.player;

		if( player && !paused ) {
			overlayContext.font = '600 16px monospace';
			overlayContext.textAlign = 'left';
			overlayContext.textBaseline = 'top';

			this.writeText( 'SP ' + player.soulPower.toFixed(), 16, 28, '#fff', '#000' );
			this.writeText( 'MV ' + player.movesLeft.toFixed( 1 ), 16, 50, '#fff', '#000' );

			this.writeText(
				'[1] Direct Attack,   0 SP',
				16, 94,
				player.attackType == 0 ? '#c7e' : '#fff', '#000'
			);
			this.writeText(
				'[2] Sweeping Blow, -20 SP',
				16, 116,
				player.attackType == 1 ? '#c7e' : '#fff', '#000'
			);
			this.writeText(
				'[3] Throw Hatchet, -20 SP',
				16, 138,
				player.attackType == 2 ? '#c7e' : '#fff', '#000'
			);

			// Update "end turn" button.
			if( this.buttonEndTurn ) {
				this.buttonEndTurn.hidden = !js13k.TurnManager.isPlayerTurn();
			}
		}

		if( paused && this.buttonEndTurn ) {
			this.buttonEndTurn.hidden = true;
		}

		for( let i = this._animations.length - 1; i >= 0; i-- ) {
			const anim = this._animations[i];

			// Animation has ended.
			if( anim() ) {
				this._animations.splice( i, 1 );
			}
		}
	},


	/**
	 *
	 * @param {js13k.Creature} target
	 * @param {number}         gained
	 */
	effectSP( target, gained ) {
		const timer = new Timer( 2 );
		const pos = worldToScreen( target.pos.add( vec2( 0, 0.25 ) ) );

		const color = gained > 0 ? '#0f0' : '#f00';
		const sign = gained > 0 ? '+' : '';

		this._animations.push( () => {
			if( timer.elapsed() ) {
				return true;
			}

			const progress = timer.getPercent();

			overlayContext.font = '600 16px monospace';
			overlayContext.textAlign = 'center';
			overlayContext.textBaseline = 'top';
			overlayContext.globalAlpha = 1 - progress;
			this.writeText( sign + gained + ' SP', pos.x, Math.round( pos.y - progress * 16 ), color, '#000' );
			overlayContext.globalAlpha = 1;

			return false;
		} );
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

		const button = this.buildNode( '<button>[E]nd Turn</button>' );

		const attacks = this.buildNode(
			'<div class="b">' +
				'<button style="top:0">[1] Direct Attack,   0 SP</button>' +
				'<button style="top:22px">[2] Sweeping Blow, -20 SP</button>' +
				'<button style="top:44px">[3] Throw Hatchet, -20 SP</button>' +
			'</div>'
		);

		document.body.append( button, attacks );

		button.style.left = ( window.innerWidth - button.getBoundingClientRect().width ) * 0.5 + 'px';
		button.style.top = 16 + ( window.innerHeight - mainCanvas.height ) * 0.5 + 'px';

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

		this.buttonEndTurn = button;
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

		const node = this.buildNode(
			'<div style="background:#000a;color:#c7e;font-size:32px;font-style:italic;font-weight:600;height:100vh;padding-top:45%;position:absolute;text-align:center;width:100%">Since your body was destroyed,<br>you have failed the trial.<br>Your soul remains in Niflheim.<br><br>END</div>'
		);

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

			node = this.buildNode(
				`<div style="background:#000c;border:4px solid #fff;bottom:${bottom}px;display:flex;flex-direction:column;left:${left}px;min-height:200px;padding:10px;position:absolute;width:${width}px">` +
					`<div style="color:#c7e;font-style:italic;font-weight:600;margin:0 0 10px">${speaker}</div>` +
					`<div style="flex: 1 1">${text}</div>` +
					'<button style="display:block;font-size:21px;margin:10px 0 0;padding:10px;position:static">Continue</button>' +
				'</div>'
			);

			document.body.append( node );

			node.querySelector( 'button' ).onclick = _ev => {
				node.remove();
				delete this._dialogs[key];
				onClick();
			};

			this._dialogs[key] = node;
		}
		else {
			node.style.display = 'flex';
		}
	},


	/**
	 *
	 * @param {string}  text
	 * @param {number}  x
	 * @param {number}  y
	 * @param {string}  textColor
	 * @param {string}  shadowColor
	 * @param {Vector2} shadowOffset
	 */
	writeText( text, x, y, textColor, shadowColor, shadowOffset = vec2( 1 ) ) {
		overlayContext.fillStyle = shadowColor;
		overlayContext.fillText( text, x - shadowOffset.x, y - shadowOffset.y );
		overlayContext.fillStyle = textColor;
		overlayContext.fillText( text, x, y );
	}


};
