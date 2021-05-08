import React from 'react'

const Header = ({score, question}) => {
    return (
        <div>
            <p className=" text-5xl text-center font-bold">Computer Science Trivia GAME!</p>
            <div className="grid grid-cols-2 p-4 mt-10 gap-10">
                <div className="ring-4 bg-white rounded-lg shadow">
                    <div>
                        <p className="font-semibold text-center underline text-lg p-3"> Instructions: Score at least a 6 out of 10 in order to pass and recieve a joke! </p>
                    </div>
                </div>
                <div className="text-center text-lg ring-4 bg-white rounded-lg shadow font-bold">
                    <div>
                    <h2 className=""> Your current score is: {score}</h2>
                    </div>
                    <div>
                       <p className=""> Question: {question + 1} / 10 </p> 
                    </div>
                </div> 
            </div>
        </div>
    )
}
export default Header
