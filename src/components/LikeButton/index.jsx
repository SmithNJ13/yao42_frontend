/* eslint-disable react/prop-types */
import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'
import {faHeart as regularHeart} from '@fortawesome/free-regular-svg-icons'
import axios from "axios";
import './LikeButton.css'

function userLikesRecipe(data, user_id, recipe_id) {
  const like = data.find((li) => li.user_id == user_id && li.recipe_id == recipe_id)
  return like
}
const LikeButton = ({comment_id, recipe_id}) => {
const [like, setLike] = useState(null);
const uID = localStorage.getItem("user_id")

async function getLikes() {
  await axios.get("https://lap-4-server.onrender.com/likes")
    .then(resp => {
      const data = resp.data.likes
      setLike(userLikesRecipe(data,uID, recipe_id))
    })
}
const createLike = async () => {
  const requestBody = JSON.stringify({ user_id: uID, recipe_id: recipe_id });
          const response = await fetch('https://lap-4-server.onrender.com/likes', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            body: requestBody,
          });
}
const deleteLike = async () => {
  const response = await fetch(
    `https://lap-4-server.onrender.com/likes/${like.id}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    }
  );
}
useEffect(() => {
  getLikes()
},[])

const handleClick = async () => {
  if (!uID) {
    alert("You must be logged in to like a recipe.");
    return;
  }

  if(like) {
    deleteLike().then(getLikes)
  } else {
    createLike().then(getLikes)
  }
};


  return (
    <>
        <FontAwesomeIcon icon={like ? solidHeart : regularHeart} className={`likebutton ${like ? 'solid-heart' : 'regular-heart'}`}id='like-button' onClick={handleClick}
         data-testid='like-button'
        />
        </>
  );
};


export default LikeButton;
