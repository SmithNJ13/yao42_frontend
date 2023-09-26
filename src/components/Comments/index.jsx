import React, {useState,useEffect} from 'react'
import Comment from '../Comment'
import CommentBox from '../CommentBox'

const Comments = () => {
    const [comments, setComments] = useState([]);
 const getComments = async () => {
 try {
const response = await fetch('https://lap-4-server.onrender.com/comments')
const data = await response.json()
setComments(data.comments)
console.log(data)
 } catch (error) {
console.error(error)
 }

}

useEffect(() => {
    getComments();
  }, []);

  return (
    <>
    <h2>Comments</h2>
    {comments.map((comment) => {
        return <Comment key={comment.id} comment={comment.comment} user_id={comment.user_id} />;
      })}
    <CommentBox />
    
    </>
  )
}

export default Comments
