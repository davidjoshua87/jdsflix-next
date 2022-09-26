import { XMarkIcon, SpeakerWaveIcon, SpeakerXMarkIcon, PlayCircleIcon, PauseCircleIcon } from '@heroicons/react/24/solid';
import {  } from '@heroicons/react/24/solid';
import MuiModal from '@mui/material/Modal';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FaPlay } from 'react-icons/fa';
import ReactPlayer from 'react-player';
import { useRecoilState, useRecoilValue } from 'recoil';
import { modalState, movieState } from '../atoms/modalAtom';
import { Element, Genre, Movie } from '../types';

const toastStyle = {
  background: 'white',
  color: 'black',
  fontWeight: 'bold',
  fontSize: '1rem',
  padding: '15px',
  borderRadius: '9999px',
  maxWidth: '1000px',
};

export default function Modal() {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const movie = useRecoilValue(movieState);
  const [trailer, setTrailer] = useState<string | null>(null);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [muted, setMuted] = useState<boolean>(false);
  const [pause, setPause] = useState<boolean>(true);
  const [addedToList, setAddedToList] = useState<boolean>(false);
  const [moviesInList, setMoviesInList] = useState<Movie[]>(
    []
  );

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

      if (data?.videos) {
        const index = data.videos.results.findIndex(
          (element: Element) => element.type === 'Trailer'
        );
        setTrailer(data.videos?.results[index]?.key);
      }

      if (data?.genres) {
        setGenres(data.genres);
      }
    }

    fetchMovie();
  }, [movie]);

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <MuiModal
      open={showModal}
      onClose={handleClose}
      className="fixed !top-20 left-0 right-0 z-50 mx-auto w-full max-w-5xl overflow-hidden overflow-y-scroll rounded-md scrollbar-hide"
    >
      <>
        <Toaster position="bottom-center" />
        <button
          onClick={handleClose}
          className="modalButton absolute right-5 lg:top-20 md:top-6 z-40 h-9 w-9 border-none bg-[#181818] hover:bg-[#333]"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>

        <div className="relative aspect-video">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${trailer}`}
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: '0', left: '0' }}
            playing={pause}
            muted={muted}
          />
          <div className="absolute bottom-5 lg:bottom-20 md:bottom-10 flex w-full items-center justify-between px-10">
            <div className="flex space-x-3">
              <button onClick={() => setPause(!pause)} className="flex items-center gap-x-2 rounded-xl bg-white px-2 pt-1 pb-1 text-xl font-bold text-black transition hover:bg-[#e6e6e6]">
                {pause ? (
                  <PlayCircleIcon className="h-7 w-7 text-black" /> 
                ) : (
                  <PauseCircleIcon className="h-7 w-7 text-black" />
                )}
              </button>
            </div>
            <button onClick={() => setMuted(!muted)}>
              {muted ? (
                <SpeakerWaveIcon className="h-6 w-6" />
              ) : (
                <SpeakerXMarkIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </>
    </MuiModal>
  );
}
