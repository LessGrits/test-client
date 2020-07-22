import React, {useState} from "react";
import { useDispatch} from 'react-redux'
import "./Modal-window.css"
import {createHotdog, hideModal} from './../../redux/actions'

const ModalWindow = ({checkValidate}) => {

  const initialHotdogData = {
    name: "",
    price: "",
    description: "",
    photo_url: ""
  };

  const dispatch = useDispatch();

  const [hotdogData, setHotdogData] = useState(initialHotdogData);


  const changeInputHandler = event => {
    event.persist();
    setHotdogData(prev => ({
      ...prev,
      [event.target.name]: event.target.value
    }));
  };

  const onSubmitForm = async e => {
    e.preventDefault();
    const id = (Date.now() / 1000).toFixed();
    const newHotdog = {
      ...hotdogData,
      hotdog_id: id
    };

    dispatch(createHotdog(newHotdog));
  };

  return (
    <>
      <div className="modal-background" onClick={() => dispatch(hideModal())}>
      </div>
      <div className="modal-content">
        <form onSubmit={onSubmitForm}>
          <div className="modal-header">
            <h4 className="modal-title">Add new hot-dog</h4>
          </div>
          <div className="modal-body">
            <input className="modal-input"
                   placeholder="Image"
                   type="text"
                   name="photo_url"
                   value={hotdogData.photo_url}
                   onChange={changeInputHandler}/>
            <input className="modal-input"
                   required
                   placeholder="Name"
                   type="text"
                   name="name"
                   value={hotdogData.name}
                   onChange={changeInputHandler}/>
            <input className="modal-input"
                   required
                   placeholder="Price"
                   type="number"
                   name="price"
                   value={hotdogData.price}
                   onChange={changeInputHandler}
            />
            <input className="modal-input"
                   placeholder="Description"
                   type="text"
                   name="description"
                   value={hotdogData.description}
                   onChange={changeInputHandler}/>
          </div>
          <div className="modal-footer">
            <button type="submit" className="modal-btn" disabled={checkValidate(hotdogData)}>Add</button>
            <button type="button" onClick={() => dispatch(hideModal())} className="modal-btn">Close</button>
          </div>
        </form>
      </div>
    </>
  )
};

export default ModalWindow;