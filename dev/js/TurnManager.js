'use strict';


js13k.TurnManager = {


	_creatures: [],
	_current: 0,
	_turnAction: null,


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
	 *
	 */
	doTurn() {
		if( this._turnAction ) {
			this._turnAction( this.endTurn.bind( this ) );
			return;
		}

		if( this.isPlayerTurn() ) {
			const mouseX = Math.round( mousePos.x );
			const mouseY = Math.round( mousePos.y );

			const tile = js13k.currentLevel.tiles[mouseX]?.[mouseY];

			if( tile ) {
				tile.color = js13k.tileHighlightColor;

				if( mouseWasPressed( 0 ) ) {
					this._turnAction = js13k.turnCreature.getTurnActionMove( mouseX, mouseY );
				}
			}
		}
		else if( js13k.turnCreature ) {
			this._turnAction = js13k.turnCreature.decideOnTurnAction();
		}
	},


	/**
	 *
	 */
	endTurn() {
		this._turnAction = null;
		js13k.turnCreature = this.next();
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

		return this.get();
	},


	/**
	 * Reset by removing all creatures.
	 */
	reset() {
		this._creatures = [];
		this._current = 0;
	}


};
