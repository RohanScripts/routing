import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="w-full h-[100px] border-[2px] border-[white] flex justify-center items-center">
      <div className="w-[70%] h-full ">
        <div className="flex justify-between items-center w-full h-full">
          <NavLink to="/">
            <button className="px-[10px] py-[5px] border-[1px] border-[white] hover:bg-[white] hover:text-[black] duration-300">
              About Us
            </button>
          </NavLink>

          <NavLink to="/form">
            <button className="px-[10px] py-[5px] border-[1px] border-[white] hover:bg-[white] hover:text-[black] duration-300">
              Form
            </button>
          </NavLink>

          <NavLink to="/industries">
            <button className="px-[10px] py-[5px] border-[1px] border-[white] hover:bg-[white] hover:text-[black] duration-300">
              Industries
            </button>
          </NavLink>

          <NavLink to="/service">
            <button className="px-[10px] py-[5px] border-[1px] border-[white] hover:bg-[white] hover:text-[black] duration-300">
              Services
            </button>
          </NavLink>

          <NavLink to="/work">
            <button className="px-[10px] py-[5px] border-[1px] border-[white] hover:bg-[white] hover:text-[black] duration-300">
              Work
            </button>
          </NavLink>

          <NavLink to="/users">
            <button className="px-[10px] py-[5px] border-[1px] border-[white] hover:bg-[white] hover:text-[black] duration-300">
              Users
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
