/* eslint-disable react/prop-types */
import React from 'react'



const Comment = ({comment, user_id}) => {
    return (
        <div>
            <p> User Id: {user_id}</p>
            <p>{comment}</p>
            
        </div>
    )
}



export default Comment;

