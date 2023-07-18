import {useEffect, useState, React} from 'react';

import {Header} from '../components/Header.jsx';
import {PostCard} from '../components/PostCard';

import '../styles/Home.css'
export function Home() {
  const [data, setData] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:3000/api/v1/posts/')
        .then((response)=> response.json())
        .then((data)=>{
          setData(data);
        });
  }, []);
  return (
    <div className='Home'>
      <Header/>
      <main >
        {
          data.map((item)=>(
            <PostCard key={item.id} title={item.title} content={item.content} date={item.createdAt} user={item.user.username} />
          ))
        }
      </main>
    </div>
  );
}

