import {React, useState} from 'react';
import '../styles/PostCard.css';

export function PostCard( {title, content, date, user}) {
  const [dateClean, setDateClean] = useState('');
  function cleanDate (date) {
    const [a, b] = date.split('T')
    return a;
  }

  return (
    <div className='PostCard'>
      <article className='contentCard'>
        <h3>{title}</h3>
        <p>{content}</p>
      </article>
      <section >
        <span className='date'>
          {cleanDate(date)}
        </span>
        <span className='user'>
          {user}
        </span>
      </section>
    </div>
  );
}

