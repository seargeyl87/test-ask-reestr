import '../App.css';


function Footer() {
    return (
        <footer>
        <div className="develop">
            <i className="img"></i>
            <div className="reestr-po"><i>Открытое акционерное общество  «Реестр ПО» начало практическую деятельность с 1 марта 2014 г</i></div>
            <p>Разработчик</p>
            <i className="agency">ОАО «Агентство сервисизации и реинжиниринга»</i>
            <i className="adress">Минск, улица Клары Цеткин, 24</i>
        </div>
        <div className="info">
          <h3>Информация</h3>
              <ul>
                 <li>Реестры</li>
                 <li>Новости</li>
                 <li>Документы</li>
                 <li>Вопросы</li>

              </ul>
        </div>
        <div className="support">
              <h3>Техническая поддержка</h3>
              <p>Ежедневно с 8.00 до 19.00, за исключением выходных (суббота, воскресенье) и праздничных дней.</p>
              <i>+375 25 111 22 33 </i>
              <i>+375 29 222 44 55 </i><br></br>
              <i>ReestrPOsupport@mail.ru</i>
        </div>
        <div className="contact">
             <h3>Контакты</h3>
             <i>+375 33 112 22 45</i>
             <i>+375 29 222 44 88</i>
             <i>ReesrtPO@mail.ru</i>
             <i>220004 г. Минск, ул. Карла Маркса, 38</i>

        </div>

    </footer>
    )

}

export default Footer;