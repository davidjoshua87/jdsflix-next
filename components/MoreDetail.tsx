export default function MoreDetail() {
    return (
        <div className="bg-transparent text-white block relative m-auto max-w-[1600px] pt-6 pb-6 lg:pl-24 lg:pr-24 md:pl-2 md:pr-2" id="section-more-details">
            <div className="text-white">
                <h2 className="text-3xl font-normal leading-8 inline-block">More Details</h2>
            </div>
            <div className="grid lg:grid-cols-3 gap-3 text-white text-base">
                <div className="m-1 max-w-full">
                    <div className="text-gray-500 text-base font-normal leading-5 mb-1">Watch offline</div>
                    <div className="text-white inline-block text-base font-normal leading-5 whitespace-pre-wrap"><span className="more-details-item item-download" >Available to download</span></div>
                </div>
                <div className="m-1 max-w-full">
                    <div className="text-gray-500 text-base font-normal leading-5 mb-1">Genres</div>
                    <div className="text-white inline-block text-base font-normal leading-5 whitespace-pre-wrap"><span className="more-details-item item-genres"><a className="more-details-item item-genres"
                                href="#">Sci-Fi Movies</a>, </span><span
                            className="more-details-item item-genres"><a className="more-details-item item-genres"
                                href="#">US Movies</a>, </span><span
                            className="more-details-item item-genres"><a
                                className="more-details-item item-genres"
                                href="#">Action &amp; Adventure</a></span></div>
                </div>
                <div className="m-1 max-w-full">
                    <div className="text-gray-500 text-base font-normal leading-5 mb-1">This movie is...</div>
                    <div className="text-white inline-block text-base font-normal leading-5 whitespace-pre-wrap"><span className="more-details-item item-mood-tag">Adrenaline Rush</span></div>
                </div>
                <div className="m-1 max-w-full">
                    <div className="text-gray-500 text-base font-normal leading-5 mb-1">Audio</div>
                    <div className="text-white inline-block text-base font-normal leading-5 whitespace-pre-wrap"><span className="more-details-item item-audio">English - Audio Description
                        </span><span className="more-details-item item-audio">English [Original]</span></div>
                </div>
                <div className="m-1 max-w-full">
                    <div className="text-gray-500 text-base font-normal leading-5 mb-1">Subtitles</div>
                    <div className="text-white inline-block text-base font-normal leading-5 whitespace-pre-wrap"><span className="more-details-item item-subtitle">English
                            </span><span className="more-details-item item-subtitle">Indonesian
                            </span><span className="more-details-item item-subtitle">Simplified Chinese
                            </span><span className="more-details-item item-subtitle">Traditional Chinese</span></div>
                </div>
            </div>
            <div className="grid lg:grid-cols-3 gap-3 mt-2 text-white text-base">
                <div className="more-details-cell cell-cast">
                    <div className="text-gray-500 text-base font-normal leading-5 mb-1">Cast</div>
                    <div className="text-white inline-block text-base font-normal leading-5 whitespace-pre-wrap">
                        <span className="more-details-item item-cast">Tom Hardy</span>
                        <span className="more-details-item item-cast">Woody Harrelson</span>
                        <span className="more-details-item item-cast">Michelle Williams</span>
                        <span className="more-details-item item-cast">Naomie Harris</span>
                        <span className="more-details-item item-cast">Reid Scott</span>
                        <span className="more-details-item item-cast">Stephen Graham</span>
                        <span className="more-details-item item-cast">Peggy Lu</span>
                        <span className="more-details-item item-cast">Sian Webber</span>
                        <span className="more-details-item item-cast">Michelle Greenidge</span>
                        <span className="more-details-item item-cast">Rob Bowen</span></div>
                </div>
            </div>
        </div>
    );
}