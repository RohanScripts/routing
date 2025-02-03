import { NavLink } from "react-router";

const Navbar = () => {
  return (
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
          <button className="px-[10px] py-[5px] border-[1px] border-[white] hover:bg-[white] hover:text-[black] duration-300">
            <NavLink to="/users/rohan">User 1</NavLink>
          </button>
          <button className="px-[10px] py-[5px] border-[1px] border-[white] hover:bg-[white] hover:text-[black] duration-300">
            <NavLink to="/users/dipen">User 2</NavLink>
          </button>
          <button className="px-[10px] py-[5px] border-[1px] border-[white] hover:bg-[white] hover:text-[black] duration-300">
            <NavLink to="/users/ayush">User 3</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
