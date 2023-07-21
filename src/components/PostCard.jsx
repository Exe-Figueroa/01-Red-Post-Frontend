import {React, useEffect, useState} from 'react';

import {Link} from 'react-router-dom'

import '../styles/PostCard.css';

export function PostCard( {title, content, date, user, id}) {
  const [titleShort, setTitleShort] = useState(title);
  const [contentShort, setContentShort] = useState(content);

  function cleanDate (date) {
    const [a, b] = date.split('T')
    return a;
  }
  useEffect(()=>{
    if (titleShort.length >= 36) {
      setTitleShort(titleShort.slice(0, 35) + '...')
    }
    if (contentShort.length >= 199) {
      setContentShort(contentShort.slice(0, 200) + '...')
    }
  }, [])

  return (
    <div className='PostCard'>
      <article className='contentCard'>
        <h3>{titleShort}</h3>
        <p>{contentShort}</p>
      </article>
      <section >
        <span className='date'>
          {cleanDate(date)}
        </span>
        <Link to={`/user?id=${id}`} className='user'>
          {user}
        </Link>
      </section>
    </div>
  );
}

