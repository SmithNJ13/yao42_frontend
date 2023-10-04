/* eslint-disable react/prop-types */
import React from 'react'
import LikeButton from '../LikeButton'




const Comment = ({comment, comment_id, user_id}) => {
    return (
        <>
        <div className="usercomment">
            <p> User Id: {user_id}</p>
            <p>{comment}</p>
        </div>
        <LikeButton comment_id={comment_id}/>
        </>
    )
}



export default Comment;

