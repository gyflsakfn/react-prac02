import React from 'react';

const BusniessItem = ({item}) => {
  const { imgurl, title, titleEng, des} = item
  return (
    <li>
        <a href="#">
            <div><img src={imgurl} alt={title} /></div>
            <h3>
                {title}
               <span> {titleEng} </span></h3>
            <p>{des}</p>
        </a>
     </li>
  );
};

export default BusniessItem;