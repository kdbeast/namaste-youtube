import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  let [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  });
  return (
    <div className="px-5">
      <iframe
        width="900px"
        height="450px"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        src={
          "https://www.youtube.com/embed/1aemq8ECtvM" + searchParams.get("v")
        }
      ></iframe>
    </div>
  );
};

export default WatchPage;
