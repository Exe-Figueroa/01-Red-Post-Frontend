import { useState } from 'react';

import { base_url } from '../../../config/config';

import '../SendPost/SendPost.css';
import { Loader } from '../Loader/Loader';

export function UpdatePost({
  toggleUpdatePost,
  successRequest,
  failureRequest,
  user,
  title,
  content,
  id,
}) {
  const [isLoading, setIsLoading] = useState(false);

  const [dataState, setDataState] = useState({
    title: title,
    content: content,
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
    toggleUpdatePost(false);
  };
  function onSubmit(e) {
    setIsLoading(true);
    e.preventDefault();
    fetch(`${base_url}/posts/${id}`, {
      method: 'PATCH',
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
          successRequest('Post updated correctly.')
        } else {
          failureRequest('Lo sentimos es una feature que no esta disponible por el momento.')
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
                Update
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

