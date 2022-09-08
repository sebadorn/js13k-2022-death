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
	 * @return {?js13k.Creature}
	 */
	canAttackTile( tileContent ) {
		return tileContent && tileContent.find( c => c instanceof js13k.Creature );
	},


	/**
	 *
	 * @param  {?EngineObject[]} tileContent
	 * @return {boolean}
	 */
	canMoveToTile( tileContent ) {
		return !tileContent || !tileContent.find( c => c.type !== js13k.Decoration.FOG );
	},


	/**
	 *
	 */
	doTurn() {
		if( this._turnAction ) {
			this._turnAction( _ => this.endTurn() );
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
				let attackable = null;

				// Show tile as possible move target.
				if( js13k.turnCreature.hasMoveLeft && this.canMoveToTile( tileContent ) ) {
					// Check if tile is in move distance.
					if( distance <= js13k.turnCreature.moveDistance ) {
						tile.highlightMove = true;

						// Move to tile.
						if( mouseWasPressed( 0 ) ) {
							this._turnAction = js13k.turnCreature.getTurnActionMove( mouseX, mouseY );
							js13k.turnCreature.hasMoveLeft = false;
						}
					}
				}
				// Show tile as possible attack target.
				else if(
					js13k.turnCreature.hasAttackLeft &&
					/* jshint -W084 */
					( attackable = this.canAttackTile( tileContent ) )
					/* jshint +W084 */
				) {
					// Check if tile is in attack distance.
					if(
						attackable !== js13k.turnCreature &&
						distance <= js13k.turnCreature.attackRange
					) {
						tile.highlightAttack = true;

						// Attack creature on the tile.
						if( mouseWasPressed( 0 ) ) {
							this._turnAction = js13k.turnCreature.getTurnActionAttack( attackable );
							js13k.turnCreature.hasAttackLeft = false;
						}
					}
				}
			}
		}
		else if( js13k.turnCreature ) {
			this._turnAction = js13k.turnCreature.decideOnTurnAction();

			// Creature could not find a suitable action. End turn.
			if( !this._turnAction ) {
				js13k.turnCreature.hasAttackLeft = false;
				js13k.turnCreature.hasMoveLeft = false;

				this.endTurn();
			}
		}
	},


	/**
	 *
	 */
	endTurn() {
		js13k.currentLevel.updateTileMap();

		if( this.isPlayerTurn() ) {
			if( js13k.currentLevel.checkForAndHandleEnd() ) {
				return;
			}
		}

		this._turnAction = null;

		// If creature has no action left for this
		// round, continue to next creature.
		if(
			!js13k.turnCreature.hasMoveLeft &&
			!js13k.turnCreature.hasAttackLeft
		) {
			js13k.turnCreature.hasMoveLeft = true;
			js13k.turnCreature.hasAttackLeft = true;
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

				if( i <= this._current ) {
					this._current--;
				}

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
		this._turnAction = null;
	}


};
