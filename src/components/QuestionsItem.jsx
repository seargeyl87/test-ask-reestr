import '../App.css';
import {useState} from 'react';




function QuestionsItem() {

    let [isActive, setIsActive] = useState(false);
    let handleClick = event => {
    setIsActive(isActive => !isActive);
  };

    return (
        
                            <div className="question-item">
                            <button className={!isActive ? 'accordion' : 'accordion active'} onClick={handleClick}>Для подачи заявления необходимо подготовить</button>
                                    <div className={!isActive ? 'panel' : 'panel active'} onClick={handleClick}  >
                                        <ul>
                                            <li>Данные для авторизации в личном кабинете</li>
                                            <li>Квалифицированный сертификат ключа проверки электронной подписи.</li>
                                            <li>Сведения, документы и материалы в соответствии с Методическими рекомендациями.</li>
                                            <li>Установить специализированное ПО для подписания документов электронной подписью. Подписание производится с использованием усиленной квалифицированной (отсоединяемой) электронной подписи.</li>
                                        </ul>
                                    </div>
                            </div>
            
    )

}

export default QuestionsItem;