import React from 'react';
import LikeButton from '../LikeButton';

const Comment = ({ comment, username }) => {
    return (
        <>
            <div className="usercomment">
                <p>{username}:</p>
                <p>{comment}</p>
            </div>
        </>
    );
};

export default Comment;
