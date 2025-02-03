import { Route, Routes } from "react-router";
import About from "./components/About";
import Industries from "./components/Industries";
import Service from "./components/Services";
import Work from "./components/Work";
import Users from "./components/Users";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="bg-black w-full h-screen text-[white]">
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/service" element={<Service />} />
        <Route path="/work" element={<Work />} />
        <Route path="/users/*" element={<Users />} />
      </Routes>
    </div>
  );
};

export default App;
