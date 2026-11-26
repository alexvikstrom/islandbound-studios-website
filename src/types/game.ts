export type Game = {
    universeId: number;
};

export type GameCardData = {
    rootPlaceId: number
    name: string;
    icon: string;
    playing: number;
    visits: number;
};

export type FeaturedGameData = {
    rootPlaceId: number
    name: string;
    thumbnail: string;
    playing: number;
    visits: number;
    description: string;
};