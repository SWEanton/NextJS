// components/DropdownMenu.tsx

import React, { useState } from 'react';
import Styles from '../styles/DropdownMenu.module.css';

const DropdownMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={Styles.dropdown}>
      <button className={Styles.button} onClick={() => setIsOpen(!isOpen)}>Menu</button>
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
