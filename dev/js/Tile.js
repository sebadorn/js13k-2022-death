'use strict';


js13k.Tile = class extends EngineObject {


	/**
	 * @constructor
	 * @override
	 * @param {Vector2}  pos
	 * @param {Color}    color
	 * @param {number}  [tileIndex = -1]
	 */
	constructor( pos, color, tileIndex = -1 ) {
		super( pos, objectDefaultSize, tileIndex, tileSizeDefault, 0, color );

		this.highlightAttack = false;
		this.highlightMove = false;
		this.renderOrder = -1;
	}


	/**
	 * @override
	 */
	render() {
		drawRect( this.pos, this.size, this.color );

		super.render();

		if( this.highlightAttack ) {
			drawTile( this.pos, vec2( 1 ), 11, vec2( 16 ) );
		}
		else if( this.highlightMove ) {
			drawTile( this.pos, vec2( 1 ), 3, vec2( 16 ) );

			const player = js13k.currentLevel.player;
			let cost = Math.round( this.pos.distance( player.pos ) * 10 ) / 10;
			const diff = player.movesLeft - cost;

			if( diff < 1 ) {
				cost = Math.ceil( cost );
			}

			const pos = worldToScreen( vec2( this.pos.x, this.pos.y ) );
			overlayContext.font = '600 16px monospace';
			overlayContext.textAlign = 'center';
			overlayContext.textBaseline = 'middle';
			overlayContext.fillStyle = '#0007';
			overlayContext.fillText( -cost + ' MV', pos.x - 1, pos.y + 1 );
			overlayContext.fillStyle = '#fff7';
			overlayContext.fillText( -cost + ' MV', pos.x, pos.y );
		}
	}


	/**
	 * @override
	 */
	update() {
		// Reset states.
		this.highlightMove = false;
		this.highlightAttack = false;

		super.update();
	}


};
