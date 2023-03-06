import styles from './Header.module.css';

import logoSvg from '../assets/logo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logoSvg} alt="Logo do produto" />
      <h1 className={styles.toText}>to</h1>
      <h1 className={styles.doText}>do</h1>
    </header>
  );
}