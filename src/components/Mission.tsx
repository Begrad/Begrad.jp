import styles from '../css/Mission.module.css';

const Mission: React.FC<{ text: string }> = ({ text }) => {
  return (
    <section className={styles['mission-section']}>
      <div className={styles['mission-content']}>
        <p className={`${styles['mission-text']} ${styles['kaisei-tokumin-regular']}`}>{text}</p>
      </div>
    </section>
  );
};

export default Mission;
