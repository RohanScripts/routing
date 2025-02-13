import { useState } from "react";
import Modal from "./Modal";

const About = () => {
  const [openModal, setOpenModal] = useState(true);

  return (
    <div className="w-full h-[calc(100vh-100px)] flex justify-center items-center flex-col">
      <h1 className="text-5xl">About Page</h1>
      <br />
      <div className="p-2 bg-orange-400 rounded-sm font-semibold ">
        <button onClick={() => setOpenModal(true)}>click to open modal</button>
      </div>
      <br />
      {openModal ? <Modal setOpenModal={setOpenModal} /> : ""}
    </div>
  );
};

export default About;
