import HomeNavbar from "./HomeNavbar";
import MobileNavbar from "./MobileNavbar";
import { useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();
  const { pathname } = location;
  return (
    <>
      <HomeNavbar pathname={pathname} />
      <MobileNavbar pathname={pathname} />
    </>
  );
}
export default NavBar;
