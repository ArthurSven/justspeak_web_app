import React, {useEffect, useState} from 'react';
import alphabet from './../../assets/GermanContent/germanalphabet.json'

function GermanAlphabet() {
    const [activeLetter, setActiveLetter] = useState(null);
    const [alphabetData, setAlphabetData] = useState([]);
    const [chunkedAlphabet, setChunkedAlphabet] = useState([]);


    useEffect(() => {
        setAlphabetData(alphabet);
        // Split into chunks of 7
        const chunkSize = 7;
        const chunks = [];
        for (let i = 0; i < alphabet.length; i += chunkSize) {
            chunks.push(alphabet.slice(i, i + chunkSize));
        }
        setChunkedAlphabet(chunks);
    }, []);

    const speakText = (text, lang = 'de-DE') => {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel(); // Stop any ongoing speech

            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = lang;
            utterance.rate = 0.8; // Slightly slower for language learning

            utterance.onstart = () => setActiveLetter(text);
            utterance.onend = () => setActiveLetter(null);

            window.speechSynthesis.speak(utterance);
        } else {
            alert("Sorry, your browser doesn't support text to speech!");
        }
    };
    return (
        <div className="h-full pt-1 pl-4 pr-4">
            <div className="bg-white shadow-2xl rounded-lg p-6 w-full">

                {/* Heading sits above the grid */}
                <h2 className="text-2xl font-semibold text-black mb-6">
                    Alphabet - Das Alphabet
                </h2>
                <p className="text-gray-700 leading-relaxed mt-4">
                    This section takes you through the German alphabet. You will find letters and sounds to practice
                    with
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {chunkedAlphabet.map((chunk, chunkIndex) => (
                        <div key={chunkIndex} className="bg-white rounded-xl shadow-lg overflow-hidden">
                            <table className="w-full">
                                <thead>
                                <tr className="bg-gradient-to-r from-gray-800 to-black text-white">
                                    <th className="py-3 px-4 text-left">Letter</th>
                                    <th className="py-3 px-4 text-left">Sound</th>
                                    <th className="py-3 px-4 text-left">Example</th>
                                    <th className="py-3 px-4 text-center w-24">Play</th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                {chunk.map((item, index) => (
                                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                                        <td className="py-2 px-4 font-bold text-lg">{item.letter}</td>
                                        <td className="py-2 px-4">{item.pronunciation}</td>
                                        <td className="py-2 px-4 text-sm">{item.example}</td>
                                        <td className="py-2 px-4 text-center">
                                            <button
                                                className={`rounded-full p-2 ${activeLetter === item.letter ? 'bg-blue-600' : 'bg-blue-500 hover:bg-blue-600'} text-white transition-all`}
                                                onClick={() => speakText(item.letter)}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4"
                                                     viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd"
                                                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                                          clipRule="evenodd"/>
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    ))}
                </div>
                {/*my code*/}
            </div>
        </div>
    );
}

export default GermanAlphabet;