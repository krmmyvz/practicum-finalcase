import Logo from "../../assets/logo.png";
import "./Header.css";

function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          <img src={Logo} alt="Logo" />
          <span>Encyclopedia</span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
