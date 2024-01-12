import { Outlet, NavLink } from "react-router-dom";
export default function Layout() {
  return (
    <>
      <nav className="main-menu">
        <div>
          <NavLink to="/" className="layout-menu">
            Home
          </NavLink>
        </div>
        <div>
          <NavLink to="/blogs" className="layout-menu">
            Blogs
          </NavLink>
        </div>
        <div>
          <NavLink to="/About" className="layout-menu">
            About Us
          </NavLink>
        </div>
        <div>
          <NavLink to="/Terms" className="layout-menu">
            Policy
          </NavLink>
        </div>
        <div>
          <NavLink to="/Contact" className="layout-menu">
            Contact
          </NavLink>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
