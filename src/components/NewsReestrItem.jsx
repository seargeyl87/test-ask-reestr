import '../App.css';
import React from 'react';



function NewsReestrItem(props) {

    return (
      <div className="list-news-item">
            <div className="img">
             <img src={props.item.urlImg} />
             </div>
             <h4>{props.item.headingNews}</h4>
             <p>{props.item.description}</p> 
      </div>
   
        
    )

}

export default NewsReestrItem;