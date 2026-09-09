const skillGroups = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Creating responsive, intuitive interfaces with a focus on usability and clean design.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "TypeScript",
    ],
  },
  {
    number: "02",
    title: "Backend Development",
    description:
      "Building server-side applications, APIs, business logic, and reliable application systems.",
    skills: [
      "Python",
      "Django",
      "Flask",
      "REST APIs",
    ],
  },
  {
    number: "03",
    title: "Database & Tools",
    description:
      "Working with databases, version control, deployment platforms, and modern development workflows.",
    skills: [
      "PostgreSQL",
      "SQLite",
      "Prisma",
      "Git",
      "GitHub",
      "Vite",
      "Vercel",
    ],
  },
];

function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="section-container">
        <div className="section-heading">
          <p className="section-eyebrow">SKILLS</p>

          <h2>
            Tools I use to
            <span> build.</span>
          </h2>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-card" key={group.title}>
              <div className="skill-card-header">
                <span className="skill-number">{group.number}</span>

                <span className="skill-indicator"></span>
              </div>

              <h3>{group.title}</h3>

              <p>{group.description}</p>

              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;