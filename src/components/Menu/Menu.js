/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './Menu.scss';
import { MdLocationOn, MdLocalMovies } from 'react-icons/md';
import { GiLightBulb, GiHeartBeats } from 'react-icons/gi';
import { IoIosRocket } from 'react-icons/io';

const Menu = (props) => (
  <div className="heading">
    <h1>What's New?</h1>  
    <nav>
      <button 
        className="menu__btn"
        name="local"
        type="submit"
        onClick={e => props.changeNewsType(e)}>
Local News 
<MdLocationOn />
        </button>
      <button 
        className="menu__btn" 
        name="technology"
        type="submit" 
        onClick={e => props.changeNewsType(e)}>Technology 
        <GiLightBulb />
        </button>
      <button 
        className="menu__btn" 
        name="entertainment"
        type="submit"
        onClick={e => props.changeNewsType(e)}>Entertainment <MdLocalMovies />
      </button>
      <button 
        className="menu__btn" 
        name="science"
        type="submit"
        onClick={e => props.changeNewsType(e)}>Science 
        <IoIosRocket />
      </button>
      <button 
        className="menu__btn" 
        name="health"
        type="submit"
        onClick={e => props.changeNewsType(e)}>Health 
        <GiHeartBeats />
        </button>
    </nav>
  </div>
);

export default Menu;
