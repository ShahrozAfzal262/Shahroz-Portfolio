function About() {
  return (
    <section id="about" className="section">
      <div className="container">

        <div className="section-heading">
          <p>Get To Know Me</p>
          <h2>About Me</h2>
        </div>

        <div className="about-grid">

          <div className="about-card">
            <div className="about-icon">💻</div>
            <h3>Full Stack Development</h3>
            <p>
              I develop full-stack web Developer using the MERN stack,
              including React.js, Node.js, Express.js and MongoDB.
            </p>
          </div>

          <div className="about-card">
            <div className="about-icon">🚀</div>
            <h3>Problem Solving</h3>
            <p>
              I enjoy creating practical solutions and building
              Development that solve real-world problems.
            </p>
          </div>

          <div className="about-profile">
            <img
              className="about-profile-image"
              src="/sh pic.jpeg"
              alt="Shahroz Afzal"
            />

            <div className="about-text">
              <h3>I'm a MERN Stack Developer</h3>

              <p>
                I am a BS Computer Science student and a Full Stack MERN
                Developer interested in building modern web Development.
              </p>

              <p>
                My experience includes working with React.js, Node.js,
                Express.js, MongoDB, REST APIs, authentication and CRUD
                Development.
              </p>

              <p>
                I am currently looking for an internship or junior
                developer opportunity where I can improve my skills,
                contribute to real projects and grow as a software developer.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;