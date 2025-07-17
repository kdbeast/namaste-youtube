import { useEffect } from "react";
import { YOUTUBE_SUBSCRIPTION_API } from "../utils/constants";

const Subscription = () => {
  const getSubscription = async () => {
    const data = await fetch(YOUTUBE_SUBSCRIPTION_API);
    const json = await data.json();
    console.log(json);
  };

  useEffect(() => {
    getSubscription();
  }, []);

  return (
    <div>
      <h1>Subscription</h1>
    </div>
  );
};

export default Subscription;
