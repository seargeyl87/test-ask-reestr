import '../App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';
import ListsDocumItem from './ListsDocumItem';


function ListsDocum() {

    let [state, setState] = useState([]);
    let  getData = async () => {
        let response = await axios.get('doc.json');
        setState(response.data);
    
             }

         useEffect(() => {
         getData()
     }, [])   

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
            {state.map((itemDoc, index) => <ListsDocumItem itemDoc={itemDoc} key={index}/>)}
        
        </table>
      </div>
    )

}

export default ListsDocum;