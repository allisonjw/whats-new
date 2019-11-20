import React from 'react';
import './Menu.scss'
import { MdLocationOn } from "react-icons/md";
import { GiLightBulb } from "react-icons/gi";
import { MdLocalMovies} from "react-icons/md";
import { IoIosRocket } from "react-icons/io";
import { GiHeartBeats} from "react-icons/gi";

const Menu = props => {
    return (
        <div className="heading">
          <h1>What's New?</h1>  
        <nav>
            <button 
              className='menu__btn' 
              name='local' 
              onClick={e => props.changeNewsType(e)}>Local News <MdLocationOn /></button>
            <button 
              className='menu__btn' 
              name='technology' 
              onClick={e => props.changeNewsType(e)}>Technology <GiLightBulb /></button>
            <button 
              className='menu__btn' name='entertainment'
              onClick={e => props.changeNewsType(e)}>Entertainment <MdLocalMovies /></button>
            <button 
              className='menu__btn' 
              name='science'
              onClick={e => props.changeNewsType(e)}>Science <IoIosRocket /></button>
            <button 
              className='menu__btn' 
              name='health'
              onClick={e => props.changeNewsType(e)}>Health <GiHeartBeats /></button>
        </nav>
        </div>
    )
}

export default Menu;