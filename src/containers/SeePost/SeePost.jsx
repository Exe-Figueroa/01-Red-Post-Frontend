import React, { useContext, useEffect, useState } from 'react';

import { Header } from '../../components/Header/Header';

import { DataContext } from '../../DataContext/DataContextProvider';
import { base_url } from '../../../config/config';

import './SeePost.css';

export function SeePost() {
  const { auth: { user } } = useContext(DataContext);
  const [data, setData] = useState([{}]);

  const id = window.location.hash.split('/')[2];
  console.log('id ', id);
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const res = await fetch(`${base_url}/posts/${id}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    });
    const data = await res.json();
    setData(data);
  }

  function renderParagraphs() {
    return data.content?.split('\n').map((paragraph, index) => {
      return <p key={index}>{paragraph}</p>
    });
  }
  return (
    <>
      <Header />
      <div className='SeePost'>
        <h1 className='SeePost__title'>SeePost</h1>
        <section className='SeePost__content'>
          {renderParagraphs()}
        </section>
      </div>
    </>
  );
}
