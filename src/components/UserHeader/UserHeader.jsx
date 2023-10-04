import React from 'react';

import {Link} from 'react-router-dom';

import "./UserHeader.css";

import {BsArrowLeftShort} from 'react-icons/bs'

export function UserHeader({username}) {
  return (
    <div className='UserHeader'>
      <Link to={'/'}>
        <BsArrowLeftShort className='arrow-back'/>
      </Link>
      <h1 className='username'>{username}</h1>
    </div>
  );
}

