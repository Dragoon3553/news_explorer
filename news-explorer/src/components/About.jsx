import profile from "../assets/profile_img.jpeg";

import "../blocks/about.css";

function About() {
  return (
    <section className="about">
      <img src={profile} alt="placeholder" className="about__img" />
      <div className="about__container">
        <h2 className="about__title">About the author</h2>
        <p className="about__comment">
          {/* This block describes the project author. Here, you should indicate
          your name, what you do, and which development technologies you know. */}
          My name is Drew Woods. I am a Frontend Developer that utilizes React,
          JavaScript, and TypeScript. I also have some experiencewith working
          with some backend technologies, such as MongoDB, Express.js and
          Node.js.
          <br />
          <br />
          {/* You can also talk about your experience with TripleTen, what you
          learned there, and how you can help potential customers. */}
          I studied at the TripleTen bootcamp and learned the basics of software
          development. TripleTen has helped me with the foundational knowledge
          of these technologies, but how I approach problems is unique to me. I
          use my 4+ years of technical troubleshooting of Wi-Fi and
          telecommunication systems by breaking down problems into managable
          steps, refining those steps as I continue to improve. If you enjoy
          this project, stay tuned for the next one!
        </p>
      </div>
    </section>
  );
}

export default About;
