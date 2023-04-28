import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import "./Header.css";

// Component for displaying a Header
function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
         
            <Link to="/">
            <img src={Logo} alt="Logo"/>
            </Link>
      
        </div>
      </nav>
    </header>
  );
}

export default Header;
