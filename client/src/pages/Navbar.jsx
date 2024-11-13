import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
    const [showChildrenMenu, setShowChildrenMenu] = useState(false);

    const toggleChildrenMenu = () => {
        setShowChildrenMenu(prev => !prev);
    };

    return (
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/children'>My children</NavLink>
            <div>
                <span onClick={toggleChildrenMenu} style={{ cursor: 'pointer' }}>
                    My Children
                </span>
                {showChildrenMenu && (
                    <div className="dropdown-menu">
                        <NavLink to='/children/tozi'>Tozi_children</NavLink>
                        <NavLink to='/children/stefano'>Stefano_children</NavLink>
                        <NavLink to='/children/silas'>Silas_children</NavLink>
                        <NavLink to='/children/nikiwe'>Nikiwe_children</NavLink>
                    </div>
                )}
            </div>
            <NavLink to='/grandchildren'>My Grandchildren</NavLink>
            <NavLink to='/greatgrandchildren'>My Greatgrandchildren</NavLink>
            <NavLink to='/greatgreatgrandchildren'>My Greatgreatgrandchildren</NavLink>
        </nav>
    );
};

export default Navbar;