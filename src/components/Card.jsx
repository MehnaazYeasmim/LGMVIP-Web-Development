import React from "react";
import Image from "./Image";


function Card({ userid, fname, lname, email, image }){
    const cssStyle = {
        width:'250px',
        height:'250px'
      }
      
    return(
    <div className='cards'>
        <div className='card'>
            <Image imgsrc={image} style={cssStyle}/>
        <div className='card_info'>
            <span className='card_category'>{fname+" "+lname}</span>
            <h3 className='card_title'>{email}</h3>
            <h6 className='card_id'>{userid}</h6>
        </div>
        </div>
    </div>);
}

export default Card;