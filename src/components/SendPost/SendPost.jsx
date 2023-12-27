import React, { useContext, useState } from 'react';

import { base_url } from '../../../config/config';
import { DataContext } from '../../DataContext/DataContextProvider';

import './SendPost.css';
import { Loader } from '../Loader/Loader';

export function SendPost({ toggleSendPost }) {
  const { auth: { user }, successRequest, failureRequest } = useContext(DataContext);
  const [isLoading, setIsLoading] = useState(false);
  const [dataState, setDataState] = useState({
    userId: user.userId,
    title: '',
    content: ''
  });

  function titleOnChange(value) {
    setDataState({
      ...dataState,
      title: value
    });
  };
  function contentOnChange(value) {
    setDataState({
      ...dataState,
      content: value
    });
  };

  function onCancel() {
    setDataState({
      title: '',
      content: ''
    });
    toggleSendPost(false);
  };
  function onSubmit(e) {
    setIsLoading(true);
    e.preventDefault();
    fetch(`${base_url}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      },
      body: JSON.stringify(dataState)
    })
      .then(res => {
        onCancel();
        setIsLoading(false);
        if (res.ok) {
          successRequest('The post was sent correctly.')
        } else {
          failureRequest('Error sending the post.')
        }
      })
      .catch(e => {
        onCancel();
      })
  };

  return (
    <div className='SendPost'>
      {
        isLoading ?
          <Loader />
          :
          <form
            className="card-container"
            onSubmit={onSubmit}
          >
            <input
              type="text"
              placeholder='Title'
              className="title"
              value={dataState.title}
              onChange={(e) => titleOnChange(e.target.value)}
            />
            <textarea
              value={dataState.content}
              placeholder='Post content'
              className='post-content'
              onChange={(e) => contentOnChange(e.target.value)}
            ></textarea>
            <div className='validator-container'>
              <button
                type='submit'
                className='post'
              >
                Post
              </button>
              <button
                type='button'
                className='cancel'
                onClick={onCancel}
              >
                Cancel
              </button>
            </div>
          </form>
      }
    </div>
  );
};

