import React from 'react';
import './Menu.css'

const Menu = () => {
    return (
        <nav>
            <h1>What's New?</h1>
            <button className='menu__btn'>Local News</button>
            <button className='menu__btn'>Technology</button>
            <button className='menu__btn'>Entertainment</button>
            <button className='menu__btn'>Science</button>
            <button className='menu__btn'>Health</button>
        </nav>
    )
}

export default Menu;