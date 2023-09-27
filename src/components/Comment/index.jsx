/* eslint-disable react/prop-types */
import React from 'react'
import LikeButton from '../LikeButton'



const Comment = ({comment, user_id}) => {
    return (
        <div>
            <p> User Id: {user_id}</p>
            <p>{comment}</p>
            <LikeButton/>
            
        </div>
    )
}



export default Comment;

