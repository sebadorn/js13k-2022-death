'use strict';


js13k.Player = class extends js13k.Creature {


	/**
	 * @constructor
	 * @override
	 * @param {Vector2} pos
	 */
	constructor( pos ) {
		super( 0, pos, vec2( 0.5 ), 16, vec2( 16 ) );

		this.soulPower = 100;
		this.moveDistance = 3;
		this.movesLeft = this.moveDistance;
		this.setAttack( 0 );
	}


	/**
	 *
	 * @private
	 * @param  {js13k.Creature[]} targets
	 * @return {function}
	 */
	_getTurnActionAttackSweepingBlow( targets ) {
		// TODO: animation

		return cbEnd => {
			targets.forEach( target => {
				target.soulPower -= this.attackDamage;

				if( target.soulPower <= 0 ) {
					target.die();

					// Destroying an enemy increases soul power.
					this.soulPower += target.soulPowerTotal;
				}
			} );

			this.soulPower -= this.attackCost;

			cbEnd();
		};
	}


	/**
	 *
	 * @private
	 * @param  {js13k.Creature[]} targets
	 * @return {function}
	 */
	_getTurnActionAttackThrow( targets ) {
		const lastTarget = targets[targets.length - 1];

		const duration = this.pos.distance( lastTarget.pos ) * 0.2;
		const timer = new Timer( duration );

		const hatchet = new EngineObject( vec2( 0 ), vec2( 0.5 ), 2, vec2( 16 ) );
		hatchet.mirror = targets[0].pos.x < this.pos.x;

		return cbEnd => {
			if( timer.elapsed() ) {
				targets.forEach( ( target, i ) => {
					// Each hit reduces the damage further.
					target.soulPower -= max( this.attackDamage - i * 2, 0 );

					if( target.soulPower <= 0 ) {
						target.die();

						// Destroying an enemy increases soul power.
						this.soulPower += target.soulPowerTotal;
					}
				} );

				this.soulPower -= this.attackCost;

				hatchet.destroy();
				cbEnd();
			}
			else {
				const progress = timer.getPercent();
				hatchet.angle = progress * Math.PI * 4;
				hatchet.pos.x = lastTarget.pos.x * progress + this.pos.x * ( 1 - progress );
				hatchet.pos.y = lastTarget.pos.y * progress + this.pos.y * ( 1 - progress );
			}
		};
	}


	/**
	 *
	 * @override
	 * @param  {js13k.Creature|js13k.Creature[]} targets
	 * @return {function}
	 */
	getTurnActionAttack( targets ) {
		if( this.attackType == 1 ) {
			return this._getTurnActionAttackSweepingBlow( targets );
		}
		else if( this.attackType == 2 ) {
			return this._getTurnActionAttackThrow( targets );
		}

		return this._getTurnActionAttackNormal( targets );
	}


	/**
	 *
	 * @param {number} type
	 */
	setAttack( type ) {
		const list = [
			[10, 1.5, 0], // normal attack
			[10, 1.5, 20], // sweeping blow
			[8, 4.5, 20], // hatchet throw
		];

		const attack = list[type];

		this.attackType = type;
		this.attackDamage = attack[0];
		this.attackRange = attack[1];
		this.attackCost = attack[2];
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
