import { NavLink } from "react-router-dom";
import "../styles/Header.css"

function Header() {
  return (
    <>
        <div className="header-container">
            <h1 className="header-Logo">MapsToGPX</h1>
            <div className="header-cta-container">
                <div className="header-cta">
                    <NavLink to="/" className={'header-cta-text'}>Home</NavLink>
                </div>
                <div className="header-cta">
                    <NavLink to="/profile" className={'header-cta-text'}>Profile</NavLink>
                </div>
            </div>
        </div>
    </>
  );
}

export default Header;