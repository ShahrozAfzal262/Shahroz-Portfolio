const projects = [
  {
    title: "MERN CRUD Application",
    description:
      "A full-stack CRUD application with React.js frontend, Node.js and Express.js backend, MongoDB database and authentication.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB"
    ],
    github: "https://github.com/ShahrozAfzal262",
    live: "#"
  },

  {
    title: "E-Commerce Web Application",
    description:
      "A modern e-commerce application focused on product management, user experience and full-stack functionality.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB"
    ],
    github: "https://github.com/ShahrozAfzal262",
    live: "#"
  },

  {
    title: "AI Career Agent",
    description:
      "An AI-powered career platform designed to help users with resume analysis, career recommendations, job matching and skill-gap analysis.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "AI"
    ],
    github: "https://github.com/ShahrozAfzal262",
    live: "#"
  },

  {
    title: "Blog Application",
    description:
      "A full-stack blog application for creating, publishing and managing posts with a clean, responsive interface.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB"
    ],
    github: "https://github.com/ShahrozAfzal262",
    live: "#"
  },

  {
    title: "Job-Career Platform",
    description:
      "A career platform that helps job seekers explore opportunities and manage their job search in one place.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB"
    ],
    github: "https://github.com/ShahrozAfzal262",
    live: "#"
  },

  {
    title: "University Problem Portal",
    description:
      "A university portal where students can report problems, track their status and connect with the relevant campus team.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB"
    ],
    github: "https://github.com/ShahrozAfzal262",
    live: "#"
  }
];

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">

        <div className="section-heading">
          <p>My Recent Work</p>
          <h2>Projects</h2>
        </div>

        <div className="projects-grid">

          {projects.map((project, index) => (
            <div className="project-card" key={index}>

              <div className="project-number">
                0{index + 1}
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="technology-list">
                {project.technologies.map((technology, techIndex) => (
                  <span key={techIndex}>
                    {technology}
                  </span>
                ))}
              </div>

              <div className="project-buttons">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-btn"
                >
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="project-btn live-btn"
                >
                  Live Demo
                </a>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;