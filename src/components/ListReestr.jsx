import '../App.css';
import {useState, useEffect} from 'react';
import EditableTable from "./Pagination/EditableTable/EditableTable";
import axios from 'axios';





function ListReestr() {
    let [list, setList] = useState([])
    let [listInfo, setListInfo] = useState([])


    let  getData = async () => {
        let response = await axios.get('listReestrHeading.json');
        setList(response.data);
        setListInfo(  [ ...listInfo, 
          
          {"id": 1, "name": "Система управления базами данных Рел База Данных", "code": "02.09", "class": "Системы управления базами данных", "Date": "2016-06-21", "adds": "ссылка", "url": "https://ru.wikipedia.org/wiki/СУБД_Ред_База_Данных"},
          {"id": 2, "name": "1С:Школа. Информатика,11 класс", "code": "04.11", "class": "Системы управления процессами организации", "Date": "2016-06-21", "adds": "ссылка", "url": "https://ru.wikipedia.org/wiki/СУБД_Ред_База_Данных"},
          {"id": 3, "name": "1С:Школа. Русский язык, 5–6 класс. Лексикология", "code": "04.11", "class": "Информационные системы для решения специфических отраслевых задач", "Date": "2016-06-21", "adds": "ссылка", "url": "https://ru.wikipedia.org/wiki/СУБД_Ред_База_Данных"},
          {"id": 4, "name": "1С:Комплексная автоматизация 8", "code": "04.11", "class": "Системы управления процессами организации", "Date": "2016-02-20", "adds": "ссылка", "url": "https://ru.wikipedia.org/wiki/СУБД_Ред_База_Данных"},
          {"id": 5, "name": "Электронный периодический справочник 'Система ГАРАНТ'", "code": "04.15", "class": "Прикладное программное обеспечение общего назначения", "Date": "2016-02-20", "adds": "ссылка", "url": "https://ru.wikipedia.org/wiki/СУБД_Ред_База_Данных"},
          {"id": 6, "name": "Система электронного документооборота и автоматизации бизнес-процессов 'Е1 Евфрат'", "code": "04.13", "class": "Прикладное программное обеспечение общего назначения", "Date": "2016-02-20", "adds": "ссылка", "url": "https://ru.wikipedia.org/wiki/СУБД_Ред_База_Данных"},
          {"id": 7, "name": "ABBYY Lingvo", "code": "04.07", "class": "Лингвистическое программное обеспечение", "Date": "2016-03-11", "adds": "ссылка", "url": "https://ru.wikipedia.org/wiki/СУБД_Ред_База_Данных"},
          {"id": 8, "name": "1С-Битрикс24 (Компания)", "code": "04.03", "class": "Офисные приложения", "Date": "2016-03-14", "adds": "ссылка", "url": "https://ru.wikipedia.org/wiki/СУБД_Ред_База_Данных"},
          {"id": 9, "name": "1С-Битрикс24 (Проект+)", "code": "04.03", "class": "Системы управления проектами, исследованиями, разработкой, проектированием  и внедрением", "Date": "2016-03-14", "adds": "ссылка", "url": "https://ru.wikipedia.org/wiki/СУБД_Ред_База_Данных"},
          {"id": 10, "name": "1С-Битрикс24 (Команда)", "code": "04.03", "class": "Системы сбора, хранения, обработки, анализа, моделирования и визуализации массивов данных", "Date": "2016-03-14", "adds": "ссылка", "url": "https://ru.wikipedia.org/wiki/СУБД_Ред_База_Данных"}
          ]);
             }

         useEffect(() => {
           getData();
         
     }, [])  
      
     console.log(listInfo);

           

           
    return (
        <div className="lists-reestr">
        <h2>Реестры</h2>
        
        <EditableTable columns={list} rows={listInfo}/>
      </div>
    )

}

export default ListReestr;