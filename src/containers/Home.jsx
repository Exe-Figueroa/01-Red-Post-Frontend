import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { Header } from '../components/Header.jsx';
import { PostCard } from '../components/PostCard';
import '../styles/Home.css';
import { base_url } from '../../config/config.js';
// const socket = io('http://localhost:3000');


export function Home() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch(`${base_url}/posts/`)
    .then((response) => response.json())
    .then((data) => {
      setData(data);
    })
    .catch(e=>console.log(e));
    // socket.on('connect', () => {
    //   console.log('conected');
    //   socket.on('posts', (postData) => {
    //     console.log('Received posts:', postData);
    //     setData((prevData) => [...prevData, postData]); 
    //   });
    // });
  }, []);
  
  
  return (
    <div className='Home'>
      <Header />
      <main>
        {data.map((item) => (
          <PostCard
            key={item.id}
            id={item.user.id}
            title={item.title}
            content={item.content}
            date={item.createdAt}
            user={item.user.username}
          />
        ))}
      </main>
    </div>
  );
}
