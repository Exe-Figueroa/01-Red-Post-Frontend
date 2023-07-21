import React from 'react';

import "./../styles/UserHeader.css";

import {BsArrowLeftShort} from 'react-icons/bs'

export function UserHeader({username}) {
  return (
    <div className='UserHeader'>
      <BsArrowLeftShort className='arrow-back'/>
      <h1 className='username'>{username}</h1>
    </div>
  );
}

