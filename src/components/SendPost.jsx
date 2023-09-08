import React, { useState } from 'react';
import '../styles/SendPost.css';

export function SendPost({toggleSendPost}) {
  const [dataState, setDataState] = useState({
    userId: 2,
    title: '',
    content: ''
  });

  function titleOnChange(value) {
    setDataState({
      ...dataState, 
      title : value
    });
  };
  function contentOnChange(value) {
    setDataState({
      ...dataState, 
      content : value
    });
  };

  function onCancel() {
    setDataState({
      title:'', 
      content:''
    });
    toggleSendPost(false);
  };
  async function onSubmit(e) {
    e.preventDefault();
    const response = await fetch('http://localhost:3000/api/v1/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataState)
    });

    
  };

  return (
    <div className='SendPost'>
      <form 
      className="card-container"
      onSubmit={onSubmit}
      >
        <input 
        type="text" 
        placeholder='Title' 
        className="title" 
        value={dataState.title}
        onChange={(e)=>titleOnChange(e.target.value)}
        />
        <textarea 
        value={dataState.content}
        placeholder='Post content' 
        className='post-content'
        onChange={(e)=>contentOnChange(e.target.value)}
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
    </div>
  );
};

