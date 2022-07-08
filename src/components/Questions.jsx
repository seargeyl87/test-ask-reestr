import '../App.css';
import QuestionsItem from './QuestionsItem'
import axios from 'axios';
import {useState, useEffect} from 'react';


function Questions() {

  let [state, setState] = useState([]);

      let  getData = async () => {
        let response = await axios.get('questions.json');
        setState(response.data);
        }
      useEffect(() => {
        getData();
    }, [])  

    return (
        <div className="questions">
             <div className="quest-answer"><h2>Вопрос-ответ</h2></div>
            <div className="answers">
              {state.map((quest, index) => <QuestionsItem quest={quest} key={index}/>)}
                           
             </div>
        </div>
    )

}

export default Questions;