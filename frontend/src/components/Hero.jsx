function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">

        <div className="hero-content">

          <h2 className="small-title">
            Hello, I'm
          </h2>

          <h1>
            Shahroz <span>Afzal</span>
          </h1>

          <h2>
            Full Stack MERN Developer
          </h2>

          <p className="hero-description">
            I build modern, responsive and user-friendly web Development
            using React.js, Node.js, Express.js and MongoDB.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary-btn">
              View Projects
            </a>

            <a href="#contact" className="btn secondary-btn">
              Contact Me
            </a>
          </div>

          <div className="social-links">

            <a
              href="https://github.com/ShahrozAfzal262"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/shahroz-afzal-78891b376/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

          </div>

        </div>

        <div className="hero-image">
          <div className="profile-circle">
            <img
              src="/sh pic.jpeg"
              alt="Shahroz Afzal"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;