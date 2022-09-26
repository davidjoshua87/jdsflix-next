export interface Genre {
  id: number;
  name: string;
}

export interface Movie {
  data(): unknown;
  title: string;
  backdrop_path: string;
  media_type?: string;
  release_date?: string;
  first_air_date: string;
  genres: [];
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  production_countries: {
    [key: number]: Country
  };
  runtime: number;
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

export interface Country {
  iso_3166_1: string;
}

export interface Element {
  type:
    | 'Bloopers'
    | 'Featurette'
    | 'Behind the Scenes'
    | 'Clip'
    | 'Trailer'
    | 'Teaser';
}
