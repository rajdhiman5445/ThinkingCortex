import HeaderComponent from "./header";
import { Outlet } from "react-router";

const Home = () => {
  return (
    <div>
        <HeaderComponent />
        <Outlet />
    </div>
  );
}

export default Home;