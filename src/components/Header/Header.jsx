import React from 'react';
import {Link} from 'react-router-dom';

import {BsArrowLeftShort} from 'react-icons/bs';

import './Header.css';

export function Header({title}) {
  console.log(window.location.hash);
  function renderBackButton() {
    if (window.location.hash !== '#/') {
      return (
        <Link to={'/'}>
          <BsArrowLeftShort className='arrow-back'/>
        </Link>
      );
    }
  }
  return (
    <div className='Header'>
      {renderBackButton()}
      <h1>{title || 'Blogpost Cufa'}</h1>
    </div>
  );
}

