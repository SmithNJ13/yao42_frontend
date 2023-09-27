import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'
import {faHeart as regularHeart} from '@fortawesome/free-regular-svg-icons'
import './LikeButton.css'

const LikeButton = () => {
const [like, setLike] = useState(false);
const handleClick = () => {
    setLike(!like);
}

  return (
    <>
        <FontAwesomeIcon icon={like ? solidHeart : regularHeart } className='likebutton' onClick={handleClick} data-testid="like-button"/>
        </>
  )
}

export default LikeButton
