import { React, useState, useEffect, useContext } from 'react';
import './User.css'
import { base_url } from '../../../config/config.js';

import { Header } from '../../components/Header/Header.jsx';
import { UserDescription } from '../../components/UserDescription/UserDescription.jsx';
import { RelatedUserPost } from '../../components/RelatedUser/RelatedUserPost.jsx';
import { Loader } from '../../components/Loader/Loader.jsx';
import { UpdatePost } from '../../components/UpdatePost/UpdatePost.jsx';

import { DataContext } from '../../DataContext/DataContextProvider.jsx';

export function User() {
  const { auth: { user }, successRequest, failureRequest } = useContext(DataContext);

  const [data, setData] = useState([]);
  const [updateData, setUpdateData] = useState({
    id: '',
    title: '',
    content: '',
    user: user,
  });

  const [isLoading, setIsLoading] = useState(false);

  const [seeUpdatePost, setSeeUpdatePost] = useState(false);
  function toggleUpdatePost(isActive) {
    setSeeUpdatePost(isActive);
  };


  useEffect(() => {
    const [_, id] = window.location.href.split('=');
    fetch(`${base_url}/users/${id}`)
      .then((res) => res.json())
      .then((dataApi) => {
        setData(dataApi);
      })
  }, []);

  async function deletePost(id) {
    setIsLoading(true);
    const res = await fetch(`${base_url}/posts/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
    console.log(res);
    if (res.ok) {
      setIsLoading(false);
      successRequest('Post deleted correctly.')
      console.log('deleted')
    } else {
      failureRequest('Error deleting the post.')
      setIsLoading(false);
      console.log('error')
    }

  }
  function editPost(data) {
    setUpdateData({
      id: data.id,
      title: data.title,
      content: data.content,
      user: user
    });
    setSeeUpdatePost(true);
  }

  return (
    <>
      {
        isLoading &&
        <div className="loader-container">
          <Loader />
        </div>
      }
      <Header title={data.username} />

      <div className='User'>
        <UserDescription
          name={data.name}
          lastName={data.lastName}
          username={data.username}
          description={data.description} />
        <h2 className='related-post-title'>Related Posts:</h2>
        {data.posts && data.posts.map((item) => (
          <RelatedUserPost
            key={item.id}
            data={item}
            deletePost={deletePost}
            editPost={editPost}
            user={user}
          />
        ))}

        {seeUpdatePost && <UpdatePost
          userId={data.userId}
          id={updateData.id}
          title={updateData.title}
          content={updateData.content}
          user={updateData.user}
          toggleUpdatePost={toggleUpdatePost}
          successRequest={successRequest}
          failureRequest={failureRequest}
        />}
      </div>
    </>
  );
}

