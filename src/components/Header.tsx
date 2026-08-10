import Link from 'next/link';

import styles from '../css/Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://pbs.twimg.com/profile_images/1416978828933537795/4Iv9bApx_400x400.jpg"
        alt="Begrad Logo"
        className={styles.logo}
      />
      <nav>
        <ul>
          <li>
            <Link href="/#about">About</Link>
          </li>
          <li>
            <Link href="/#products">Products</Link>
          </li>
          <li>
            <Link href="/#support">Support</Link>
          </li>
          <li>
            <a href=".#members">Members</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
