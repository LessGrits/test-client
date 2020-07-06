import React, {useEffect, useState} from "react";
import './Main.css';
import HotdogItem from "../Hotdog-item/Hotdog-item";
import ModalWindow from "../Modal-window/Modal-window";

const Main = () => {

  const [hotdogsList, setHotdogsList] = useState([]);

  const getHotdogsList = async () => {
    try {
      const response = await fetch("http://localhost:5000/hotdogs");
      const jsonData = await response.json();
      setHotdogsList(jsonData)
    } catch (e) {
      console.error(e);
    }
  };

  const deleteHotdogFromState = (id) => {
    setHotdogsList(hotdogsList.filter( hotdog => hotdog.hotdog_id !== id ));
  };

  const addHotdogToState = (item) => {
    setHotdogsList([...hotdogsList, item]);

  };

  const setItemValue = (itemWithNewValue, id) => {
    const newList = hotdogsList.filter( hotdog => hotdog.hotdog_id !== id );
    setHotdogsList([...newList, itemWithNewValue])
  };

  useEffect(() => {
    getHotdogsList();
  }, []);


  return (
    <main>
      <h1>All hot-dogs</h1>
      <section className="main-content">
        {hotdogsList.map((data)=>(
          <HotdogItem data = {data}
                      key={data.hotdog_id}
                      deleteHotdogFromState = {deleteHotdogFromState}
                      setHotdogsList = {setHotdogsList}
                      setItemValue = {setItemValue}
        />))}
        <ModalWindow addHotdogToState = {addHotdogToState}/>
      </section>
    </main>
  )
};

export default Main