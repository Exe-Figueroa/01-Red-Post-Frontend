import React from 'react';

import { IoIosArrowUp } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';
import { PiNotePencilThin } from 'react-icons/pi';
import { CiHome } from 'react-icons/ci';
import { VscGithub } from 'react-icons/vsc';


import '../styles/FooterMenu.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function FooterMenu() {
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
        <div className="icon-container">
          <PiNotePencilThin className='icon'/>
          Posts
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
