import React from 'react';

//child component
const AvatarList = (props) => {
   return(
        <div className="my_avatar ma4 dib pa4 tc grow">
            <img src={`https://joeschmoe.io/api/v1/female/${props.name}`} alt="thegirl" />
            <h1>{props.name}</h1>
            <p>{props.work}</p>
            <p>{props.city}</p>
    </div>
   )
}

export default AvatarList;