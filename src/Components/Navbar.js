import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Bloggo Del Dern</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/newpoast">New Poast</Link>
      </div>
    </nav>
  );
};

export default Navbar;
