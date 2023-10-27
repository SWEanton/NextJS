// components/DropdownMenu.tsx

import React, { useState } from 'react';
import Styles from '../styles/DropdownMenu.module.css';

const DropdownMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Placeholder for the wallet's funds
  const walletFunds = "💲 0123456789123456"; // You can replace this with a dynamic value in the future

  return (
    <div className={`${Styles.dropdown} ${isOpen ? Styles.open : ''}`}>

      <button className={Styles.button} onClick={() => setIsOpen(!isOpen)}>
        {walletFunds}
        <i className={Styles.arrow}></i>  
      </button>
      {isOpen && (
        <div className={Styles.menu}>
          <a href="#">Sign Up</a>
          <a href="https://docs.google.com/document/d/1vgz7_HWbUff5DzpLA2IBFjIqbhfwqKkX2T2gKMtvasI/edit#heading=h.mgcano7a80j1">Litepaper</a>
          <a href="https://reinventdao.io/">Reinventdao.io</a>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
