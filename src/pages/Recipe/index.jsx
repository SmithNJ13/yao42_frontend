import React, { useState, useEffect } from 'react'; 
import { PostRecipe } from '../../components';
import './style.css';
import form from '../../assets/form.png';
import LoginPopUp from '../../components/LoginPopUp';

const RecipePage = () => {
  const [showPopUp, setShowPopUp] = useState(false);  

  useEffect(() => {
 
    const userId = localStorage.getItem('user_id');

    if (!userId) {
      setShowPopUp(true);  
    }
  }, []);  
  const closePopUp = () => {
    setShowPopUp(false);  
  };

  return (
    <>
      <div className="tw-h-screen tw-overflow-hidden tw-flex tw-items-center tw-justify-center bodycontainer">

        {showPopUp && <LoginPopUp onClose={closePopUp} />}  

        <div style={{ backgroundImage: `url(${form})` }} className='backgroundimage'>

          <div className="tw-container tw-w-full tw-px-20 about tw-h-screen">

            <h1 id='title' className='tw-text-center tw-mb-40'> Submit a Recipe</h1>

            <div className="tw-md:flex tw-no-wrap formcontainer">

              <div className="tw-w-full tw-h-full">

                <div className="tw-bg-white tw-p-3 ">

                  <div className="tw-items-center tw-my-2 " data-testid="Post_Recipe">

                    <PostRecipe />

                  </div>

                </div>

              </div>

            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default RecipePage;
