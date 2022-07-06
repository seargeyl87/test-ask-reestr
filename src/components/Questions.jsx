import '../App.css';
import {useState} from 'react';
import QuestionsItem from './QuestionsItem'



function Questions() {

    let [isActive, setIsActive] = useState(false);
    let handleClick = () => {
    setIsActive(isActive => !isActive);
  };

    return (
        <div className="questions">
             <div className="quest-answer"><h2>Вопрос-ответ</h2></div>
            <div className="answers">
                           <QuestionsItem/>
                           <QuestionsItem/>
                           <QuestionsItem/>
                           <QuestionsItem/>
                           <QuestionsItem/>
                           <QuestionsItem/>
                           <QuestionsItem/>
             </div>
        </div>
    )

}

export default Questions;