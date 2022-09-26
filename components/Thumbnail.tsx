import Image from 'next/image';
import React from 'react';
import { useRecoilState } from 'recoil';
import { modalState, movieState } from '../atoms/modalAtom';
import { Movie } from '../types';
import Link from 'next/link';

interface Props {
  movie: Movie ;
}

const Thumbnail = ({ movie }: Props) => {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);
  return (
    <Link href="/detail-movie/[id]" as={`/detail-movie/${movie.id}`}>
      <div
        className="relative h-28 min-w-[180px] cursor-pointer transition-transform duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105"
        onClick={() => {
          // setShowModal(true);
          setCurrentMovie(movie);
        }}
      >
        <Image
          src={`https://image.tmdb.org/t/p/w500${
            movie.backdrop_path || movie.poster_path
          }`}
          layout="fill"
          className="rounded-sm object-cover md:rounded"
          alt={movie.name}
        />
        <div className="absolute w-full -mb-12 bottom-0 left-0 text-center text-ts">
          <h3>
            {movie?.title || movie?.name || movie?.original_name}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default Thumbnail;
