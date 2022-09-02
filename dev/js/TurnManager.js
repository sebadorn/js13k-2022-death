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
		this._creatures.push( creature );
	},


	/**
	 *
	 * @param  {EngineObject[]} tileContent
	 * @return {boolean}
	 */
	canAttackTile( tileContent ) {
		return !!tileContent.find( c => c instanceof js13k.Creature );
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
				const mouseRounded = vec2( mouseX, mouseY );
				const distance = mouseRounded.distance( js13k.turnCreature.pos );
				const tileContent = js13k.currentLevel.getTileContent( vec2( mouseX, mouseY ) );

				// Show tile as possible move target.
				if( !tileContent ) {
					// Check if tile is in move distance.
					if( distance <= js13k.turnCreature.moveDistance ) {
						tile.highlightMove = true;

						// Move to tile.
						if( mouseWasPressed( 0 ) ) {
							this._turnAction = js13k.turnCreature.getTurnActionMove( mouseX, mouseY );
						}
					}
				}
				// Show tile as possible attack target.
				else if( this.canAttackTile( tileContent ) ) {
					// Check if tile is in attack distance.
					if( distance <= js13k.turnCreature.attackRange ) {
						const creature = tileContent.find( c => c instanceof js13k.Creature );

						if( creature !== js13k.turnCreature ) {
							tile.highlightAttack = true;

							// Attack creature on the tile.
							if( mouseWasPressed( 0 ) ) {
								this._turnAction = js13k.turnCreature.getTurnActionAttack( creature );
							}
						}
					}
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
		js13k.currentLevel.updateTileMap();
		this._turnAction = null;

		// If creature has no turns left for this
		// round, continue to next creature.
		if( --js13k.turnCreature.turnMoves <= 0 ) {
			js13k.turnCreature.turnMoves = js13k.turnCreature.defaultNumTurnMoves;
			js13k.turnCreature = this.next();
		}
	},


	/**
	 * Get the creature which's turn it currently is.
	 * @return {js13k.Creature}
	 */
	get() {
		return this._creatures[this._current];
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
	 *
	 * @param {js13k.Creature} creature
	 */
	removeCreature( creature ) {
		for( let i = 0; i < this._creatures.length; i++ ) {
			const entry = this._creatures[i];

			if( entry === creature ) {
				this._creatures.splice( i, 1 );
				break;
			}
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
