import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../assets/2.jpg';
import '../styles/Home.css';
export const Home = () => {
  return (
    <div className='mainPage'
     style={{backgroundImage:`url(${BannerImage})`}}>
      <div className='order'>
        <Link to='/menu'>
        <button>Siparis Ver</button>
        </Link>
      </div>
    </div>
  )
}
