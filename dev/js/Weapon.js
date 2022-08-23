'use stirct';


js13k.Weapon = class extends EngineObject {


	/**
	 * @constructor
	 * @override
	 * @param {js13k.Creature} owner
	 */
	constructor( owner ) {
		super( owner ? owner.pos : vec2( 0 ), vec2( 1 ) );

		this.attackDamage = 1;
		this.attackRange = 1;
		this.name = null;
		this.owner = owner;
	}


	/**
	 * @override
	 */
	render() {
		if( this.owner ) {
			super.render();
		}
	}


	/**
	 * @override
	 */
	update() {
		if( this.owner ) {
			super.update();
		}
	}


};
