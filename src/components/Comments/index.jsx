import React, { useState, useEffect } from 'react';
import Comment from '../Comment';
import CommentBox from '../CommentBox';
import DeleteButton from '../DeleteButton';
import { useParams } from 'react-router-dom';

const Comments = ({ recipe_id }) => {
  const [comments, setComments] = useState([]);
  const [users, setUsers] = useState([]);

  const getComments = async () => {
    try {
      const response = await fetch('https://lap-4-server.onrender.com/comments');
      const data = await response.json();
      setComments(data.comments);
    } catch (error) {
      console.error(error);
    }
  };

  const getUsers = async () => {
    try {
      const response = await fetch('https://lap-4-server.onrender.com/users');
      const data = await response.json();
      setUsers(data.users);
    } catch (error) {
      console.error(error);
    }
  };

  const getUsernameByUserId = (id) => {
    const user = users.find((user) => user.id === id);
    return user ? user.username : 'Unknown User';
  };


  const handleDelete = async (commentToDelete) => {
    const currentUserId = localStorage.getItem('user_id');
  
    if (commentToDelete.user_id.toString() === currentUserId) {
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
          alert('Comment Deleted!')
          setComments((prevComments) =>
            prevComments.filter((comment) => comment.id !== commentToDelete.id)
          );
        }
      } catch (error) {
        console.error('Error deleting comment:', error);
      }
    } else {
      alert("You can't delete someone else's comment!");
    }
  };

  useEffect(() => {
    getComments();
    getUsers();
  }, []);

  return (
    <div className="comments">
      <h2 className='comments_title'>Comments</h2>
      {comments.filter((comment) => comment.recipe_id == recipe_id).map((comment) => (
        <div key={comment.id}>
          <Comment
            className='comment'
            comment={comment.comment}
            username={getUsernameByUserId(comment.user_id)}
          />
          <DeleteButton comment={comment} onDelete={handleDelete} />
        </div>
      ))}
      <CommentBox recipe_id={recipe_id} onCommentSuccess={getComments} />
    </div>
  );
};

export default Comments;
