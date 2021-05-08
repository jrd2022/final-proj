import axios from 'axios';
import {useState, useEffect} from 'react';
import EndGame from './components/EndGame';
import Header from './components/Header';
import Question from './components/Question';


//import trivia from `./components/trivia`

const API_URL = `https://opentdb.com/api.php?amount=10&type=multiple`;


const App = () =>  {

  const [questions, setQuestions] = useState([]);
  const[currentIndex, setCurrentIndex] = useState(0);
  const[score, setScore] = useState(0); 
  const[gameOver, setGameOver] = useState(false);
  const[showAnswers, setShowAnswers] = useState(false); 
  const[joke, setJoke] = useState(undefined);




  useEffect(() => {

    const fetchData = async () => { 
      const questionaire = await axios('https://opentdb.com/api.php?amount=10&category=11&difficulty=easy'); 
      const joke = await axios(`https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart`);
      console.log(joke); 

      const questions = questionaire.data.results.map((question) => ({
        ...question, answers: [ 
          question.correct_answer, 
          ...question.incorrect_answers].sort(() => Math.random()-0.5)
      }));
      setQuestions(questions);
      setJoke(joke.data); 
    }
    fetchData();
    

  }, []);

  const handleAnswer = (answer) => { 
    
    if(!showAnswers){ 
      if(answer === questions[currentIndex].correct_answer){ 
        setScore(score + 1); 
      }
    }
    
    setShowAnswers(true);

    if(currentIndex >= questions.length -1 ) { 
      setGameOver(true); 
    }
  };  


  const handleNextQuestion = () => { 
    
    setShowAnswers(false); 

    setCurrentIndex(currentIndex + 1);

  };

  const refreshPage = () => { 
    window.location.reload(); 
  }
    
  
  return  questions.length > 0 ? (
    <div className="container absolute">
      {gameOver ? (
        <EndGame score={score} joke={joke} refreshPage={refreshPage}/>
      ):(
        <div>
          <Header score={score} question={currentIndex}/>
          <Question result={questions[currentIndex]} handleNextQuestion={handleNextQuestion} showAnswers={showAnswers} handleAnswer={handleAnswer}/> 
        </div>
        
      )}   
    </div>
    ) : (
      <h1 className="font-bold text-white justify-center"> Hold up wait a minute, ya'll thougt I was finished...</h1>
    );
}


export default App;
