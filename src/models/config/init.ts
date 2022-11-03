import { sample } from 'effector';
import { GameConfig, SortType } from './types';
import { $gameConfig, restartGame, setGameConfig } from './units';

sample({
	clock: setGameConfig,
	fn: (config): GameConfig => {
		return {
			count: Number(config.count),
			sort: Number(config.sort) as SortType,
			valueType: config.valueType,
		};
	},
	target: $gameConfig,
});

sample({
	clock: restartGame,
	fn: () => null,
	target: $gameConfig,
});
