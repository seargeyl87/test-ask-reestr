import '../App.css';
import axios from 'axios';
import NewsReestrItem from './NewsReestrItem';
import {useState, useEffect} from 'react';
import React from 'react';


function NewsReestr() {

   let [state, setState] = useState({ body: [
      {"urlImg": "https://motor.ru/imgs/2022/03/03/10/5274800/79931cca9770ca2bee4d28cccfc066a60e2af017.jpg", "headingNews": "Технические работы 30.05.2022", "description": "в связи с проведением технических работ 30.05.2022 с 15:00 могут наблюдаться перерывы"},
      {"urlImg": "http://cdn.motorpage.ru/Photos/800/119DF.jpg", "headingNews": "Изменение справочника", "description": "в связи с проведением технических работ 30.05.2022 с 15:00 могут наблюдаться перерывы"},
      {"urlImg": "https://motor.ru/imgs/2022/03/03/10/5274800/79931cca9770ca2bee4d28cccfc066a60e2af017.jpg", "headingNews": "Технические работы 26.05.2022", "description": "в связи с проведением технических работ 30.05.2022 с 15:00 могут наблюдаться перерывы"},
      {"urlImg": "https://motor.ru/imgs/2022/03/03/10/5274800/79931cca9770ca2bee4d28cccfc066a60e2af017.jpg", "headingNews": "Лицензирование в Беларуси", "description": "в связи с проведением технических работ 30.05.2022 с 15:00 могут наблюдаться перерывы"},
      {"urlImg": "http://cdn.motorpage.ru/Photos/800/115C8.jpg", "headingNews": "Тестирование системы новостей Ед", "description": "в связи с проведением технических работ 30.05.2022 с 15:00 могут наблюдаться перерывы"},
      {"urlImg": "https://motor.ru/imgs/2022/03/03/10/5274800/79931cca9770ca2bee4d28cccfc066a60e2af017.jpg", "headingNews": "Обновление версии реестра ПО", "description": "в связи с проведением технических работ 30.05.2022 с 15:00 могут наблюдаться перерывы"}
    ]});
//    let  getNews = async () => {
//       let response = await axios.get('listNews.json');
//       setState(response.data);

//    }

//    useEffect(() => {
//       getNews()
//   }, [])   

    return (
   
      
        <div className="news-reestr">
           <div className="news"><h2>Новости реестра</h2></div>
            <div className="list-news">
          {
         state.body.map((item) => <NewsReestrItem item={item}/>
         )} 
           </div>
           <button>Показать еще</button>
        </div>
    )

}

export default NewsReestr;