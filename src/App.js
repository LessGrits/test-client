import React, {useState} from 'react';
import './App.css';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  const [modalFlag, setModalFlag] = useState(false);



  return (
    <div className="App">
      <Header modalFlag={modalFlag} setModalFlag={setModalFlag} />
      <Main modalFlag={modalFlag} setModalFlag={setModalFlag}/>
      <Footer />
    </div>
  );
}

export default App;
