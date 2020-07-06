import React, {useState} from "react";
import './Hotdog-item.css';

const HotdogItem = ({data:hotdogData, setItemValue, deleteHotdogFromState,}) => {

  const [editMode, changeEditMode] = useState(false);

  const {name, description, price, photo_url: photoUrl, hotdog_id:id } = hotdogData;

  const url = "http://localhost:5000/hotdogs";

  const defaultPhoto = "https://vignette.wikia.nocookie.net/edopedia/images/5/5e/%D0%A5%D0%BE%D1%82_%D0%B4%D0%BE%D0%B3.jpg/revision/latest?cb=20170806182648&path-prefix=ru";

  const setEditMode = () => {
    changeEditMode(!editMode)
  };

  const deleteHotdog = async (id) => {
    try{
      const response = await fetch(`${url}/${id}`,{
        method: "DELETE"
      });
       deleteHotdogFromState(id);
    } catch (error) {
      console.error(error);
    }
  };

  const updateHotdog = async (event, id) => {
    event.preventDefault();
    try{
      const body = {...hotdogData};
      const response = await fetch(`${url}/${id}`,{
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      });
      console.log(body);
      setEditMode();
    } catch (error){
      console.error(error)
    }

  };


  const staticData = (
    <div className="hotdog">
      <div className="hotdog__img">
        <img src={photoUrl || defaultPhoto}
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
        <img src={photoUrl || defaultPhoto} alt="hotdogPhoto"/>
      </div>
      <form className="edit-form" onSubmit={ e=> updateHotdog(e, id)}>
        <input type="text" value={photoUrl}
               onChange={ e => setItemValue({...hotdogData, photo_url:e.target.value}, id )} />
        <input type="text" value={name} onChange={ e => setItemValue({...hotdogData, name:e.target.value}, id )}/>
        <input type="text" value={price} onChange={ e => setItemValue({...hotdogData, price:e.target.value}, id )}/>
        <input type="text" value={description} onChange={ e => setItemValue({...hotdogData, description:e.target.value}, id )}/>
        <button type="submit" className="hotdog__btn" >
          Upgrade
        </button>
        <button type="button" className="hotdog__btn"
                onClick={()=>deleteHotdog(id)}>
          Delete
        </button>
      </form>
    </div>
  );

  return editMode ? editableData : staticData;
};

export default HotdogItem