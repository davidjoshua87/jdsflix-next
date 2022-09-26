export default function InfoBar() {
    return (
        <div className="bg-transparent relative m-auto max-w-[1600px] pt-6 pb-6 lg:pl-24 lg:pr-24 md:pl-2 md:pr-2" id="section-hook" data-uia="section-hook">
            <hr className="pt-4 text-gray-300"></hr>
            <div className="pb-4 m-auto text-center text-base max-w-base text-gray-300 font-normal leading-5" data-uia="hook-text">Andy Serkis directs this sequel starring Tom Hardy, Woody Harrelson,
                Michelle Williams and Naomie Harris.</div>
            <hr className="text-gray-300"></hr>
        </div>
    );
}