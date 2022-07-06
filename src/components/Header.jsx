import '../App.css';


function Header() {
    return (
    <header className="App-header">
    <div className="reestr-search">
       <i className="img"></i>
       <div className="search">
           <input placeholder="Поиск"/>
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