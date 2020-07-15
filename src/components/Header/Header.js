import React from "react";
import  './Header.css';

const Header = ({setModalFlag}) => {
  return (
    <header>
      <div className="logo">
        <img src="https://image.freepik.com/free-vector/_98292-3951.jpg" alt="logo"/>
      </div>
      <button  className="new-hotdog" onClick={()=>setModalFlag(true)} >
        Add hotdog
      </button>
    </header>
  )
}

export default Header