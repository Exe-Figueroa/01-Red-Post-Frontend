import { MdModeEditOutline } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

import './RelatedUserPost.css';


export function RelatedUserPost({ data, deletePost, editPost, user }) {

  function cleanDate(date) {
    const [a, b] = date.split('T')
    return a;
  }


  function renderOptions() {
    if (user.userId === data.userId) {
      return (
        <>
          <div
            onClick={() => deletePost(data.id)}
            className='delete-icon'>
            <MdDeleteForever />
          </div>
          <div
            onClick={() => editPost(data)}
            className='edit-icon'>
            <MdModeEditOutline />
          </div>
        </>
      )
    }
  }

  return (
    <div className='RelatedUserPost'>

      {renderOptions()}

      <h2>{data.title} </h2>
      <span>{cleanDate(data.createdAt)}</span>
    </div>
  );
}

