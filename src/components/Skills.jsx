const skillGroups = [
  {
    title: "Frontend Development",
    description:
      "Building responsive and interactive user interfaces.",
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
    title: "Backend Development",
    description:
      "Building server-side applications, APIs, and application logic.",
    skills: [
      "Python",
      "Django",
      "Flask",
      "REST APIs",
    ],
  },

  {
    title: "Database & Developer Tools",
    description:
      "Working with databases, version control, and modern development tools.",
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
