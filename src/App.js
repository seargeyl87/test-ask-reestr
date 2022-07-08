import './App.css';
import Header from './components/Header';
import HeadInfo from './components/HeadInfo';
import ListReestr from './components/ListReestr';
import NewsReestr from './components/NewsReestr';
import ListsDocum from './components/ListsDocum';
import Questions from './components/Questions';
import Footer from './components/Footer';
import {useState} from 'react';
import Context from './components/Context';


function App() {

  let [searchQuery, setSearchQuery] = useState('');
  
  let [stateSearch, setStateSearch] = useState('');

  let changeStateSearch = (filterInfo) => {
    setStateSearch(filterInfo)
  }

  return (
    <div className="App">
      <Context.Provider value={{searchQuery, setSearchQuery}}>
          <Header/>
          <HeadInfo changeStateSearch={changeStateSearch}/>
          <ListReestr stateSearch={stateSearch}/> 
          <NewsReestr/>
          <ListsDocum/>
          <Questions/>
          <Footer/>
      </Context.Provider>


       
    </div>
  );
}

export default App;
