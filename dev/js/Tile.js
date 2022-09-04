'use strict';


js13k.Tile = class extends EngineObject {


	/**
	 * @constructor
	 * @override
	 * @param {Vector2}  pos
	 * @param {Color}    color
	 * @param {number}  [tileIndex = -1]
	 * @param {number}  [tileData = 0]
	 */
	constructor( pos, color, tileIndex = -1, tileData = 0 ) {
		super( pos, objectDefaultSize, tileIndex, tileSizeDefault, 0, color );

		this.highlightAttack = false;
		this.highlightMove = false;

		this.setCollision( 0, 0, 0 );
		setTileCollisionData( pos, tileData );
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
