const Modal = ({ setOpenModal }) => {
  return (
    <div className="w-96 h-96 bg-white text-black flex items-center justify-center flex-col gap-2 absolute rounded-sm ">
      <div>
        <h1>click here to close modal</h1>
      </div>
      <div>
        <button
          onClick={() => setOpenModal(false)}
          className="p-3 rounded-md bg-red-950 text-white"
        >
          close
        </button>
      </div>
    </div>
  );
};

export default Modal;
