'use strict';


js13k.TurnManager = {


	_creatures: [],
	_current: 0,


	/**
	 * Add a creature to the turn list.
	 * It will be added at the end.
	 * @param {js13k.Creature} creature
	 */
	addCreature( creature ) {
		this._creatures.push( {
			creature: creature,
			turn: this._creatures.length
		} );
	},


	/**
	 * Get the creature which's turn it currently is.
	 * @return {js13k.Creature}
	 */
	get() {
		return this._creatures[this._current].creature;
	},


	/**
	 * Check if it is the player's turn.
	 * @return {boolean}
	 */
	isPlayerTurn() {
		return this.get() === js13k.currentLevel.player;
	},


	/**
	 * Move to the next turn.
	 */
	next() {
		if( ++this._current >= this._creatures.length ) {
			this._current = 0;
		}
	},


	/**
	 * Reset by removing all creatures.
	 */
	reset() {
		this._creatures = [];
		this._current = 0;
	}


};
