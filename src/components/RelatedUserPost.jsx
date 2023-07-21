import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import '../styles/RelatedUserPost.css'
export function RelatedUserPost({data}) {
  const [title, setTitle] = useState(data.title);

  useEffect(()=>{
    if (title.length >=45) {
      const titleShort = title.slice(0,44) + '...'
      setTitle(titleShort);
    }
  });

  function cleanDate (date) {
    const [a, b] = date.split('T')
    return a;
  }
  return (
    <div className='RelatedUserPost'>
      <h2>{title} </h2>
      <span>{cleanDate(data.createdAt)}</span>
    </div>
  );
}
