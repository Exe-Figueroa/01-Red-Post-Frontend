import React from 'react';
import '../styles/SendPost.css';

export function SendPost(props) {
  return (
    <div className='SendPost'>
      <form className="card-container">
        <input type="text" placeholder='Title' className="title" />
        <textarea placeholder='Post content' className='post-content'></textarea>
        <div className='validator-container'>
          <button type='submit ' className='post'>Post</button>
          <button type='button' className='cancel'>Cancel</button>
        </div>
      </form>
    </div>
  );
}

