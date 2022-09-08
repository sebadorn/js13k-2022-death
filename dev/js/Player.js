'use strict';


js13k.Player = class extends js13k.Creature {


	/**
	 * @constructor
	 * @override
	 * @param {Vector2} pos
	 */
	constructor( pos ) {
		super( 0, pos, vec2( 0.5 ), 16, vec2( 16 ) );

		this.soulPower = 5;
		this.moveDistance = 3;

		this.attackDamage = 1;
		this.attackRange = 1.5;
	}


	/**
	 * @param  {js13k.Creature} target
	 * @return {function}
	 */
	getTurnActionAttack( target ) {
		const timerPanTo = new Timer( 0.3 );
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
				timerPanBack.set( 0.3 );

				startCam = target.pos.copy();
				endCam = this.pos.copy();

				target.soulPower -= this.attackDamage;

				if( target.soulPower <= 0 ) {
					target.die();

					// Destroying an enemy increases soul power.
					this.soulPower++;
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


	/**
	 * @override
	 */
	update() {
		if( this.isWalking ) {
			this.tileIndex = 16;
		}
		else if( this.soulPower > 0 ) {
			this.tileIndex = 16;

			if( this._animTimerIdle.elapsed() ) {
				this._animTimerIdle.set( 3 );
			}
			else if( this._animTimerIdle.get() >= -1 ) {
				this.tileIndex = 17;
			}
		}

		super.update();
	}


};
