import React from 'react'

const EndGame = ({score, joke, refreshPage}) => {
    return (
        <div>
            <div className="text-black-800 text-center p-10 font-bold">
                <h1 className="text-8xl"> Game Over! </h1>
                    <div className="underline mt-10 text-6xl">
                        Your score was {score}! 
                    </div>  
            </div>
            {score >= 0 ? (
            <div className="text-3xl">
                <h2 className="text-black-800 font-bold text-center">Congrulations! You passed! You get a joke! </h2>
                <div className="bg-white text-center p-10 rounded-lg shadow-lg ring-4 mt-10 ">                           
                    <p className="text-blue-500">{joke.setup} {joke.delivery}</p>
                </div>
            </div>
            ): (
            <div className="bg-white text-center p-10 rounded-lg shadow-lg ring-4 mt-6 text-3xl width: fit-content">
                <h2> You didn't pass! No joke for you! LOL</h2>
            </div>
            )}
            <div className="flex justify-center items-center">
                <button onClick={refreshPage} className="bg-blue-500 text-white font-bold text-center p-10 rounded-lg shadow-lg ring-4 mt-10 text-2xl ">
                    Start New Game! 
                </button>
            </div>
            
        </div>
    )
}

export default EndGame
