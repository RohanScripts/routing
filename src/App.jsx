import { NavLink, Route, Routes } from "react-router";
import About from "./components/About";
import Industries from "./components/Industries";
import Service from "./components/Services";
import Work from "./components/Work";

const App = () => {
  return (
    <div className="bg-black w-full h-screen text-[white]">
      <div className="w-full h-[100px] border-[2px] border-[white] flex justify-center items-center">
        <div className="w-[70%] h-full ">
          <div className="flex justify-between items-center w-full h-full">
            <button className="px-[10px] py-[5px] border-[1px] border-[white] hover:bg-[white] hover:text-[black] duration-300">
              <NavLink to="/">About Us</NavLink>
            </button>
            <button className="px-[10px] py-[5px] border-[1px] border-[white] hover:bg-[white] hover:text-[black] duration-300">
              <NavLink to="/industries">Industries</NavLink>
            </button>
            <button className="px-[10px] py-[5px] border-[1px] border-[white] hover:bg-[white] hover:text-[black] duration-300">
              <NavLink to="/service">Services</NavLink>
            </button>
            <button className="px-[10px] py-[5px] border-[1px] border-[white] hover:bg-[white] hover:text-[black] duration-300">
              <NavLink to="/work">Work</NavLink>
            </button>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/service" element={<Service />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </div>
  );
};

export default App;
