'use strict';


js13k.Character = class Character extends EngineObject {


	/**
	 *
	 * @constructor
	 * @override
	 * @param {vec2} pos
	 */
	constructor( pos ) {
		const size = vec2( 1 );
		const tileIndex = -1;
		const angle = 0;
		const color = new Color();

		super( pos, size, tileIndex, null, angle, color );
	}


	/**
	 *
	 * @override
	 */
	update() {
		// up: KeyW, ArrowUp, KeyZ
		if( keyIsDown( 87 ) || keyIsDown( 38 ) || keyIsDown( 90 ) ) {
			this.pos.y += 0.1;
		}
		// down: KeyS, ArrowDown
		else if( keyIsDown( 83 ) || keyIsDown( 40 ) ) {
			this.pos.y -= 0.1;
		}
		// left: KeyA, ArrowLeft, KeyQ
		else if( keyIsDown( 65 ) || keyIsDown( 37 ) || keyIsDown( 81 ) ) {
			this.pos.x -= 0.1;
		}
		// right: KeyD, ArrowRight
		else if( keyIsDown( 68 ) || keyIsDown( 39 ) ) {
			this.pos.x += 0.1;
		}
	}


};
