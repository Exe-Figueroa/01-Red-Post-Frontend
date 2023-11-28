import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../../DataContext/DataContextProvider';

import { IoIosArrowDown } from 'react-icons/io';
import { CiHome } from 'react-icons/ci';
import { VscGithub } from 'react-icons/vsc';
import { IoAddCircleOutline } from 'react-icons/io5';

import './FooterMenu.css';

export function FooterMenu({ toggleSendPost }) {
  const { auth: {user} } = useContext(DataContext)
  
  const [verify, setVerify] = useState(false);
  function handleFooter() {
    setVerify(!verify)
  }
  if (!user.username && !user.password && !user.token) {
    return (
      <></>
    )
  }
  return (<>
    <div className={verify ? 'FooterMenu up' : 'FooterMenu down'}>
      <div className="FooterMenu__circle" onClick={handleFooter}>
        {verify ? <IoIosArrowDown className='arrowUp' /> : <IoIosArrowDown className='arrowDown' />}
      </div>
      <nav className='FooterMenu-icons-container'>
        <div
          onClick={() =>{handleFooter(); toggleSendPost(true)}}
          className="icon-container">
          <IoAddCircleOutline className='icon' />
          Post
        </div>
        <Link to={'/'} onClick={handleFooter} className="icon-container home">
          <CiHome className='icon' />
          Home
        </Link>
        <Link to={'https://github.com/Exe-Figueroa'} onClick={handleFooter} className="icon-container">
          <VscGithub className='icon' />
          GitHub
        </Link>
      </nav>
    </div>
  </>
  );
}
