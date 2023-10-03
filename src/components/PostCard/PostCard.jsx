import { React } from 'react';

import { Link } from 'react-router-dom'

import '../styles/PostCard.css';

export function PostCard({ title, content, date, user, id }) {
  function cleanDate(date) {
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
        <Link to={`/user?id=${id}`} className='user'>
          {user}
        </Link>
      </section>
    </div>
  );
}

