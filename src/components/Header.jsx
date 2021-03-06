import '../App.css';
import { useContext} from 'react';
import Context from './Context';



function Header() {

    let {searchQuery, setSearchQuery} =  useContext(Context);

    return (
    <header className="App-header">
    <div className="reestr-search">
       <i className="img"></i>
       <div className="search">
           <input 
                   value={searchQuery}
                   onChange={e => setSearchQuery(e.target.value)}
                   placeholder="Поиск"/>
           <i className="icon-search"></i>
       </div>
   </div>

   <div className="cal-not-log">
       <i className="img-cal"></i>
       <i className="not"></i>
       <i className="log-user"></i>
       <p className="name-user">Захар Палазник</p>
       <i className="arr"></i>
   </div>
 </header>
    )

}

export default Header;