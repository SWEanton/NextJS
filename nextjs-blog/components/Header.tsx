// components/Header.tsx
import DropdownMenu from './DropdownMenu';
import styles from '../styles/Header.module.css';

const Header: React.FC = () => {
  return (
      <div>
          <header className={styles.header}>
              <div>
                  <img src="/images/reinvent-logo.png" alt="Reinvent Logo" className={styles.logo} />
                  <div className={styles.tagline}>Rewriting the Future of Work, Collectively</div>
              </div>
              <DropdownMenu />
              <nav>
                  {/* Navigation Links */}
              </nav>
          </header>
      </div>
  );
}

export default Header;
