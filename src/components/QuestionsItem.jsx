import '../App.css';
import {useState} from 'react';




function QuestionsItem({quest}) {

    let [isActive, setIsActive] = useState(false);
    let handleClick = event => {
    setIsActive(isActive => !isActive);
  };
    return (
        
                            <div className="question-item">
                            <button className={!isActive ? 'accordion' : 'accordion active'} onClick={handleClick}>{quest.question}</button>
                                    <div className={!isActive ? 'panel' : 'panel active'} onClick={handleClick}  >
                                        <ul>
                                            <li>{quest.answer1}</li>
                                            <li>{quest.answer2}</li>
                                            <li>{quest.answer3}</li>
                                            <li>{quest.answer4}</li>
                                        </ul>
                                    </div>
                            </div>
            
    )

}

export default QuestionsItem;