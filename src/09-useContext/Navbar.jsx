import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark rounded-3">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">useContext</Link>
                <ul className='navbar-nav flex-row '>
               
                    <NavLink to={'/'} className={ ({isActive}) => `nav-link ${isActive ? 'active': '' }`}>
                        Home</NavLink>
                    <NavLink to={'/about'} className={ ({isActive}) => `nav-link ${isActive ? 'active': '' }`}>
                        About</NavLink>
                    <NavLink to={'/login'} className={ ({isActive}) => `nav-link ${isActive ? 'active': '' }`}>
                        Login</NavLink>
                </ul>


            </div>
        </nav>
    )
}

export default Navbar
