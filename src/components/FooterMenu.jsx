import React from 'react';

import { IoIosArrowDown } from 'react-icons/io';
import { PiNotePencilThin } from 'react-icons/pi';
import { CiHome } from 'react-icons/ci';
import { VscGithub } from 'react-icons/vsc';
import { IoAddCircleOutline } from 'react-icons/io5';

import '../styles/FooterMenu.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function FooterMenu({toggleSendPost}) {
  const [verify, setVerify] = useState(false);
  function handleFooter(){
    setVerify(!verify)
  }
  return (<>
    <div className={verify ? 'FooterMenu up': 'FooterMenu down' }>
      <div className="FooterMenu__circle" onClick={handleFooter}>
        {verify? <IoIosArrowDown className='arrowUp'/> : <IoIosArrowDown className='arrowDown'/> }
      </div>
      <nav  className='FooterMenu-icons-container'>
        <div
          onClick={()=>toggleSendPost(true)}
        className="icon-container">
          <IoAddCircleOutline className='icon'/>
          Post
        </div>
        <Link to={'/'} className="icon-container home">
          <CiHome className='icon'/>
          Home
        </Link>
        <Link to={'https://github.com/Exe-Figueroa'} className="icon-container">
          <VscGithub className='icon'/>
          GitHub
        </Link>
      </nav>
    </div>
  </>
  );
}
