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
		else if( this.type === js13k.Decoration.FOG ) {
			this.renderOrder = pos.y;
		}
	}


	/**
	 * @override
	 */
	render() {
		if( this.type === js13k.Decoration.BLOOD ) {
			drawTile( this.pos, vec2( 0.5 ), 10, vec2( 16 ) );
		}
		else if( this.type === js13k.Decoration.FOG ) {
			let pos = this.pos.copy();
			pos.x += Math.sin( time ) * 0.05;
			pos.y += Math.cos( this.spawnTime + time ) * 0.02;

			drawTile( pos, vec2( 1 ), 3 );
		}
	}


};


js13k.Decoration.BLOOD = 1;
js13k.Decoration.FOG = 2;
