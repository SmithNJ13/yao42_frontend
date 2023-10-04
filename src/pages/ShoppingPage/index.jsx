import React, { useState, useEffect } from 'react'; 
import { ShoppingList } from "../../components"
import './style.css'
import LoginPopUp from '../../components/LoginPopUp';

const ShoppingPage = () => {

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
      {showPopUp && <LoginPopUp onClose={closePopUp} />} 
      <div className="shopping-page-container">
      <h1 id="Shopping_Title" data-testid="Shopping_Title">Shopping List</h1>
      <div data-testid="shopping-list">
        <ShoppingList/>
        </div>
      </div>
    </>
  );
}

export default ShoppingPage
