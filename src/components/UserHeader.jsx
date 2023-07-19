import React from 'react';

import "./../styles/UserHeader.css";

import {BsArrowLeftShort} from 'react-icons/bs'

export function UserHeader() {
  return (
    <div className='UserHeader'>
      <BsArrowLeftShort className='arrow-back'/>
      <h1 className='username'>Username_123</h1>
    </div>
  );
}

