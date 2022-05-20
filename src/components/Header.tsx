import "./Header.scss";
import { useState } from "react";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <header>
      <div className="header-main">
        <h1 className="header-logotype">RealFlix</h1>
        <nav className="navBar">
          <button>{navbarOpen ? "Close" : "Open"}</button>
          <ul></ul>
        </nav>
      </div>
      <div className="search-bar">
        <label htmlFor="">Sök</label>
        <input type="text" name="" id="" />
      </div>
    </header>
  );
}
