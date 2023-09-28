import React, { useState, useEffect } from 'react';
import './Profile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faUser, faFileLines } from '@fortawesome/free-solid-svg-icons'

import { Comments} from '../../components'
import CommentBox from '../../components/CommentBox';



const Profile = () => {
const [username, setUsername] = useState('');
const [email, setEmail] = useState('');
const [recipes, setRecipes] = useState([])

useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    const storedEmail = localStorage.getItem('email');

    if (storedUsername) {
      setUsername(storedUsername);
    }

    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  return (
    <>
   
<div className="tw-h-screen tw-overflow-hidden tw-flex tw-items-center tw-justify-center">

    <div className="tw-bg-orange-200">
    
        <div className="tw-container tw-mx-auto tw-my-40 tw-p-8">
            <div className="tw-md:flex tw-no-wrap tw-md:-mx-2 ">
                {/* <!-- Left Side --> */}
                <div className="tw-w-full tw-md:w-3/12 tw-md:mx-2">
                    {/* <!-- Profile Card --> */}
                    <div className="tw-bg-white tw-p-3 tw-border-t-4 tw-border-green-400">
                        <div className="tw-text-center tw-my-2">
                            <img className="tw-h-16 tw-w-16 tw-rounded-full tw-mx-auto"
                                src="https://cdn.australianageingagenda.com.au/wp-content/uploads/2015/06/28085920/Phil-Beckett-2-e1435107243361.jpg"
                                alt=""/>
                        </div>
                        <h1 className="tw-text-gray-900 tw-font-bold tw-text-xl tw-leading-8 tw-my-1 tw-text-center">{username}</h1>
                    </div>
                    {/* <!-- End of profile card --> */}
                    <div className="tw-my-4"></div>
               
                </div>
                {/* <!-- Right Side --> */}
                <div className="tw-w-full tw-md:w-9/12 tw-mx-2 tw-h-64">
                    {/* <!-- Profile tab -->
                    <!-- About Section --> */}

                    <div className="tw-bg-white tw-p-3 tw-shadow-sm tw-rounded-sm">
                        <div className="tw-flex tw-items-center tw-space-x-2 tw-font-semibold tw-text-gray-900 tw-leading-8">
                            <span className="tw-text-green-500">
                                <FontAwesomeIcon icon={faUser} />
                            </span>
                            <span className="tw-tracking-wide">Profile</span>
                        </div>
                        <div className="tw-text-gray-700">
                            <div className="tw-grid tw-md:grid-cols-2 tw-text-sm">
                                <div className="tw-grid tw-grid-cols-2">
                                    <div className="tw-px-4 tw-py-2 tw-font-semibold">Username</div>
                                    <div className="tw-px-4 tw-py-2">{username}</div>
                                </div>
                                <div className="tw-grid tw-grid-cols-2">
                                    <div className="tw-px-4 tw-py-2 tw-font-semibold">Email Address</div>
                                    <div className="tw-py-2">
                                        <a className="tw-text-blue-800">{email}</a>
                                    </div>
                                </div>
    
                            </div>
                        </div>
                    </div>
                    {/* <!-- End of about section --> */}
    
                    <div className="tw-my-4"></div>
{/*     
                    <!-- My recipes --> */}
                    <div className="tw-bg-white tw-p-3 tw-shadow-sm tw-rounded-sm">
    
                        <div className="tw-grid tw-grid-cols-2">
                            <div>
                                <div className="tw-flex tw-items-center tw-space-x-2 tw-font-semibold tw-text-gray-900 tw-leading-8 tw-mb-3">
                                    <span className="tw-text-green-500">
                                        <FontAwesomeIcon icon={faFileLines} />
                                    </span>
                                    <span className="tw-tracking-wide">My Recipes</span>
                                </div>
                                <ul className="tw-list-inside tw-space-y-2">
                                    <li>
                                        <div className="tw-text-teal-600">My Recipe 1.</div>
                                        <div className="tw-text-gray-500 text-xs">My Recipe 1</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        {/* <!-- End of My recipes --> */}
                    </div>
    
                    <div className="tw-my-4"></div>
    
                    {/* <!-- Liked recipes --> */}
                    <div className="tw-bg-white tw-p-3 tw-shadow-sm tw-rounded-sm">
    
                        <div className="tw-grid tw-grid-cols-2">
                            <div>
                                <div className="tw-flex tw-items-center tw-space-x-2 tw-font-semibold tw-text-gray-900 tw-leading-8 tw-mb-3">
                                    <span className="tw-text-green-500">
                                        <FontAwesomeIcon icon={faHeart} />
                                    </span>
                                    <span className="tw-tracking-wide"> Liked Recipes</span>
                                </div>
                                <ul className="tw-list-inside tw-space-y-2">
                                    <li>
                                        <div className="tw-text-teal-600">My Recipe 1.</div>
                                        <div className="tw-text-gray-500 tw-text-xs">My Recipe 1</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        {/* <!-- End of Liked recipes --> */}
                    </div>
                    
                    {/* <!-- End of profile tab --> */}
                </div>
            </div>
        </div>
    </div>
    </div>
    <Comments>
    <CommentBox  />
    </Comments>
    </>
  )
}

export default Profile