'use strict';


js13k.Tile = class extends EngineObject {


	/**
	 * @constructor
	 * @override
	 * @param {Vector2}  pos
	 * @param {Color}    color
	 * @param {number}  [tileData = 0]
	 */
	constructor( pos, color, tileData = 0 ) {
		super( pos, vec2( 1 ), -1, null, 0, color );
		this.setCollision( 0, 0, 0 );
		this.startColor = color;

		setTileCollisionData( pos, tileData );
	}


	/**
	 * @override
	 */
	update() {
		this.color = this.startColor;
		super.update();
	}


};
