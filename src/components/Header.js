import LOGO_URL from "../utils/constants"

export const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img 
                    className="logo"
                    src={LOGO_URL} alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>Menu</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>

        </div>
    );
};

export default Header;
