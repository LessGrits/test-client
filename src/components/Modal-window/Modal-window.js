import React, {useState} from "react";
import "./Modal-window.css"

const ModalWindow = ({setModalFlag,addHotdogToState}) => {

  const url = "https://we-are-the-future-test-server.herokuapp.com/hotdogs";

  const initialHotdogData = {
    name: "",
    price: "",
    description: "",
    photoUrl: ""
  };

  const [hotdogData, setHotdogData] = useState(initialHotdogData);

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = {...hotdogData};
      const response = await fetch(url, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      });

      addHotdogToState(hotdogData);
      setModalFlag(false)
    } catch (error) {
      console.error(error);
    }
  };

  const checkImgValidate = src => {
    const img = new Image();
    let flag = false;
    img.onload = () => {
      console.log('yes');

    };
    img.onerror = () => console.log('no');
    img.src = src;
  };

  const validate = ({name, price, photoUrl}) => {
    // const validateImgSrc = checkImgValidate(photoUrl);
    checkImgValidate(photoUrl);
    const requireFields = !(name && price);

    return requireFields
  };


  return (
    <>
      <div className="modal-background" onClick={()=>setModalFlag(false)}>
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
                   value={hotdogData.photoUrl}
                   onChange={
                     e => setHotdogData({
                       ...hotdogData,
                       photoUrl: e.target.value
                     })}/>
            <input className="modal-input"
                   required
                   placeholder="Name"
                   type="text"
                   value={hotdogData.name}
                   onChange={
                     e => setHotdogData({
                       ...hotdogData,
                       name: e.target.value
                     })}/>
            <input className="modal-input"
                   required
                   placeholder="Price"
                   type="number"
                   value={hotdogData.price}
                   onChange={
                     e => setHotdogData({
                       ...hotdogData,
                       price: e.target.value
                     })}/>
            <input className="modal-input"
                   placeholder="Description"
                   type="text"
                   value={hotdogData.description}
                   onChange={
                     e => setHotdogData({
                       ...hotdogData,
                       description: e.target.value
                     })}/>
          </div>
          <div className="modal-footer">
            <button type="submit" className="modal-btn" disabled={validate(hotdogData)}>Add</button>
            <button type="button" onClick={()=>setModalFlag(false)} className="modal-btn" >Close</button>
          </div>
        </form>
      </div>
    </>
  )
};

export default ModalWindow;