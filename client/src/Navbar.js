import { NavLink } from "react-router-dom";

const Navbar = () => {
  const styleFunc = ({ isActive, isPending }) => {
    return {
      textDecoration: "none",
      fontWeight: isActive ? "bold" : "",
      color: isActive ? "#00f" : "#000"
    };
  };
  return (
    <div style={{ display: "flex", gap: "4px", marginBottom: "10px" }}>
      <NavLink to="/" style={styleFunc}>First page</NavLink>
      <NavLink to="/second" style={styleFunc}>Second page</NavLink>
    </div>
  );
}

export default Navbar;
