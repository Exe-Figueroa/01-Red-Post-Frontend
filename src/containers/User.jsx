import {React, useState, useEffect} from 'react';
import '../styles/User.css'

import { UserHeader } from '../components/UserHeader.jsx';
import { UserDescription } from '../components/UserDescription';
import { RelatedUserPost } from '../components/RelatedUserPost';
import { base_url } from '../../config/config';

export function User() {
  const [userId, setUserId] = useState('');
  const [data, setData] = useState([]);
  
  useEffect(()=>{
    const [_, id] = window.location.href.split('=');
    fetch(`${base_url}/users/${id}`)
      .then((res)=>res.json())
      .then((dataApi)=>{
        setData(dataApi);
      })
    }, []);
  return (
    <div className='User'>
      <UserHeader username={data.username} />
      <UserDescription 
      name={data.name} 
      lastName={data.lastName} 
      username={data.username} 
      description={data.description}/>
      <h2 className='related-post-title'>Related Posts:</h2>
      {data.posts && data.posts.map((item)=>(
        <RelatedUserPost key={item.id} data={item}/>
      ))} 
    </div>
  );
}

