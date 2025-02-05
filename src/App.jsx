import { Route, Routes } from "react-router";
import About from "./components/About";
import Industries from "./components/Industries";
import Service from "./components/Services";
import Work from "./components/Work";
import Users from "./components/Users";
import Navbar from "./components/Navbar";
import Form from "./components/Form";

const App = () => {
  return (
    <div className="bg-black w-full h-full text-[white]">
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/form" element={<Form />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/service" element={<Service />} />
        <Route path="/work" element={<Work />} />
        <Route path="/users/*" element={<Users />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
};

export default App;
