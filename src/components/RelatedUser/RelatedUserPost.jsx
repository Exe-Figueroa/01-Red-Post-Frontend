import React from 'react';

import './RelatedUserPost.css';


export function RelatedUserPost({data}) {

  function cleanDate (date) {
    const [a, b] = date.split('T')
    return a;
  }
  return (
    <div className='RelatedUserPost'>
      <h2>{data.title} </h2>
      <span>{cleanDate(data.createdAt)}</span>
    </div>
  );
}

