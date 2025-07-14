import { LIST } from "../utils/constants";

const ButtonList = () => {
  return (
    <div>
      {LIST.map((item) => {
        return (
          <button key={item} className="px-5 py-2 m-2 bg-gray-200 rounded-lg">
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default ButtonList;
