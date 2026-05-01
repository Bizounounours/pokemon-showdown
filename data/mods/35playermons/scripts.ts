export const Scripts: ModdedBattleScriptsData = {
	inherit: 'gen9',
	init() {
		// On parcourt tous les Pokémon de ton mod
		for (const i in this.data.Pokedex) {
			const pokemon = this.data.Pokedex[i];
			// Si le Pokémon a un spriteid différent de son propre ID
			if (pokemon.spriteid && pokemon.spriteid !== i) {
				// On force le client à utiliser ce spriteid pour l'affichage
				this.modData('Pokedex', i).spriteid = pokemon.spriteid;
				// Optionnel : On peut aussi forcer baseSpecies si besoin
				// this.modData('Pokedex', i).baseSpecies = pokemon.spriteid;
			}
		}
	},
};
