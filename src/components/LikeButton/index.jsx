/* eslint-disable react/prop-types */
import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'
import {faHeart as regularHeart} from '@fortawesome/free-regular-svg-icons'
import './LikeButton.css'

const LikeButton = () => {

const [like, setLike] = useState(false);
const [likeId, setLikeId] = useState(null);

// const getUserIdFromLocalStorage = () => {
//   const userId = localStorage.getItem('user_id');
//   return userId ? parseInt(userId, 10) : null;
// };

// const getRecipeIdFromLocalStorage = () => {
//   const recipeId = localStorage.getItem('recipe_id');
//   return recipeId ? parseInt(recipeId, 10) : null;
// };

const userId = 1;
const recipeId = 1;


// const userId = getUserIdFromLocalStorage();
// const recipeId = getRecipeIdFromLocalStorage();

useEffect(() => {
  if (userId !== null && recipeId !== null) {
    fetch(`https://lap-4-server.onrender.com/likes?user_id=${userId}&recipe_id=${recipeId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY5NTgyMzkyNSwianRpIjoiYmVmNjlmNWMtMDRhNy00Njc0LWE0ZTQtZjcxNTQ3NDZjMTUzIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6eyJ1c2VybmFtZSI6InRlc3QyIiwiZW1haWwiOiJ0ZXN0MkBleGFtcGxlLmNvbSJ9LCJuYmYiOjE2OTU4MjM5MjUsImV4cCI6MTY5NTgyNDgyNX0.-kFqXKxQFcGUxbmv8Lv7K0D61ezMdHYXngN8iYlIf5M', // Replace with your access token
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Check if the user has already liked the recipe
        console.log("There's a like!", data)
        if (data.length > 0) {
          setLike(true);
          setLikeId(data[0].id);
        }
      })
      .catch((error) => {
        console.error('Error fetching user like:', error);
      });
  }
}, [userId, recipeId]);


const handleClick = () => {

  if (userId !== null && recipeId !== null) {
    if (like) {
      // User wants to remove their like
      fetch(`https://lap-4-server.onrender.com/likes/${likeId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY5NTgyMzkyNSwianRpIjoiYmVmNjlmNWMtMDRhNy00Njc0LWE0ZTQtZjcxNTQ3NDZjMTUzIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6eyJ1c2VybmFtZSI6InRlc3QyIiwiZW1haWwiOiJ0ZXN0MkBleGFtcGxlLmNvbSJ9LCJuYmYiOjE2OTU4MjM5MjUsImV4cCI6MTY5NTgyNDgyNX0.-kFqXKxQFcGUxbmv8Lv7K0D61ezMdHYXngN8iYlIf5M', // Replace with your access token
        },
      })
        .then(() => {
          setLike(false);
          setLikeId(null);
        })
        .catch((error) => {
          console.error('Error deleting like:', error);
        });
    } else {
    setLike(!like);
    if (userId !== null && recipeId !== null && !like) {
      const requestBody = JSON.stringify({ user_id: userId, recipe_id: recipeId });

      fetch('https://lap-4-server.onrender.com/likes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': `Bearer ${localStorage.getItem('token')}`
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY5NTgyMzkyNSwianRpIjoiYmVmNjlmNWMtMDRhNy00Njc0LWE0ZTQtZjcxNTQ3NDZjMTUzIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6eyJ1c2VybmFtZSI6InRlc3QyIiwiZW1haWwiOiJ0ZXN0MkBleGFtcGxlLmNvbSJ9LCJuYmYiOjE2OTU4MjM5MjUsImV4cCI6MTY5NTgyNDgyNX0.-kFqXKxQFcGUxbmv8Lv7K0D61ezMdHYXngN8iYlIf5M' 
        },
        body: requestBody,
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the response as needed
          console.log('Like created:', data);
        })
        .catch((error) => {
          console.error('Error creating like:', error);
        });
    } }
  }
  }

  return (
    <>
        <FontAwesomeIcon icon={like ? solidHeart : regularHeart} className={`likebutton ${like ? 'solid-heart' : 'regular-heart'}`}id='like-button' onClick={handleClick}
         data-testid='like-button'
        />
        </>
  );
};


export default LikeButton;
