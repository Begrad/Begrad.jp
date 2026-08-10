import styles from '../css/Support.module.css';

type Props = {
  textTitle: string;
  textDescription: string;
};

// PropsでtextTitleとtextDescriptionを受け取る
const Support: React.FC<Props> = ({ textTitle, textDescription }) => {
  return (
    <section id="support" className={styles.support}>
      <h2>{textTitle}</h2>
      <pre>{textDescription}</pre>
      <a href="https://doukei.com/Begrad" className={styles['support-link']}>
        MORE
      </a>
    </section>
  );
};

export default Support;
