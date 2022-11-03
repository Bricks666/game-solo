import { createDomain } from 'effector';
import { GameConfig } from './types';

export const GameDomain = createDomain('GameDomain');

export const startLevelGame = GameDomain.event();
export const restartGame = GameDomain.event();
export const $gameConfig = GameDomain.store<GameConfig | null>(null);
export const $hasGameConfig = $gameConfig.map(Boolean);
export const setGameConfig = GameDomain.event<GameConfig>();
