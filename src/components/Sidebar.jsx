import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-48">
      <ul className="text-xl font-medium space-y-5">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/subscription">
          <li>Subscription</li>
        </Link>
        <li>History</li>
        <li>Playlists</li>
        <li>Your videos</li>
        <li>Your courses</li>
        <li>Watch Later</li>
        <li>Liked videos</li>
      </ul>
    </div>
  );
};

export default Sidebar;
