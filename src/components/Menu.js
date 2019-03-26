import { Link } from 'react-router'
import {FaCalendarPlus, FaHome, FaListAlt,FaAward} from 'react-icons/fa' // using react-icons


export const Menu = () => (
    <nav className="menu">
        <Link to="/" activeClassName="selected">
            <FaHome />
        </Link>
        <Link to="/add-todo" activeClassName="selected">
        <FaCalendarPlus />
        </Link>
        <Link to="/list-todo" activeClassName="selected">
        <FaListAlt />
        </Link>
        <Link to="/members" activeClassName="selected">
        <FaAward />
        </Link>
    </nav>
)