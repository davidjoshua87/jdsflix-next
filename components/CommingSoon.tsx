export default function CommingSoon() {
    const array = [...Array(9)];

    return (
        <section className="bg-transparent text-white block relative m-auto max-w-[1600px] pt-6 pb-6 lg:pl-24 lg:pr-24 md:pl-2 md:pr-2" id="section-coming-soon">
            <div className="text-white">
                <h2 className="text-3xl font-normal leading-8 inline-block">Coming Soon</h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 md:grid-cols-6 gap-3 text-white text-base mt-4">
                {array.map((data, index) => (
                    <a key={index} id={`${index}`} className="m-1 max-w-full" href="#">
                        <div className="text-white text-base font-normal leading-5">The Law According to Lidia Poet</div>
                        <div className="text-gray-500 text-sm font-normal leading-4">Forbidden from practicing law, a woman prepares an appeal to overturn the court's decision in this true story of Lidia Poët, Italy's first female lawyer.</div>
                    </a>
                ))}
            </div>
        </section>
    );
}