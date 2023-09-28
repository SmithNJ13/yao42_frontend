/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

import './DeleteButton.css';

const DeleteButton = ({onDelete, comment}) => {
  
    const handleClick = () => {
        onDelete(comment);
      };

  return (
    <div>
      <span className="trash" onClick={handleClick}>
        <span></span>
        <i></i>
      </span>
    </div>
  );
};

export default DeleteButton;
