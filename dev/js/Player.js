'use strict';


js13k.Player = class extends js13k.Creature {


	/**
	 * @constructor
	 * @override
	 * @param {Vector2} pos
	 */
	constructor( pos ) {
		const size = vec2( 0.5 );
		const tileIndex = -1;
		const color = new Color();

		super( pos, size, tileIndex, color );
	}


	/**
	 * @override
	 */
	update() {
		// up: KeyW, ArrowUp, KeyZ
		if( keyWasPressed( 87 ) || keyWasPressed( 38 ) || keyWasPressed( 90 ) ) {
			this.pos.y += 1;
		}
		// down: KeyS, ArrowDown
		if( keyWasPressed( 83 ) || keyWasPressed( 40 ) ) {
			this.pos.y -= 1;
		}

		// left: KeyA, ArrowLeft, KeyQ
		if( keyWasPressed( 65 ) || keyWasPressed( 37 ) || keyWasPressed( 81 ) ) {
			this.pos.x -= 1;
		}
		// right: KeyD, ArrowRight
		if( keyWasPressed( 68 ) || keyWasPressed( 39 ) ) {
			this.pos.x += 1;
		}

		super.update();
	}


};
