import React from "react";
import "../css/Support.css";

const Support: React.FC = () => {
  return (
    <section id="support" className="support">
      <h2>Begradを支援する</h2>
      <p>
        支援していただいたお金はスポンシー達が活動するにあたって
        <br />
        必要な機材や、Begrad自体の運営に活用させていただきます。
        <br />
        また、Begradを応援してくださった方々と何らかの形で
        <br />
        ご一緒にモノを作ることができたら大変うれしく思います。
      </p>
      <a href="https://doukei.com/Begrad" className="support-link">
        MORE
      </a>
    </section>
  );
};

export default Support;
