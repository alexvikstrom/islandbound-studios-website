import GameCard from "./GameCard";

import type { GameCardData } from "../../types/game";

type GamesListProps = {
    gameCards: GameCardData[];
}

function GamesList({ gameCards }: GamesListProps) {
    return (
        <div className="w-full">
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 py-4.5">
                {gameCards.map((gameCard) => (
                    <GameCard key={gameCard.rootPlaceId} gameCard={gameCard} />
                ))}
            </ul>
        </div>
    );
}

export default GamesList;