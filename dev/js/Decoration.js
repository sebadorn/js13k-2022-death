'use strict';


js13k.Decoration = class extends EngineObject {


	/**
	 * @constructor
	 * @override
	 * @param {number}  type
	 * @param {Vector2} pos
	 */
	constructor( type, pos ) {
		super( pos );
		this.type = type;

		if( this.type === js13k.Decoration.BLOOD ) {
			this.pos.x += rand( 0.1, -0.1 );
			this.pos.y += rand( 0.1, -0.1 );
		}
	}


	/**
	 * @override
	 */
	render() {
		if( this.type === js13k.Decoration.BLOOD ) {
			drawTile( this.pos, vec2( 0.5 ), 10, vec2( 16 ) );
		}
	}


};


js13k.Decoration.BLOOD = 1;
