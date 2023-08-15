import { Outlet, Link } from "react-router-dom";
export default function Layout() {
    return (
        <>
            <nav className="main-menu">
                <div>
                    <Link to="/" className='active layout-menu' >Home</Link>
                </div>
                <div>
                    <Link to="/blogs" className='active layout-menu'  >Blogs</Link>
                </div>
                <div>
                    <Link to="/About" className="active layout-menu">About Us</Link>
                </div>
                <div>
                    <Link to="/Terms" className="active layout-menu">Policy</Link>
                </div>
                <div>
                    <Link to="/Contact" className="layout-menu">Contact</Link>
                </div>
            </nav>
            <Outlet />
        </>
    )
}