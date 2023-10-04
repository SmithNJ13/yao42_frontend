/* eslint-disable react/prop-types */
import React, {useState,useEffect} from 'react'
import Comment from '../Comment'
import CommentBox from '../CommentBox'
import DeleteButton from '../DeleteButton';
import { useParams } from 'react-router-dom';
import { Loading } from '..';

const Comments = ({recipe_id}) => {
    const [comments, setComments] = useState([]);
    const { postId } = useParams();
    
 const getComments = async () => {
  try {
  const response = await fetch('https://lap-4-server.onrender.com/comments')
  const data = await response.json()
  setComments(data.comments)
  } catch (error) {
  console.error(error)
  }
}
async function filterComments() {
  const comm = comments.find((com) => com.recipe_id == recipe_id)
  if(comm === undefined) {
    console.log("no comment matches!")
  } else {
    return console.log(comm)
  }
}


  const handleDelete = async (commentToDelete) => {
    try {
      const response = await fetch(
        `https://lap-4-server.onrender.com/comments/${commentToDelete.id}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      if (response.ok) {
        console.log('Comment deleted successfully!')
        setComments((prevComments) =>
          prevComments.filter((comment) => comment.id !== commentToDelete.id)
        );
      }
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  };

  const addCommentToState = (newComment) => {
    setComments((prevComments) => [...prevComments, newComment]);
  };

  useEffect(() => {
    getComments();
    filterComments()
  }, [postId]);

  return (
    <>
    <div className="comments">
    <h2 className='comments_title'>Comments</h2>
    {comments.map((comment) => ( 
      <div key={comment.id}>
     <Comment className='comment' key={comment.id} 
     comment={comment.comment} 
     user_id={comment.user_id} />
      <DeleteButton comment={comment} onDelete={handleDelete}/> 
     </div>
      ))}
    <CommentBox recipe_id={recipe_id} onCommentPosted={addCommentToState}/>
    </div>
    </>
  )
}

export default Comments
