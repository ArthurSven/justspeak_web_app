import React from 'react';
import Germany from './../../assets/germany.jpg'

function GermanHome() {
    return (
        <div className="h-full pt-1 pl-4 pr-4">
            <div className="bg-white shadow-2xl rounded-lg p-6 w-full">

                {/* Heading sits above the grid */}
                <h2 className="text-2xl font-semibold text-black mb-6">
                    Guten Tag! Welcome to German with JustSpeak
                </h2>

                {/* Grid for content */}
                <div className="grid grid-cols-2 md:grid-cols-2 gap-6 md:gap-8 items-start">
                    <figure className="max-w-lg">
                        <img
                            className="h-auto w-fullrounded-lg"
                            src={Germany}
                            alt="Deutschland"
                        />
                        <figcaption className="mt-2 text-sm text-center text-gray-500">
                            Photo by{" "}
                            <a href="https://unsplash.com/@ashkned">Ashley Knedler</a> on{" "}
                            <a href="https://unsplash.com/photos/UdQ4SdV9UE8">Unsplash</a>
                        </figcaption>
                    </figure>

                    {/* Text or future content column */}
                    <div className="space-y-4 ">
                        <p className="text-gray-700 text-lg leading-relaxed">
                            Learn German with ease and fun — from basics to advanced. German is an indo-european language
                             spoken in Germany, Austria, Switzerland, Liechtenstein, and surrounding areas. German has over
                            130 million speakers world wide and is the most spoken language in the EU!
                        </p>
                        <h3 className="text-gray-800 text-lg font-bold mt-5">
                            Why learn German?
                        </h3>
                        <ul>
                            <li><span className="font-bold">Global opportunities: </span>Germany has leading industries both in Europe and globally e.g. Benz, Audi, SAP, Adidas</li>
                            <li><span className="font-bold">Accessible education: </span>Germany is one of the countries where a large number of public universities are free tuition, even for non-German students</li>
                            <li><span className="font-bold">Rich culture: </span>Access literature, history, philosophy and even scientific research in the original written language</li>
                            <li><span className="font-bold">Easy Travel: </span>Do you plan on skiing? or maybe a hike though the alps? perhaps you want to visit magical castles? All this can be done in the German speaking area (DACH) and the experience will be splendid in German!!</li>
                        </ul>
                    </div>
                </div>
                <div className="text-gray-700 grid grid-cols-2 md:grid-cols-2 gap-6 md:gap-8 items-start mt-5">
                    JustSpeak will equip you with beginner to intermediate level German. Fill<br/> free to visit any section and get started
                </div>
            </div>
        </div>
    );
}

export default GermanHome;
