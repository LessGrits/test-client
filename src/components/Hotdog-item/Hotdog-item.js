import React, {useState} from "react";
import './Hotdog-item.css';
import {useDispatch} from "react-redux";
import {deleteHotdog, updateHotdog} from "../../redux/actions";

const HotdogItem = ({data: hotdogData, checkValidate}) => {
  const [editMode, changeEditMode] = useState(false);
  const dispatch = useDispatch();
  const [hotdog, setHotdog] = useState(hotdogData);
  const {name, description, price, photo_url, hotdog_id} = hotdog;

  const setEditMode = () => {
    changeEditMode(!editMode)
  };

  const changeInputHandler = event => {
    event.persist();
    setHotdog(prev => ({
      ...prev,
      [event.target.name]: event.target.value
    }));
  };

  const sendUpdateData = async (hotdog, id, event) => {
    event.preventDefault();
    dispatch(updateHotdog(hotdog, id));
    setEditMode();
  };

  const staticData = (
    <div className="hotdog">
      <div className="hotdog__img">
        <img src={photo_url}
             alt="hotdog"/>
      </div>
      <h3 className="hotdog__name">
        {name}
      </h3>
      <p className="hotdog__price">{price}$</p>
      <p className="hotdog__description">
        {description}
      </p>
      <button className="hotdog__btn" onClick={setEditMode}>
        Edit
      </button>
    </div>
  );

  const editableData = (
    <div className="hotdog">
      <div className="hotdog__img">
        <img src={photo_url} alt="hotdogPhoto"/>
      </div>
      <form className="edit-form" onSubmit={e => sendUpdateData(hotdog, hotdog_id, e)}>
        <input type="text" name="photo_url" value={photo_url}
               onChange={changeInputHandler}/>
        <input type="text" name="name" required value={name}
               onChange={changeInputHandler}/>
        <input type="number" name="price" required value={price}
               onChange={changeInputHandler}/>
        <input type="text" name="description" value={description}
               onChange={changeInputHandler}/>
        <button type="submit"  className="hotdog__btn">
          Upgrade
        </button>
        <button type="button" className="hotdog__btn"
                onClick={() => dispatch(deleteHotdog(hotdog_id))}>
          Delete
        </button>
      </form>
    </div>
  );

  return editMode ? editableData : staticData;
};

export default HotdogItem