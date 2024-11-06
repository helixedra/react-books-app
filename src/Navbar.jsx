import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

function Navbar({ menuAction }) {
  return (
    <>
      <nav>
        <div className="burger" onClick={() => menuAction()}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className="logo">
          <Link to="/">AudioBooks</Link>
        </div>
      </nav>
      <div className="mobile_menu">
        <div className="menu_close_button" onClick={() => menuAction()}>
          <FontAwesomeIcon icon={faXmark} />
        </div>
        <ul>
          <li>
            <Link to="/" onClick={() => menuAction()}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/books" onClick={() => menuAction()}>
              Books
            </Link>
          </li>
          <li>
            <Link to="/wishlist" onClick={() => menuAction()}>
              Wishlist
            </Link>
          </li>
          <li>
            <Link to="/info" onClick={() => menuAction()}>
              Info
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
