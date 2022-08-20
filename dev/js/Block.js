'use strict';


js13k.Block = class extends EngineObject {


	/**
	 * @constructor
	 * @override
	 * @param {Vector2} pos
	 */
	constructor( pos ) {
		const size = vec2( 2 );
		const tileIndex = -1;
		const angle = 0;
		const color = new Color( 0.2, 0.2, 0.4 );

		super( pos, size, tileIndex, null, angle, color );

		setTileCollisionData( pos, js13k.TILEDATA_BLOCK );
		setTileCollisionData( pos.subtract( vec2( 0, 1 ) ), js13k.TILEDATA_BLOCK );
		setTileCollisionData( pos.subtract( vec2( 1, 0 ) ), js13k.TILEDATA_BLOCK );
		setTileCollisionData( pos.subtract( vec2( 1, 1 ) ), js13k.TILEDATA_BLOCK );
	}


};
