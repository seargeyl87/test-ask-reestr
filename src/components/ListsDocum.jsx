import '../App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';


function ListsDocum() {

    let [state, setState] = useState([]);

    let  getData = async () => {
        let response = await axios.get('docHeading.json');
        setState(response.data);
        console.log(response.data)
             }

         useEffect(() => {
           
         getData()
       
     }, []) 
     //console.log(state[0].fieldName)

    return (
        <div className="lists-docum">
        <h2>Документы</h2>
        <div className="all-doc">
        <p>всего документов:</p>
        <b>5</b>
        </div>
        
        <table cellpadding="10" align="center" width="90%" cellpadding="7">
            <tr>
                <th>Категория</th> 
                <th width="30%">Наименование</th>
                <th>Дата</th>
                <th>Номер</th>
                <th>Содержение</th>
            </tr>
            <tr><td>Общие документы</td><td>Постановление Правительства Российской федерации от 20.07.2021 "О внесении изменений в постановление Правительства Российской Федерации от 16 ноября 2015 г. №1236</td><td>20.07.2021</td><td>1226</td><td>Скачать</td></tr>
            <tr><td>Общие документы</td><td>Постановление Правительства Российской федерации от 20.07.2021 "О внесении изменений в постановление Правительства Российской Федерации от 16 ноября 2015 г. №1236</td><td>20.07.2021</td><td>1226</td><td>Скачать</td></tr>
            <tr><td>Общие документы</td><td>Постановление Правительства Российской федерации от 20.07.2021 "О внесении изменений в постановление Правительства Российской Федерации от 16 ноября 2015 г. №1236</td><td>20.07.2021</td><td>1226</td><td>Скачать</td></tr>

        </table>
      </div>
    )

}

export default ListsDocum;