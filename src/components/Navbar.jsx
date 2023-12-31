import React, { useEffect, useState } from 'react';
import  {Link} from 'react-router-dom';
import {styles} from '../styles'; 
import { logo, menu, close } from '../assets';

const Navbar = () => {
  return (
    <nav className= {`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>Navbar</nav>
  )
}

export default Navbar