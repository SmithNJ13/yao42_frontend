/* eslint-disable react/prop-types */
import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'
import {faHeart as regularHeart} from '@fortawesome/free-regular-svg-icons'
import './LikeButton.css'

const LikeButton = ({recipe_id}) => {

const [like, setLike] = useState(false);
const [likeId, setLikeId] = useState(null);

const getUserIdFromLocalStorage = () => {
  const userId = localStorage.getItem('user_id');
  return userId ? parseInt(userId, 10) : null;
};


const userId = getUserIdFromLocalStorage();
const recipeId = recipe_id;

useEffect(() => {
  if (userId !== null && recipeId !== null) {
    fetch(`https://lap-4-server.onrender.com/likes?user_id=${userId}&recipe_id=${recipeId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`, 
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if ( data.likes && data.likes.length > 0) {
        console.log("There's a like!", data)
          setLike(true);
          setLikeId(data.likes[0].id);
        } else {
          setLikeId(null);
        }})
      .catch((error) => {
        console.error('Error fetching user like:', error);
      });
  }
}, [userId, recipeId]);


const handleClick = async () => {
  try {
    if (userId !== null && recipeId !== null) {
      if (like) {
        if (likeId !== null) {
          console.log('Deleting likeId:', likeId)
          const response = await fetch(
            `https://lap-4-server.onrender.com/likes/${likeId}`,
            {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
              },
            }
          );
          if (response.ok) {
            setLike(false);
            setLikeId(null);
          } else {
            console.error('Failed to delete like');
          }
        }
      } else {
        setLike(!like);
        if (!like) {
          const requestBody = JSON.stringify({ user_id: userId, recipe_id: recipeId });
          const response = await fetch('https://lap-4-server.onrender.com/likes', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            body: requestBody,
          });
          if (response.ok) {
            const data = await response.json();
            setLikeId(data.id);
            console.log('Like created:', data);
          } else {
            console.error('Failed to create like');
          }
        }
      }
    }
  } catch (error) {
    console.error('Error:', error);
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
