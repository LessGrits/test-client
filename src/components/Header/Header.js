import React from "react";
import  './Header.css';
import {useDispatch} from "react-redux";
import {showModal} from "../../redux/actions";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <header>
      <div className="logo">
        <img src="https://image.freepik.com/free-vector/_98292-3951.jpg" alt="logo"/>
      </div>
      <button  className="new-hotdog" onClick={()=>dispatch(showModal())} >
        Add hotdog
      </button>
    </header>
  )
};

export default Header