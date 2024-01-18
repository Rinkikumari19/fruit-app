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
          <NavLink to="/dashboard" className="layout-menu">
            Dashboard
          </NavLink>
        </div>

        <div>
          <NavLink to="/blogs" className="layout-menu">
            Blogs
          </NavLink>
        </div>
        {/* <div>
          <NavLink to="/about" className="layout-menu">
            About Us
          </NavLink>
        </div> */}
        <div>
          <NavLink to="/terms" className="layout-menu">
            Policy
          </NavLink>
        </div>
        <div>
          <NavLink to="/contact" className="layout-menu">
            Contact
          </NavLink>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
