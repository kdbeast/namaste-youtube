import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandle = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-2xl bg-gray-100">
      <div className="flex col-span-1 items-center">
        <img
          onClick={toggleMenuHandle}
          className="h-8 cursor-pointer"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE-V8GvxPOmxUBhPREiA3sjv5HtQAJRowI6A&s"
          alt="menu"
        />
        <img
          className="h-8 mx-2"
          src="https://1000logos.net/wp-content/uploads/2017/05/Youtube-Logo.png"
          alt="youtube-logo"
        />
      </div>
      <div className="col-span-10">
        <input
          type="text"
          className="w-1/2 border border-gray-400 p-2 rounded-l-2xl"
        />
        <button className="rounded-r-2xl border border-gray-400 px-5 py-2 bg-gray-200">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtGeEoJ8NZsm_yy3ogNbDX8fmXVk4t8bSLjA&s"
          alt=""
        />
      </div>
    </div>
  );
};

export default Head;
