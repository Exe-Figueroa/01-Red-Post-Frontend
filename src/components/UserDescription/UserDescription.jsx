import React from 'react';

import './UserDescription.css';


export function UserDescription({name, lastName, username, description}) {
  return (
    <div className='UserDescription'>
      <ul>
        <li>Name:  <span>{name}</span></li>
        <li>Last name:  <span>{lastName}</span></li>
        <li>Username:  <span>{username}</span></li>
        <li>Description:  
          {description?<p>{description}</p>:null}
        </li>
      </ul>
    </div>
  );
}


