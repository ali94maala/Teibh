import './NavItem.css'




const NavItem = (props) => {
    return (
        <li>
            {props.children}
        </li>
    )
}

const NavItemDropDown = (props) => {
    return (
        <li>
            {props.children}
        </li>
    )
}

export default NavItem
export { NavItemDropDown }