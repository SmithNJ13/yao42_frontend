import React from 'react'
import { PostRecipe } from '../../components'
import './style.css'
import form from '../../assets/addrecipeformbg.png'


const RecipePage = () => {
  return (
    <>
      <div className="tw-h-screen tw-overflow-hidden tw-flex tw-items-center tw-justify-center">

        <div style={{ backgroundImage: `url(${form})` }} className='backgroundimage'>

          <div className="tw-container tw-w-full tw-px-20 about tw-h-screen">

            <h1 id='title' className='tw-text-center'> Submit a Recipe</h1>

            <div className="tw-md:flex tw-no-wrap">

              <div className="tw-w-full tw-h-full">

                <div className="tw-bg-white tw-p-3 ">

                  <div className="tw-items-center tw-my-2 formcontainer">

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

export default RecipePage
