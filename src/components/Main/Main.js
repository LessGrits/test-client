import React, {useEffect, useState} from "react";
import './Main.css';
import HotdogItem from "../Hotdog-item/Hotdog-item";
import ModalWindow from "../Modal-window/Modal-window";
import {useDispatch, useSelector} from "react-redux";
import {fetchHotdogs} from "../../redux/actions";


const Main = () => {
  const dispatch = useDispatch();
  const hotdogsList = useSelector(state => state.hotdogs.hotdogs);
  const loading = useSelector(state => state.app.loading);
  const modal = useSelector(state => state.app.modalWindow);

  const [imageValidate, setImageValidate] = useState(false);

  useEffect(() => {
    dispatch(fetchHotdogs())
  }, []);

  const checkImgValidate = src => {
    // console.log(src);
    const img = new Image();
    img.onload = () => setImageValidate(true);
    img.onerror = () => setImageValidate(false);
    img.src = src;

    return imageValidate
  };

  const checkValidate = ({name, price, photo_url}) => {
    console.log(name, price, photo_url);
    console.log(checkImgValidate(photo_url));
    const validateImgSrc = checkImgValidate(photo_url);
    const requireFields = !(validateImgSrc && name && price);
    return requireFields
  };

  return (
    <main>
      {loading ? <div className="loader"></div> :
        <>
          <h1>All hot-dogs</h1>
          <section className="main-content">
            {hotdogsList.map((data) => (
              <HotdogItem
                data={data}
                checkValidate={checkValidate}
                key={data.hotdog_id}/>))}
            {modal && <ModalWindow checkValidate={checkValidate} />}
          </section>
        </>}
    </main>
  )
};

export default Main