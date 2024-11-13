import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(){

    return(
    <header>
        <Link to="/">Home</Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/children">My_Children</Link>
          <Link to="/grandchildren">My_Grandchildren</Link>
          <Link to="/greatgrandchildren">My_Great-grandchildren</Link>
          <Link to="/greatgreatgrandchildren">My_Great-great-grandchildren</Link>
          <Link to="/greatgreatgreatgrandchildren">My_Great-great-great-grandchildren</Link>
        </nav>
    </header>
    )
}