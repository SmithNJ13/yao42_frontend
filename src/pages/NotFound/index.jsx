
import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLemon } from '@fortawesome/free-regular-svg-icons'
import "./NotFound.css"

const NotFound = () => {
  return (
    <>
    <div className='notfounddiv'>
    <h1 className='notfoundh1'>
      4<FontAwesomeIcon icon={faLemon} className='lemon'/>4 - Page Not Found: <br/> Looks like we&apos;re out of season! 
      </h1>
      <br/>
    <Link to="/" className="home_link"> Back to Home &rarr;</Link>
    </div>
    </>
  )
}

export default NotFound;
