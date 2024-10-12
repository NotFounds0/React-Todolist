import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Cards from "./components/Cards";

function App() {
  const [modal, setModal] = useState(false);
  return (
    <>
      <Header setModal={setModal} />
      <div className="grid grid-cols-4 gap-10 px-10 py-5">
        <Cards />
      </div>
      {modal && <Modal setModal={setModal} />}
    </>
  );
}

export default App;
