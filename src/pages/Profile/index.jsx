/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import './Profile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faFileLines} from '@fortawesome/free-solid-svg-icons'
import form from '../../assets/addrecipeformbg.png'
import { faFacebook, faInstagram, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons'
import axios from 'axios';
import LikeButton from '../../components/LikeButton/index.jsx';
import { useNavigate } from 'react-router-dom';
import LoginPopUp from '../../components/LoginPopUp';

const Profile = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [recipes, setRecipes] = useState([])
  const [likedRecipes, setLikedRecipes] = useState([]);
  const [likedRecipesToShow, setLikedRecipesToShow] = useState([]);
  const [currentPageRecipes, setCurrentPageRecipes] = useState(1);
  const [currentPageLikedRecipes, setCurrentPageLikedRecipes] = useState(1);
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  useEffect(() => {
    async function fetchData(){
      try { 
        const localId = localStorage.getItem('user_id')
        const recipesresponse= await axios.get('https://lap-4-server.onrender.com/recipes')
        console.log(recipesresponse.data)
        setRecipes(recipesresponse.data.recipes.filter((r) => r.user_id == localId ))
      
        const likesresponse = await axios.get('https://lap-4-server.onrender.com/likes')
        console.log(likesresponse.data)
        setLikedRecipes(likesresponse.data.likes.filter((l) => l.user_id == localId ))
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
  const recipesToShow = recipes.slice(startIndexRecipes, endIndexRecipes);



 const loadMoreLikedRecipes = () => {
    setCurrentPageLikedRecipes(currentPageLikedRecipes + 1);
  };

    const goBackLikedRecipes = () => {
    if (currentPageLikedRecipes > 1) {
      setCurrentPageLikedRecipes(currentPageLikedRecipes - 1);
    }
    }

    const startIndexLikedRecipes = (currentPageLikedRecipes - 1) * 4;
    const endIndexLikedRecipes = startIndexLikedRecipes + 4;

  useEffect(() => {   
    const startIndexLikedRecipes = (currentPageLikedRecipes - 1) * 4;
    const endIndexLikedRecipes = startIndexLikedRecipes + 4;
    const likedRecipesToDisplay = likedRecipes.slice(startIndexLikedRecipes, endIndexLikedRecipes);
    setLikedRecipesToShow(likedRecipesToDisplay);
  }, [currentPageLikedRecipes, likedRecipes]);


  

  return (
    <>
    {showLoginPopup && <LoginPopUp onClose={() => setShowLoginPopup(false)} />}
<div className="tw-h-screen tw-overflow-hidden tw-flex tw-items-center tw-justify-center bosscontainer">

    <div style= {{ backgroundImage: `url(${form})`}}  className='backgroundimage'>
    
        <div className="tw-container tw-w-full tw-px-20 about tw-h-screen">
            <div className="tw-md:flex tw-no-wrap">
                {/* <!-- Left Side --> */}
                <div className="tw-w-full tw-h-full">
                    {/* <!-- Profile Card --> */}
                    <div className="tw-bg-white tw-p-3 socialdiv">
                        <div className="tw-text-center tw-my-2">
                            <img className="tw-h-32 tw-w-32 tw-rounded-full tw-mx-auto profile"
                                src="https://cdn.australianageingagenda.com.au/wp-content/uploads/2015/06/28085920/Phil-Beckett-2-e1435107243361.jpg"
                                alt="Mark's profile picture"/>
                        </div>
                        <h1 className="tw-text-gray-900 tw-font-bold tw-text-xl tw-leading-8 tw-text-center">{username}</h1>
                        <h3 className="tw-text-gray-600 tw-font-lg tw-text-semibold tw-leading-6 tw-text-center">Member since October 2023</h3>
                        <div className='tw-flex tw-text-center tw-mt-4 tw-mb-4 tw-justify-around'>


  <div className='tw-flex tw-text-center tw-mt-4 tw-mb-4 tw-justify-around tw-w-1/2'>
  <div className='tw-w-1/2 tw-mx-auto tw-min-w-fit likesandrecipes'>
    <div className="tw-grid tw-grid-cols-2 tw-text-base">
      <div className="tw-text-center">
        <span className="tw-font-semibold tw-text-gray-700">Likes</span>
        <br />
        <span className="tw-font-semibold tw-text-gray-700">{likedRecipes.length}</span>
      </div>
      <div className="tw-text-center">
        <span className="tw-font-semibold tw-text-gray-700">Recipes</span>
        <br />
        <span className="tw-font-semibold tw-text-gray-700">{recipes.length}</span>
      </div>
    </div>
  </div>
</div>
</div>




                        <div className="tw-flex tw-justify-around tw-text-base">
                        <FontAwesomeIcon icon={faFacebook} className=' social' />
                        <FontAwesomeIcon icon={faInstagram} className=' social' />
                        <FontAwesomeIcon icon={faTwitter} className=' social' />
                        <FontAwesomeIcon icon={faPinterest} className='social'/>
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
                                <div className="tw-flex tw-flex-wrap tw-justify-between">
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
                >
                  Back
                </button>
              )}
              {endIndexRecipes < recipes.length && ( 
                <button
                  onClick={loadMoreRecipes}
                  className="tw-text-white tw-rounded tw-py-2 tw-px-4 tw-font-semibold profilebutton"
                >
                  See More Recipes
                </button>
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
            <ul className="tw-list-inside tw-space-y-2">
                <li>
                    {likedRecipesToShow.map((like) => {
                        const recipe = recipes.find((r) => r.id === like.recipe_id);
                        if (recipe) {
                            return (
                              
                                <div key={recipe.id} className="tw-w-1/5 tw-mb-4 tw-mx-2 tw-text-center">
                                  <button className='button' onClick={() => navigate(`/recipe/${recipe.name}`)}>
                                    <div className=" tw-font-semibold recipename">{recipe.name}</div>
                                    <img className="tw-h-20 tw-w-20  tw-rounded-full tw-mx-auto recipes" src={recipe.image} alt={recipe.name} />
                                    <LikeButton recipeId={recipe.id} />
                                    </button>
                                </div>
                               
                            );
                        }
                        return null;
                    })}
                </li>
            </ul>

            {likedRecipes.length > 4 && likedRecipesToShow.length < likedRecipes.length && ( 
                <button
                    onClick={loadMoreLikedRecipes}
                    className="tw-text-white tw-rounded tw-py-2 tw-px-4 tw-font-semibold profilebutton"
                >
                    More Liked Recipes
                </button>
            )}

    
         

            <div className="tw-flex tw-justify-between tw-mt-2">
                {startIndexLikedRecipes > 0 && (
                    <button
                        onClick={goBackLikedRecipes}
                        className="tw-text-white tw-rounded tw-py-2 tw-px-4 tw-font-semibold profilebutton"
                    >
                        Back
                    </button>
                )}
                {endIndexLikedRecipes < likedRecipes.length && (
                    <button
                        onClick={loadMoreLikedRecipes}
                        className="tw-text-white tw-rounded tw-py-2 tw-px-4 tw-font-semibold profilebutton"
                    >
                        See More Liked Recipes
                    </button>
                )}
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
  )
}

export default Profile
