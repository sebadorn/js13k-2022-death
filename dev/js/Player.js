'use strict';


js13k.Player = class extends js13k.Creature {


	/**
	 * @constructor
	 * @override
	 * @param {Vector2} pos
	 */
	constructor( pos ) {
		super( 'Player', pos, vec2( 0.5 ), 16, vec2( 16 ) );

		this.health = 3;
		this.moveDistance = 3;
	}


	/**
	 * @param  {js13k.Creature} target
	 * @return {function}
	 */
	getTurnActionAttack( target ) {
		const timerPanTo = new Timer( 0.5 );
		const timerPanBack = new Timer();

		let attackDone = false;
		let startCam = this.pos;
		let endCam = target.pos;
		let progress = 0;

		return cbEnd => {
			if( timerPanTo.elapsed() ) {
				progress = Math.sqrt( timerPanBack.getPercent() );
			}
			else {
				progress = Math.sqrt( timerPanTo.getPercent() );
			}

			if( timerPanTo.elapsed() && !attackDone ) {
				timerPanBack.set( 0.5 );

				startCam = target.pos.copy();
				endCam = this.pos.copy();

				target.health -= this.attackDamage;

				if( target.health <= 0 ) {
					target.die();
				}

				attackDone = true;
			}
			else if( timerPanBack.elapsed() ) {
				cbEnd();
				return;
			}

			cameraPos.x = startCam.x * ( 1 - progress ) + endCam.x * progress;
			cameraPos.y = startCam.y * ( 1 - progress ) + endCam.y * progress;
		};
	}


};
