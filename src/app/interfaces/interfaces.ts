export interface RespuestaMDB {
  results: Pelicula[];
  total_pages: number;
  page: number;
  total_results: number;
}

export interface Pelicula {
  id: number;
  popularity: number;
  vote_count: number;
  overview: string;
  release_date: string;
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  vote_average: number;
  original_language: string;
  original_title: string;
  poster_path: string;
  title: string;
  video: boolean;
}