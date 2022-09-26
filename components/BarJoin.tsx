export default function BarJoin() {

    return (
        <div className="p-2 mt-12 relative bg-gradient-to-r from-gray-800 to-gray-900 z-10 flex flex-row items-center">
            <svg className="h-10 ml-6 p-0" focusable="false"
                viewBox="225 0 552 1000" aria-hidden="true" data-uia="n-logo">
                <defs>
                    <radialGradient id="874d9857-3640-4172-a75c-2df0cab2dc0c-a" r="75%"
                        gradientTransform="matrix(.38 0 .5785 1 .02 0)">
                        <stop offset="60%" stopOpacity=".3"></stop>
                        <stop offset="90%" stopOpacity=".05"></stop>
                        <stop offset="100%" stopOpacity="0"></stop>
                    </radialGradient>
                </defs>
                <path d="M225 0v1000c60-8 138-14 198-17V0H225" fill="#b1060e"></path>
                <path d="M579 0v983c71 3 131 9 198 17V0H579" fill="#b1060e"></path>
                <path d="M225 0v200l198 600V557l151 426c76 3 136 9 203 17V800L579 200v240L423 0H225"
                    fill="url(#874d9857-3640-4172-a75c-2df0cab2dc0c-a)"></path>
                <path d="M225 0l349 983c76 3 136 9 203 17L423 0H225" fill="#e50914"></path>
            </svg>
        <div className="lg:flex items-center lg:flex-row md:flex-column justify-between pl-5 flex-auto">
            <div className="flex-auto md:w-full">Watch all you want.</div>
            <div><button className="bg-red-700 text-white rounded-sm whitespace-no-wrap mt-1 mr-6 mb-1 ml-4 text-xs leading-4 w-auto min-h-auto pt-2 pb-2 pl-5 pr-5 md:w-full text-center">JOIN NOW</button></div>
        </div>
    </div>
    );
}