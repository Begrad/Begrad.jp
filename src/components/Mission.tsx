import React from "react";
import "../css/Mission.css";

const Mission: React.FC<{ text: string }> = ({ text }) => {
  return (
    <section className="mission-section">
      <div className="mission-content">
        <p className="mission-text kaisei-tokumin-regular">{text}</p>
      </div>
    </section>
  );
};

export default Mission;
