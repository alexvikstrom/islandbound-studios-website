import formatNumber from "../../utils/formatNumber";

type AcrossOurGamesProps = {
    totalVisits: number;
    totalPlaying: number;
}

function AcrossOurGames({ totalVisits, totalPlaying }: AcrossOurGamesProps) {
    return (
        <div className="px-3.5 pt-10 pb-4 flex flex-col gap-3">
            <div className="flex flex-col gap-2">
                <h2 className="text-3xl font-medium">Across Our Games</h2>
                <h4 className="text-xl text-neutral-400">Together, our games have reached millions of players</h4>
            </div>
            <div className="flex flex-row gap-2.5">
                <div className="flex flex-row items-center gap-0.5">
                    <img src="/Visits.png" alt="" className="max-h-6 aspect-square" />
                    <h3 className="text-2xl text-md">{formatNumber(totalVisits)} Total Plays</h3>
                </div>
                <div className="h-8 border-l border-neutral-600/75"></div>
                <div className="flex flex-row items-center gap-0.5">
                    <img src="/ActivePlayers.png" alt="" className="max-h-6 aspect-square" />
                    <h3 className="text-2xl text-md">{formatNumber(totalPlaying)} Active Players</h3>
                </div>
            </div>
        </div>
    )
}

export default AcrossOurGames;