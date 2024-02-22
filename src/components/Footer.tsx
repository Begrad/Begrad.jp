import React from "react";
import "../css/Footer.css"; // スタイルシートのインポート
import atSymbol from "../assets/at.png";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>〒150-0043</p>
        <p>東京都渋谷区道玄坂1丁目10番8号渋谷道玄坂東急ビル2F−C</p>
        <br />
        <p>TEL: 070-9194-9310</p>
        <p>(10:00 ~ 22:00)</p>
        <br />
        <p>
          contact
          <img
            src={atSymbol}
            alt="at"
            style={{ width: "23px", margin: "-5px", verticalAlign: "middle" }}
          />
          begrad.jp
        </p>
        <button onClick={() => (window.location.href = "path/to/contact/form")}>
          CONTACT US
        </button>
      </div>
    </footer>
  );
};

export default Footer;
