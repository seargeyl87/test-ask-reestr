import './App.css';
import Header from './components/Header';
import HeadInfo from './components/HeadInfo';
import ListReestr from './components/ListReestr';
import NewsReestr from './components/NewsReestr';
import ListsDocum from './components/ListsDocum';
import Questions from './components/Questions';
import Footer from './components/Footer';


function App() {

  return (
    <div className="App">
     <Header/>
     <HeadInfo/>
     <ListReestr/> 
     <NewsReestr/>
     <ListsDocum/>
     <Questions/>
     <Footer/>

       
    </div>
  );
}

export default App;
