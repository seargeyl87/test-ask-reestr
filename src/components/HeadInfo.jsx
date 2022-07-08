import '../App.css';
import axios from 'axios';
import {useState} from 'react';


function HeadInfo({changeStateSearch}) {
    let [state, setState] = useState('');
    let  getFilterList = async () => {
        let response = await axios.get('listReestrInfoFilter.json');
        if(state) {        
                   changeStateSearch(response.data)
                }
     }

    return (
        <div className="head-info">
        <div className="head-info-txt">
          <h1>РЕЕСТР ПРОГРАММНОГО ОБЕСПЕЧЕНИЯ</h1>
          <p>Единый реестр программ для электронных вычислительных машин и баз данных</p>
          <p>Включено ПО в реестр: 13438</p>
          <p>Правообладателей: 4272</p>
          <div className="head-info-search">
              <i className="head-info-icon-search"></i>
              <input 
                     placeholder="Искать реестр" 
                     value={state}
                     onChange={e => setState(e.target.value)}/>
              <button onClick={getFilterList}>Искать</button>
          </div>
        </div>
        <div className="head-info-img">
        </div>
    </div>
    )

}

export default HeadInfo;