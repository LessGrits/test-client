import React from "react";
import  './Header.css';

function Header() {
  return (
    <header>
      <div className="logo">
        <img src="https://image.freepik.com/free-vector/_98292-3951.jpg" alt="logo"/>
      </div>
      <button type="button" className=" new-hotdog" data-toggle="modal" data-target="#myModal" >
        Add hotdog
      </button>
    </header>
  )
}

export default Header