import {useState, useEffect} from 'react';


const Question = ({handleAnswer, handleNextQuestion, showAnswers, result:{question, correct_answer, answers}}) => { 

    return (
    <div className="font-bold mt-10 "> 
      <div className="underline bg-white text-black-500 text-center p-10 rounded-lg shadow-lg ring-4">
        <h2 className="text-2xl" dangerouslySetInnerHTML={{__html: question}}></h2>
      </div>
      <div className="grid grid-cols-1 gap-4 mt-4">
          {answers.map((answer) => {
              const bgColor = showAnswers ? answer === correct_answer ? `bg-green-300`:`bg-red-300`: `bg-white hover:bg-gray-200`;  
              const textColor = showAnswers ? answer === correct_answer ? 'text-white': `text-white`: `text-blue-500 text-xl`;
            return (
              <button className={`${bgColor} ring-4 p-4 ${textColor} font-bold rounded shadow`}
              onClick={() => handleAnswer(answer)} dangerouslySetInnerHTML={{__html: answer}}></button>
            )
          })}
      </div>
        {showAnswers && (
          <button onClick={handleNextQuestion} className="bg-blue-600 font-bold text-bold p-4 mt-6 rounded shadow ">
            Next Question
          </button>
        )}
        
    </div>
  );
}



export default Question;
