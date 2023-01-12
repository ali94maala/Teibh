import ReactDOM from 'react-dom/client'
import { Link } from 'react-router-dom'
import './Header.css'
import logo from '../../assets/images/aaa.svg'
import NavItem, { NavItemDropDown } from '../../Components/NavItems/NavItem'

const Header = () => {

    return (
        <div className="navbar navbar-expand-md  navbar-dark cyborg-navbar">
            <div className="container">

                <a href="/" className="navbar-brand">
                    <img src={logo} alt="" />
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="mainmenu">

                    <ul className="navbar-nav ms-auto">

                        <NavItem>
                            <Link to="/" className="nav-link">Home</Link>
                        </NavItem>

                        <NavItem>
                            <a href="/#" className="nav-link">Careers</a>
                        </NavItem>

                        <NavItemDropDown >
                            <a href="/#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Solutions</a>
                            <ul className="dropdown-menu" >
                                <li><a href="/#" className="dropdown-item">service 1</a></li>
                                <li><a href="/#" className="dropdown-item">service 2</a></li>
                            </ul>
                        </NavItemDropDown>

                        <NavItem>
                            <a href="/#" className="nav-link">Insights</a>
                        </NavItem>

                        <NavItem>
                            <Link to="/Profile" className="nav-link">Contacts</Link>
                        </NavItem>

                    </ul>
                </div>
            </div>
        </div>
    )

}

export default Header;