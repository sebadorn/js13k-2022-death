'use strict';


js13k.Creature = class extends EngineObject {


	/**
	 * @constructor
	 * @override
	 * @param {string}  name
	 * @param {Vector2} pos
	 * @param {Vector2} size
	 * @param {number}  tileIndex
	 * @param {Color}   color
	 */
	constructor( name, pos, size, tileIndex, color ) {
		super( pos, size, tileIndex, null, 0, color );

		this._fontImage = new FontImage();

		this.attackDamage = 1;
		this.attackRange = 1;
		this.health = 3;
		this.moveDistance = 1;
		this.name = name;
		this.viewRange = 5;
		this.weapon = null; // TODO: weapon should decide attack damage and range
	}


	/**
	 *
	 * @return {function}
	 */
	decideOnTurnAction() {
		let action = null;

		const level = js13k.currentLevel;
		const player = level.player;
		const distance = this.pos.distance( player.pos );

		// Player is within view range.
		if( distance <= this.viewRange ) {
			// Player is also within attack range.
			if( distance <= this.attackRange ) {
				action = this.getTurnActionAttack( player );
			}
			// Move towards player.
			else {
				const step = min( this.moveDistance + 0.5, distance );
				const target = this.pos.add( player.pos.subtract( this.pos ).normalize().scale( step ) ).floor();
				target.x = clamp( target.x, 0, level.size.x - 1 );
				target.y = clamp( target.y, 0, level.size.y - 1 );

				action = this.getTurnActionMove( target.x, target.y );
			}
		}
		// Nothing to do. Move 1 tile in a random direction or just stand still.
		else {
			let xMax = this.pos.x >= level.size.x - 1 ? 0 : 1;
			let xMin = this.pos.x <= 0 ? 0 : -1;

			let yMax = this.pos.y >= level.size.y - 1 ? 0 : 1;
			let yMin = this.pos.y <= 0 ? 0 : -1;

			// TODO: make sure tile isn't already taken

			const step = vec2( rand( xMax, xMin ), rand( yMax, yMin ) );
			const target = this.pos.add( step ).floor();

			action = this.getTurnActionMove( target.x, target.y );
		}

		return action;
	}


	/**
	 *
	 * @param  {js13k.Creature} target
	 * @return {function}
	 */
	getTurnActionAttack( target ) {
		return cbEnd => {
			target.health -= this.attackDamage;
			cbEnd();
		};
	}


	/**
	 *
	 * @param  {number} endX
	 * @param  {number} endY
	 * @return {function}
	 */
	getTurnActionMove( endX, endY ) {
		// Animation duration depends on length of movement.
		const duration = this.pos.distance( vec2( endX, endY ) ) * 0.15;
		const timer = new Timer( duration );
		const startPos = this.pos.copy();

		// Function is called with each main update until "cbEnd" is called.
		return cbEnd => {
			// Smooth the animation with a slow start and end.
			// Math.sin( 0 ) == 0
			// Math.sin( Math.PI / 2 ) == 1
			const progress = Math.sin( Math.PI / 2 * timer.getPercent() );
			this.pos.x = startPos.x * ( 1 - progress ) + endX * progress;
			this.pos.y = startPos.y * ( 1 - progress ) + endY * progress;

			if( timer.elapsed() ) {
				cbEnd();
			}
		};
	}


	/**
	 * @override
	 */
	render() {
		if(
			abs( mousePos.x - this.pos.x ) < this.size.x / 2 &&
			abs( mousePos.y - this.pos.y ) < this.size.y / 2
		) {
			const pos = this.pos.copy();
			pos.y += 0.8;
			this._fontImage.drawText( this.name, pos, 0.03, true );
		}

		super.render();
	}


};
