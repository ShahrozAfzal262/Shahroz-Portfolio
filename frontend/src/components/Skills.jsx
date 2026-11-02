function Skills() {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST APIs",
    "JWT Authentication",
    "Git",
    "GitHub",
    "Responsive Design"
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">

        <div className="section-heading">
          <p>My Technical Skills</p>
          <h2>Skills</h2>
        </div>

        <div className="skills-grid">

          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <span>{skill}</span>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;