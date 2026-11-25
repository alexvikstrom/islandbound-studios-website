export type Game = {
    rootPlaceId: string;
};

export type UniverseId = {
    universeId: string;
}

export type GameCardData = Game & {
    name: string;
    icon: string;
    playing: number;
    visits: number;
};

export type FeaturedGameData = Game & {
    name: string;
    thumbnail: string;
    playing: number;
    visits: number;
    description: string;
};