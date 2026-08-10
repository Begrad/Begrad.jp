'use client';

import atSymbol from '../assets/at.png';
import styles from '../css/Footer.module.css';

type Props = {
  postcode: string;
  address: string;
  tel: string;
  businessHours: string;
  email: string;
};

const Footer: React.FC<Props> = ({ postcode, address, tel, businessHours, email }) => {
  const separatedEmail = email.split('@');

  return (
    <footer className={styles.footer}>
      <div className={styles['footer-content']}>
        <p>{postcode}</p>
        <p>{address}</p>
        <br />
        <p>{tel}</p>
        <p>{businessHours}</p>
        <br />
        <p>
          {separatedEmail[0]}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={atSymbol.src}
            alt="at"
            style={{ width: '23px', margin: '-5px', verticalAlign: 'middle' }}
          />
          {separatedEmail[1]}
        </p>
        <button onClick={() => (window.location.href = 'path/to/contact/form')}>CONTACT US</button>
      </div>
    </footer>
  );
};

export default Footer;
