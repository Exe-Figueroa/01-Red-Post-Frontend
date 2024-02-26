import React from 'react';

import { Link } from 'react-router-dom'

import './PostCard.css';

export function PostCard({ title, content, date, user, userId, id }) {
  function cleanDate(date) {
    const [a, b] = date.split('T')
    return a;
  }

  return (
    <Link to={`/post/${id}`} className='PostCard'>
      <article className='contentCard'>
        <h3>{title}</h3>
        <p>{content}</p>
      </article>
      <section >
        <span className='date'>
          {cleanDate(date)}
        </span>
        <Link to={`/user?id=${userId}`} className='user'>
          {user}
        </Link>
      </section>
    </Link>
  );
}

