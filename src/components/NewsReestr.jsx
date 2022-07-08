import '../App.css';
import axios from 'axios';
import NewsReestrItem from './NewsReestrItem';
import {useState, useEffect} from 'react';
import React from 'react';


function NewsReestr() {


   let [state, setState] = useState( []);
   let [className, setClassName] = useState("show-all");
   let  getNews = async () => {
      let response = await axios.get('listNews.json');
      setState(response.data);

   }

   useEffect(() => {
      getNews()
  }, [])   

   let showAll = async () => {
    let response = await axios.get('listNewsShowAll.json');
    setState(response.data);
    setClassName('hide')

 }

    return (
   
      
        <div className="news-reestr">
           <div className="news"><h2>Новости реестра</h2></div>
            <div className="list-news">
          {
         state.map((item, index) => <NewsReestrItem item={item} key={index}/>
         )} 
           </div>
           <div className={className}>
           <button onClick={showAll}>Показать все</button>
           </div>
          
        </div>
    )

}

export default NewsReestr;