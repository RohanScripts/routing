import { NavLink, Route, Routes } from "react-router";
import Rohan from "./Rohan";
import Dipen from "./Dipen";
import Ayush from "./Ayush";
const Users = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-1/2 h-[calc(100vh-100px)] flex justify-center items-center flex-col gap-3">
        <h1 className="text-5xl">User Page</h1>
        <div className="w-full h-[100px] border-[2px] border-[white] flex justify-center items-center">
          <div className="w-[70%] h-full ">
            <div className="flex justify-between items-center w-full h-full">
              <NavLink to="/users/rohan">
                <button className="px-[10px] py-[5px] border-[1px] border-[white] hover:bg-[white] hover:text-[black] duration-300">
                  User 1
                </button>
              </NavLink>

              <NavLink to="/users/dipen">
                <button className="px-[10px] py-[5px] border-[1px] border-[white] hover:bg-[white] hover:text-[black] duration-300">
                  User 2
                </button>
              </NavLink>

              <NavLink to="/users/ayush">
                <button className="px-[10px] py-[5px] border-[1px] border-[white] hover:bg-[white] hover:text-[black] duration-300">
                  User 3
                </button>
              </NavLink>
            </div>
          </div>
        </div>
        <Routes>
          <Route path=":username" element={<Rohan />} />
          <Route path=":username" element={<Dipen />} />
          <Route path=":username" element={<Ayush />} />
        </Routes>
      </div>
    </div>
  );
};

export default Users;
