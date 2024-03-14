const About: React.FC<{ text: string }> = ({ text }) => {
  return (
    <section id="about" className="about">
      <h2>About</h2>
      <pre>{text}</pre>
    </section>
  );
};

export default About;
