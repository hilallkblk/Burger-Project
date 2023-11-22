import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import '../styles/Footer.css';

export const Footer = () => {
  return (
    <div className='footer'>
        <div className='socialMedia'>
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faTwitter} />
        </div>
        <p>Tüm hakları saklıdır.|BurgerYiyelim..</p>
    </div>
  )
}
export default Footer;

