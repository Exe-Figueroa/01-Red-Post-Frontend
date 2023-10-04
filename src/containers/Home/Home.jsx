import { useContext, useEffect, useState } from 'react';
// import { io } from 'socket.io-client';
import { Header } from '../../components/Header/Header.jsx';
import { PostCard } from '../../components/PostCard/PostCard.jsx';
import './Home.css';
import { base_url } from '../../../config/config.js';
import { DataContext } from '../../DataContext/DataContextProvider.jsx';
// const socket = io('http://localhost:3000');


export function Home() {
  const [data, setData] = useState([]);
  const { user } = useContext(DataContext);
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
