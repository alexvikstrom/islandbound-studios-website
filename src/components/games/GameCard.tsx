import type { GameCardData } from "../../types/game";

import formatNumber from "../../utils/formatNumber";

type GameCardProps = {
    gameCard: GameCardData;
}

function GameCard({ gameCard }: GameCardProps) {
    return (
        <li className="group">
            <div className="bg-neutral-950 transition-colors duration-250 hover:bg-white/10 rounded-2xl h-full">
                <a href={`https://www.roblox.com/games/${gameCard.rootPlaceId}/`} target="_blank" rel="noopener noreferrer">
                    <div className="h-full flex flex-col gap-1.5 px-3.5 py-3.5">
                        <img src={gameCard.icon} alt="" className="aspect-square rounded-2xl" loading="lazy" />
                        <div className="flex flex-col gap-3 h-full">
                            <h3 className="text-xl font-medium h-full">{gameCard.name}</h3>
                            <div className="flex flex-row gap-2.5">
                                <div className="flex flex-row items-center gap-0.5">
                                    <img src="/Visits.png" alt="" className="max-h-4 aspect-square" />
                                    <h4 className="text-md">{formatNumber(gameCard.visits)}</h4>
                                </div>
                                <div className="flex flex-row items-center gap-0.5">
                                    <img src="/ActivePlayers.png" alt="" className="max-h-4 aspect-square" />
                                    <h4 className="text-md">{formatNumber(gameCard.playing)}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </li>
    );
}

export default GameCard;