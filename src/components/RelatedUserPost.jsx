import React from 'react';

import '../styles/RelatedUserPost.css';


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


[
  {
    title: 'tituloasdabsdlalsd1',
    description: 'jadbsljbdalsjdbajlsdbajlsbdlajsndoasbdolasodilasodi1',
    year: 2002
  },
  {
    title: 'tituloasdabsdlalsd2',
    description: 'jadbsljbdalsjdbajlsdbajlsbdlajsndoasbdolasodilasodi2',
    year: 2005
  },
  {
    title: 'title 3 lalala',
    description: 'description asmdklasdka',
    year: 2006
  },
  {
    title: 'tituloasdabsdlalsd1',
    description: 'jadbsljbdalsjdbajlsdbajlsbdlajsndoasbdolasodilasodi1',
    year: 2023
  },
]