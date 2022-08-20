'use strict';


js13k.Ground = class extends EngineObject {


	/**
	 * @constructor
	 * @override
	 * @param {Vector2} pos
	 */
	constructor( pos ) {
		const color = new Color(
			0.1 + ( 0.5 - Math.random() ) * 0.025,
			0.4 + ( 0.5 - Math.random() ) * 0.025,
			Math.random() * 0.025
		);

		super( pos, vec2( 1 ), -1, null, 0, color );
		this.setCollision( 0, 0, 0 );

		setTileCollisionData( pos, js13k.TILEDATA_GROUND );
	}


	/**
	 * @override
	 */
	update() {
		if(
			abs( mousePos.x - this.pos.x ) < 0.5 &&
			abs( mousePos.y - this.pos.y ) < 0.5
		) {
			// TODO: handle mouse being over tile
		}

		super.update();
	}


};
