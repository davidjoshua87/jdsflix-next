import Head from 'next/head';
import { useEffect, useState } from 'react';
import Router from 'next/router'
import { useRecoilState, useRecoilValue } from 'recoil';
import { modalState, movieState } from '../../atoms/modalAtom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Modal from '../../components/Modal';
import BannerDetail from '../../components/BannerDetail';
import BarJoin from '../../components/BarJoin';
import InfoBar from '../../components/InfoBar';
import MoreDetail from '../../components/MoreDetail';
import MoreLike from '../../components/MoreLike';
import CommingSoon from '../../components/CommingSoon';
import { Element, Genre, Movie } from '../../types/index';
import { useRouter } from 'next/router';
import styles from '../../styles/Main.module.scss';

const DetailMovie = () => {
    const movie = useRecoilValue(movieState);
    const [currentMovie, setCurrentMovie] = useRecoilState(movieState);
    const [trailer, setTrailer] = useState<string | null>(null);
    const [genres, setGenres] = useState<Genre[]>([]);
    const [muted, setMuted] = useState<boolean>(false);
    const [addedToList, setAddedToList] = useState<boolean>(false);
    const [moviesInList, setMoviesInList] = useState<Movie[]>(
        []
    );
    const showModal = useRecoilValue(modalState);
    const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
    const BASE_URL = 'https://api.themoviedb.org/3';
    const router = useRouter();
    const ID = router.query.id;
    

    useEffect(() => {

        async function fetchMovie() {
            const {
                data,
                error
            } = await fetch(
                    `https://api.themoviedb.org/3/${
                movie?.media_type === 'tv' ? 'tv' : 'movie'
            }/${movie?.id}?api_key=${
                process.env.NEXT_PUBLIC_TMDB_API_KEY
            }&language=en-US&append_to_response=videos`
                )
                .then((response) => response.json())
                .catch((error) => console.log(error));
            
            const detailmovie = await Promise.all([
                fetch(`${BASE_URL}/movie/${ID}?api_key=${API_KEY}`).then((res) => res.json()),
            ]);

            if (data?.videos) {
                const index = data.videos.results.findIndex(
                    (element: Element) => element.type === 'Trailer'
                );
                setTrailer(data.videos?.results[index]?.key);
            }

            if (data?.genres) {
                setGenres(data.genres);
            }
            if (detailmovie) {
                setMoviesInList(detailmovie);
            }
            if (!data) return <div> Loading... </div>
            if (error) return <div> Failed to load movie </div>
            if (!movie) return
        }
    
        fetchMovie();
        
    }, [movie]);

    const movieDetail = moviesInList

    const backHome = () => {
        Router.push("/")
    };    

    return ( movie !== null ? 
        <div
            className={`relative h-screen bg-gradient-to-b lg:h-[140vh] ${
            showModal && '!h-screen overflow-hidden'
            }`}
        >
            <Head>
            <title>Detail Movie - Netflix clone</title>
            <link rel="icon" href="/favicon.ico" />
            </Head>
    
            <Header />
            <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
            <BannerDetail movieDetail={movieDetail} />
                <section className={`relative pt-80 mr-14 md:space-y-24 ${styles.section}`}>
                    <BarJoin />
                    <InfoBar />
                    <MoreDetail />
                    <MoreLike movieDetail={movieDetail} />
                    <CommingSoon/>
            </section>
            </main>
    
            <Footer />
    
            {showModal && <Modal />}
        </div> : <div className="flex flex-row justify-center text-center m-40">
            <button onClick={backHome} className="bg-red-700 text-white rounded-sm whitespace-no-wrap mt-10 mr-6 mb-1 ml-4 text-xs leading-4 w-auto min-h-auto pt-2 pb-2 pl-5 pr-5 text-center">Back</button>
        </div>
    )
}

export default DetailMovie;

// export const getServerSideProps = async () => {
//     const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
//     const BASE_URL = 'https://api.themoviedb.org/3';
//     const router = useRouter();
//     const ID = router.query.id;
//     const [
//         detailmovie,
//     ] = await Promise.all([
//         fetch(`${BASE_URL}/movie/${ID}?api_key=${API_KEY}`).then((res) => res.json()),
//     ]);

//     return {
//         props: {
//             movies: detailmovie.results,
//         },
//     };
// };