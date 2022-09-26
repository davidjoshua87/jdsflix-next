import { useEffect, useState } from 'react';
import { Movie, Genre } from '../types';

interface Props {
    movieDetail: Movie[];
}

export default function MoreLike({ movieDetail }: Props) {
    const [movie, setMovie] = useState<Movie | null>(null);
    const [genres, setGenres] = useState<Genre[]>([]);

    useEffect(() => {
        setMovie(
            movieDetail[0]
        );
    }, [movieDetail]);

    useEffect(() => {
        if (!movie) return;

        async function fetchMovie() {
            const data = await fetch(
                    `https://api.themoviedb.org/3/${
            movie?.media_type === 'tv' ? 'tv' : 'movie'
            }/${movie?.id}?api_key=${
            process.env.NEXT_PUBLIC_TMDB_API_KEY
            }&language=en-US&append_to_response=videos`
                )
                .then((response) => response.json())
                .catch((error) => console.log(error));

            if (data?.genres) {
                setGenres(data.genres);
            }
        }

        fetchMovie();
        
    }, [movie]);

    useEffect(() => {
        if (!movie) return;

        async function fetchMoreMovie() {
            let dataMoreMovie: never[]
            genres.map(async genre => {
                console.log(genre, '=======genre');
                dataMoreMovie = await fetch(
                    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY
                    }&language=en-US&with_genres=${genre.id}`)
                    .then((response) => response.json())
                    .catch((error) => console.log(error));
                console.log(dataMoreMovie, '=======');
            });
        }

        fetchMoreMovie();
        
    }, [movie]);

    const array = [...Array(9)];
    return (
        <section className="bg-transparent text-white block relative m-auto max-w-[1600px] pt-6 pb-6 lg:pl-24 lg:pr-24 md:pl-2 md:pr-2" id="section-more-titles">
            <div className="text-white">
                <h2 className="text-3xl font-normal leading-8 inline-block">More Like This</h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 md:grid-cols-6 gap-3 text-white text-base mt-4">
                {genres.map((data, index) => (
                    <a key={data.id} id={`${index}`}  className="m-1 max-w-full" href="#">
                        <img
                            className="w-full"
                            src="https://occ-0-2008-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVp7VvHuBRDVx7Qa39vVqBxxNEY12PL5_MzJMX8mW27g_a4Src6zh3jjhgrnbBczZGk_T7MpBj-9i0FD6lRXhUWdIMQGsTaACDrj.jpg?r=81b"
                            alt="Transformers" loading="lazy"
                        />
                    </a>
                ))}
            </div>
        </section>
    );
}