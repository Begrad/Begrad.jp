import React from "react";
import "../css/Footer.css";
import atSymbol from "../assets/at.png";

type Props = {
  postcode: string;
  address: string;
  tel: string;
  businessHours: string;
  email: string;
};

const Footer: React.FC<Props> = ({
  postcode,
  address,
  tel,
  businessHours,
  email,
}) => {
  const separatedEmail = email.split("@");

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>{postcode}</p>
        <p>{address}</p>
        <br />
        <p>{tel}</p>
        <p>{businessHours}</p>
        <br />
        <p>
          {separatedEmail[0]}
          <img
            src={atSymbol}
            alt="at"
            style={{ width: "23px", margin: "-5px", verticalAlign: "middle" }}
          />
          {separatedEmail[1]}
        </p>
        <button onClick={() => (window.location.href = "path/to/contact/form")}>
          CONTACT US
        </button>
      </div>
    </footer>
  );
};

export default Footer;
