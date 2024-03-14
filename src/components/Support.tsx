import React from "react";
import "../css/Support.css";

//PropsでtextTitleとtextDescriptionを受け取る
type Props = {
  textTitle: string;
  textDescription: string;
};

const Support: React.FC<Props> = ({ textTitle, textDescription }) => {
  return (
    <section id="support" className="support">
      <h2>{textTitle}</h2>
      <pre>{textDescription}</pre>
      <a href="https://doukei.com/Begrad" className="support-link">
        MORE
      </a>
    </section>
  );
};

export default Support;
