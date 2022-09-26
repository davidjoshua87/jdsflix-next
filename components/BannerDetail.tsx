import Image from 'next/image';
import { useEffect, useState } from 'react';
import { baseUrl } from '../constants/movie';
import { Movie } from '../types';
import { FaPlay } from 'react-icons/fa';
import { InformationCircleIcon } from '@heroicons/react/24/solid';
import { useRecoilState } from 'recoil';
import { modalState, movieState } from '../atoms/modalAtom';

interface Props {
    movieDetail: Movie[];
}

export default function Banner({ movieDetail }: Props) {
    const [movie, setMovie] = useState<Movie | null>(null);
    const [showModal, setShowModal] = useRecoilState(modalState);
    const [currentMovie, setCurrentMovie] = useRecoilState(movieState);

    useEffect(() => {
        setMovie(
            movieDetail[0]
        );
    }, [movieDetail]);

    return (
    <div className="mt-10 space-y-2 py-16 md:space-y-4 lg:h-[20vh] lg:justify-end lg:pb-12">
        <div className="absolute top-0 left-0 h-[95vh] w-screen -z-10">
            <Image
                src={`${baseUrl}/${movie?.backdrop_path || movie?.poster_path}`}
                alt={movie?.title || movie?.name || movie?.original_name}
                layout="fill"
                objectFit="cover"
            />
        </div>
        <h1 className="text-2xl md:text-1xl lg:text-3xl font-bold lg:pt-40">
            {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="flex flex-row">
            <p className="max-w-xs text-shadow-md text-xs md:max-w-lg md:text-lg lg:max-w-4xl">
                {movie?.release_date?.split("-")[0]}
            </p>
            <span className="mr-2 ml-2"> | </span>
            <p className="max-w-xs text-shadow-md text-xs md:max-w-lg md:text-lg lg:max-w-4xl">
                {movie?.runtime + "minutes"|| "0minutes"}
            </p>
            <span className="mr-2 ml-2"> | </span>
            <p className="font-semibold text-green-400">
                {((movie?.vote_average || 0) * 10).toFixed(2)}% Match
            </p>
        </div>
        <p className="max-w-xs text-shadow-md text-xs md:max-w-lg md:text-lg lg:max-w-4xl">
            {movie?.overview}
        </p>  
        <div className="flex absolute space-x-3 z-20">
            <button className="bannerButton bg-white text-black"
                onClick={() => {
                    setShowModal(true);
                    setCurrentMovie(movie);
                }}
                >
                <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" />
                Play
            </button>
            {/* <button
                className="bannerButton bg-[gray]/70"
            >
                More Info <InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8" />
            </button> */}
        </div>
    </div>
    );
}
