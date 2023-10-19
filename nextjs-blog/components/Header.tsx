// components/Header.tsx
import DropdownMenu from './DropdownMenu';

import styles from '../styles/Header.module.css';
const Header: React.FC = () => {
    return (
      <header>
        <img src="/images/reinvent-logo.png" alt="Reinvent Logo" className={styles.logo} />
        <DropdownMenu />
        <nav>
          {/* Navigation Links */}
        </nav>
      </header>
    );
  }
  
  export default Header;
  