import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <img src="/header.jpg" className="header-img" alt="Header" />
      <img src="/logo.png" className="logo" alt="Logo" />

      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/register">Registration</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>
    </>
  );
}

export default Navbar;
