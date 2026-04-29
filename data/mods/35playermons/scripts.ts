export const Scripts: ModdedBattleScriptsData = {
	gen: 9,
	init() {
		// Cette fonction force le moteur à lire le Pokédex du mod au démarrage
		for (const i in this.data.Pokedex) {
			this.data.FormatsData[i] = { tier: "OU" };
		}
	},
};
