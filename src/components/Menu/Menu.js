import React from 'react';
import './Menu.css'

const Menu = (props) => {
    return (
        <div className="heading">
          <h1>What's New?</h1>  
        <nav>
            <button 
              className='menu__btn' 
              name='local' 
              onClick={e => props.changeNewsType(e)}>Local News</button>
            <button 
              className='menu__btn' 
              name='technology' 
              onClick={e => props.changeNewsType(e)}>Technology</button>
            <button 
              className='menu__btn' name='entertainment'
              onClick={e => props.changeNewsType(e)}>Entertainment</button>
            <button 
              className='menu__btn' 
              name='science'
              onClick={e => props.changeNewsType(e)}>Science</button>
            <button 
              className='menu__btn' 
              name='health'
              onClick={e => props.changeNewsType(e)}>Health</button>
        </nav>
        </div>
    )
}

export default Menu;