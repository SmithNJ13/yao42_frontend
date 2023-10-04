/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import './Profile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faFileLines, faUser} from '@fortawesome/free-solid-svg-icons'
import form from '../../assets/form.png'
import { faFacebook, faInstagram, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons'
import axios from 'axios';
import { useNavigate} from 'react-router-dom';
import LoginPopUp from '../../components/LoginPopUp';
import Loading from "../../components/Loading"

const Profile = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [userRecipes, setUserRecipes] = useState([])
  const [recipes, setRecipes] = useState([])
  const [likes, setLikes] = useState([])
  const [currentPageRecipes, setCurrentPageRecipes] = useState(1);
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  useEffect(() => {
    async function fetchData(){
      try { 
        const uID = localStorage.getItem('user_id')
        const allRecipes = await axios.get('https://lap-4-server.onrender.com/recipes')
        const allLikes = await axios.get("https://lap-4-server.onrender.com/likes")
        setRecipes(allRecipes.data.recipes)
        setUserRecipes(allRecipes.data.recipes.filter((r) => r.user_id == uID ))
        setLikes(allLikes.data.likes.filter((l) => l.user_id == uID))
      } catch (error) {   
        console.log(error)
      } 
    }
    fetchData();
  }, [])

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    const storedEmail = localStorage.getItem('email');

    if (storedUsername) {
      setUsername(storedUsername);
    }

    if (storedEmail) {
      setEmail(storedEmail);
    }

    if (!storedUsername || !storedEmail) {
      setShowLoginPopup(true);
    }

  }, []);
  if(!userRecipes || !likes) {
    <Loading />
  } else {
    console.log("user_recipes: ", userRecipes)
    console.log("user_likes: ", likes)
  }


  const loadMoreRecipes = () => {
    setCurrentPageRecipes(currentPageRecipes + 1);
  };

  const goBackRecipes = () => {
    if (currentPageRecipes > 1) {
      setCurrentPageRecipes(currentPageRecipes - 1);
    }
  };

  const startIndexRecipes = (currentPageRecipes - 1) * 4; 
  const endIndexRecipes = startIndexRecipes + 4;
  const recipesToShow = userRecipes.slice(startIndexRecipes, endIndexRecipes);



  

  return (
  <>
    {showLoginPopup && <LoginPopUp onClose={() => setShowLoginPopup(false)} />}
    <div className="tw-h-screen tw-overflow-hidden tw-flex tw-items-center tw-justify-center bosscontainer">
    <div style= {{ backgroundImage: `url(${form})`}}  className='backgroundimage'>
      <div id="profileCard" className="tw-container tw-w-full tw-px-20 about tw-h-screen">
        <div className="tw-md:flex tw-no-wrap">
          {/* <!-- Left Side --> */}
          <div className="tw-w-full tw-h-full">
          {/* <!-- Profile Card --> */}
          <div className="tw-bg-white tw-p-3 socialdiv">
            <div className="tw-text-center tw-my-2">
              {localStorage.getItem('username') ? (
              <img className="tw-h-32 tw-w-32 tw-rounded-full tw-mx-auto profile"
              src="https://cdn.australianageingagenda.com.au/wp-content/uploads/2015/06/28085920/Phil-Beckett-2-e1435107243361.jpg"
              alt="Mark's profile picture" />
              ) : (
              <FontAwesomeIcon icon={faUser} className='fontawesome fauser' />
              )}
              </div>
              <h1 className="tw-text-gray-900 tw-font-bold tw-text-xl tw-leading-8 tw-text-center">{username}</h1>
              {localStorage.getItem('username') ? (
                <h3 className="tw-text-gray-600 tw-font-lg tw-text-semibold tw-leading-6 tw-text-center">
                  Member since October 2023</h3>
                ) : (
                <h3 className="tw-text-gray-600 tw-font-lg tw-text-semibold tw-leading-6 tw-text-center"> Member since </h3>
                )}
                <div className='tw-flex tw-text-center tw-mt-4 tw-mb-4 tw-justify-around'>
                <div className='tw-flex tw-text-center tw-mt-4 tw-mb-4 tw-justify-around tw-w-1/2'>
                <div className='tw-w-1/2 tw-mx-auto tw-min-w-fit likesandrecipes'>
                <div className="tw-grid tw-grid-cols-2 tw-text-base">
                <div className="tw-text-center">
                  <span className="tw-font-semibold tw-text-gray-700">Likes</span>
                  <br />
                  <span className="tw-font-semibold tw-text-gray-700">{likes.length}</span>
                </div>
                <div className="tw-text-center">
                  <span className="tw-font-semibold tw-text-gray-700">Recipes</span>
                  <br />
                  <span className="tw-font-semibold tw-text-gray-700">{userRecipes.length}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tw-flex tw-justify-around tw-text-base">
          <a href="https://www.facebook.com/" className="social">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.instagram.com/" className="social">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://twitter.com/" className="social">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.pinterest.co.uk/" className="social">
          <FontAwesomeIcon icon={faPinterest} />
            </a>
          </div>
          <div className="tw-flex tw-justify-center email">
            <div className="tw-px-4 tw-py-2 tw-font-semibold ">Email Address</div>
            <div className="tw-py-2">
              <a>{email}</a>
            </div>
          </div>
        </div>
        {/* <!-- End of profile card --> */}
    </div>
        {/* <!-- Right Side --> */}
    <div className="tw-w-full tw-md:w-9/12 tw-mx-2 tw-h-64">
    {/* <!-- Profile tab --> */}
    {/* <!-- My recipes --> */}
      <div className="tw-bg-white tw-p-3 tw-shadow-sm tw-rounded-sm">
        <div className="tw-grid tw-grid-cols-1">
          <div>
            <div className="tw-flex tw-items-center tw-space-x-2 tw-font-semibold tw-text-gray-900 tw-leading-8 tw-mb-3">
              <span className="tw-text-green-500">
                <FontAwesomeIcon icon={faFileLines} className='fontawesome' />
              </span>
              <span className="tw-tracking-wide">My Recipes</span>
            </div>
            <div id="userRecipes" className="tw-flex tw-flex-wrap tw-justify-start">
              {recipesToShow.map((x) => (
              <div key={x.id} className="tw-w-1/5 tw-mb-4 tw-mx-2 tw-text-center">
                <button className='button' onClick={() => navigate(`/recipe/${x.name}`)}>
                  <div className="tw-font-semibold recipename">{x.name}</div>
                  <img className="tw-h-20 tw-w-20 tw-rounded-full tw-mx-auto recipes" src={x.image} alt={x.name} />
                  </button>
                </div>
              ))}
            </div>
            <div className="tw-flex tw-justify-between tw-mt-2">
              {startIndexRecipes > 0 && ( 
              <button
              onClick={goBackRecipes}
              className="tw-text-white tw-rounded tw-py-2 tw-px-4 tw-font-semibold profilebutton"
              >Back</button>
              )}
              {endIndexRecipes < userRecipes.length && ( 
              <button 
              onClick={loadMoreRecipes}
              className="tw-text-white tw-rounded tw-py-2 tw-px-4 tw-font-semibold profilebutton"
              >See More Recipes</button>
              )}
            </div>
          </div>
        </div>
        {/* <!-- End of My recipes --> */}
        </div>
        <div className="tw-my-4"></div>
        {/* <!-- Liked recipes --> */}
        <div className="tw-bg-white tw-p-3 tw-shadow-sm tw-rounded-sm likesdiv">
          <div className="tw-grid tw-grid-cols-1">
            <div>
              <div className="tw-flex tw-items-center tw-space-x-2 tw-font-semibold tw-text-gray-900 tw-leading-8 tw-mb-3  ">
                <span >
                  <FontAwesomeIcon icon={faHeart} className='fontawesome' />
                </span>
                <span className="tw-tracking-wide"> Liked Recipes</span>
              </div>
              <ul id="likedRecipes" className="tw-list-inside tw-space-y-2">
                {likes.map((like) => {
                  const likedRecipe = recipes.find((recipe) => recipe.id === like.recipe_id);

                  if (likedRecipe) {
                    return (
                      <li key={like.id}>
                        <div>
                          <button className='button' onClick={() => navigate(`/recipe/${likedRecipe.name}`)}>
                            <div className="tw-font-semibold recipename">{likedRecipe.name}</div>
                            <img className="tw-h-20 tw-w-20 tw-rounded-full tw-mx-auto recipes" src={likedRecipe.image} alt={likedRecipe.name} />
                          </button>
                        </div>
                      </li>
                    );
                  }
                  return null;
                })}
              </ul>
              <button
              className="tw-text-white tw-rounded tw-py-2 tw-px-4 tw-font-semibold profilebutton"
              >More Liked Recipes</button>
              <div className="tw-flex tw-justify-between tw-mt-2">
                <button
                className="tw-text-white tw-rounded tw-py-2 tw-px-4 tw-font-semibold profilebutton"
                >Back</button>
                <button
                className="tw-text-white tw-rounded tw-py-2 tw-px-4 tw-font-semibold profilebutton"
                >See More Liked Recipes</button>
                </div>
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
  </>
)}

export default Profile
