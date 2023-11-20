import React, { useContext } from 'react'
import info1 from '../utils/userContext';

const Footer = () => {
  const {user}=useContext(info1);
  return (
    <h3>This Site is developed by {user.name}- {user.email} </h3>
  )
}

export default Footer;