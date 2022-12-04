import {
    BrowserRouter as Router,
    Routes, Route, NavLink
} from "react-router-dom"
import styles from "./Navbar.module.css"

const Navbar = () => {
    const activeClassName = styles.active
    
    return (
        <div className={styles.navbar}>
            <NavLink id={styles.name} to={`/`}>Lizzy Zhang</NavLink>
            <div className={styles.links}>
                <NavLink 
                    to={`/`}
                    className={({ isActive }) =>
                        isActive ? activeClassName : undefined
                    }
                >
                    Projects
                </NavLink>
                <NavLink 
                    to={`about`}
                    className={({ isActive }) =>
                        isActive ? activeClassName : undefined
                    }
                >
                    About
                </NavLink>   
            </div>
        </div>     
    )
}

export default Navbar