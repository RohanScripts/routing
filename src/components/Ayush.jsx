import { useParams } from "react-router";

const Ayush = () => {
  const { username } = useParams();
  return (
    <div className="w-full h-[calc(100vh-100px)] flex justify-center items-center flex-col gap-3 text-white">
      <h1 className="text-5xl">This User is {username}</h1>
    </div>
  );
};

export default Ayush;
