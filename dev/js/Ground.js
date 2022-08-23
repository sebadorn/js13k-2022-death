'use strict';


js13k.Ground = class extends EngineObject {


	/**
	 * @constructor
	 * @override
	 * @param {Vector2} pos
	 */
	constructor( pos ) {
		const startColor = new Color(
			0.1 + ( 0.5 - Math.random() ) * 0.025,
			0.4 + ( 0.5 - Math.random() ) * 0.025,
			Math.random() * 0.025
		);

		super( pos, vec2( 1 ), -1, null, 0, startColor );
		this.setCollision( 0, 0, 0 );
		this.startColor = startColor;

		setTileCollisionData( pos, js13k.TILEDATA_GROUND );
	}


	/**
	 * @override
	 */
	update() {
		this.color = this.startColor;
		super.update();
	}


};
