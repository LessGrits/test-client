import React, {useState} from "react";
import "./Modal-window.css"

const ModalWindow = ({addHotdogToState}) => {

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
      const body = { ...hotdogData };
      const response = await fetch(url, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      });

      addHotdogToState(hotdogData);
      window.location = 'https://lessgrits.github.io/test-client/';

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="modal fade" id="myModal">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">

          <form onSubmit={e => onSubmitForm(e)}>
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
              <button type="submit" className="btn  modal-btn"  >Add</button>
              <button type="button" className="btn modal-btn" data-dismiss="modal">Close</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
};

export default ModalWindow;