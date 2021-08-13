import React from 'react';

const Image=(props)=>{
return <img style={props.style} src={props.imgsrc} alt='myPic' className='card_img' />
};

export default Image;