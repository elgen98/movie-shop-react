import "./Header.scss";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <header>
      <h1 className="header-logotype">RealFlix</h1>
      <nav onClick={handleToggle} className="navBar">
        <button className={navbarOpen ? " menuButton" : ""}>
          {navbarOpen ? (
            <MdClose
              style={{ color: "#0D0D0D", width: "30px", height: "30px" }}
            />
          ) : (
            <FiMenu
              style={{ color: "#f27b35", width: "30px", height: "30px" }}
            />
          )}
        </button>
        <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
          <h3>Kategorier</h3>
          <li>
            <a onClick={closeMenu} href="/">
              Scräck
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="/">
              Action
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="/">
              Familj
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="/">
              Thriller
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="/">
              Komedi
            </a>
          </li>
        </ul>
      </nav>
      {/* <div className="search-bar">
        <label htmlFor="">Sök</label>
        <input type="text" name="" id="" />
      </div> */}
    </header>
  );
}
