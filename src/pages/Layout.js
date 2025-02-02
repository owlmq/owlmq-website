import { Outlet, Link } from "react-router-dom";

//import logo from '../logo.png';

const Layout = () => {
  return (
    <>
      <nav>
          <div className="logo">
              <Link to="/">
                  todo:)
              </Link>
          </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;

