import React, {useEffect, useState} from "react";
import './Main.css';
import HotdogItem from "../Hotdog-item/Hotdog-item";
import ModalWindow from "../Modal-window/Modal-window";

const Main = () => {

  const [hotdogsList, setHotdogsList] = useState([]);

  const getHotdogsList = async () => {
    try {
      const response = await fetch("https://we-are-the-future-test-server.herokuapp.com/hotdogs");
      const jsonData = await response.json();
      setHotdogsList(jsonData)
    } catch (e) {
      console.error(e);
    }
  };

  const deleteHotdogFromState = (id) => {
    setHotdogsList(hotdogsList.filter(hotdog => hotdog.hotdog_id !== id));
    console.log(`Deleted hotdog by id ${ id }`)
  };

  const addHotdogToState = (item) => {
    setHotdogsList([...hotdogsList, item]);
    console.log(`Added hotdog ${JSON.stringify(item)}`)
  };

  const setItemValue = (oldItem, itemWithNewValue) => {
    const index = hotdogsList.indexOf(oldItem);
    const itemsBefore = hotdogsList.slice(0, index);
    const itemsAfter = hotdogsList.slice(index + 1);
    const newList = [...itemsBefore, itemWithNewValue, ...itemsAfter];
    setHotdogsList([...newList]);
    console.log(`Setted new value ${JSON.stringify(itemWithNewValue)}`)
  };

  useEffect(() => {
    getHotdogsList();
  }, []);


  return (
    <main>
      <h1>All hot-dogs</h1>
      <section className="main-content">
        {hotdogsList.map((data) => (
          <HotdogItem data={data}
                      key={data.hotdog_id}
                      deleteHotdogFromState={deleteHotdogFromState}
                      setHotdogsList={setHotdogsList}
                      setItemValue={setItemValue}
          />))}
        <ModalWindow addHotdogToState={addHotdogToState}/>
      </section>
    </main>
  )
};

export default Main