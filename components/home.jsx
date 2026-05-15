import HeaderComponent from "./header.jsx";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
        <HeaderComponent />
        <Outlet />
    </div>
  );
}

export default Home;
