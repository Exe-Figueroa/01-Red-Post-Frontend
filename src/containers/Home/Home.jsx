import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../DataContext/DataContextProvider.jsx';

import { io } from 'socket.io-client';
import { Header } from '../../components/Header/Header.jsx';
import { PostCard } from '../../components/PostCard/PostCard.jsx';
import { base_url, socket_url } from '../../../config/config.js';
import './Home.css';



export function Home() {
  const [data, setData] = useState([]);
  const { auth: { user } } = useContext(DataContext);
  
  useEffect(() => {
    fetch(`${base_url}/posts/`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch(e => console.log(e));

      const socket = io(socket_url);
      socket.on('connect', () => {
        console.log('conected');
        socket.on('posts', (postData) => {
          console.log('Received posts:', postData);
          // setData((prevData) => [...prevData, postData]); 
          setData((prevData) => [...prevData, ...(Array.isArray(postData) ? postData : [postData])]);
  
        });
      });
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
