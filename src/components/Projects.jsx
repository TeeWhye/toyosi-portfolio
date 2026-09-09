import biztrackImage from "../assets/biztrack.png";
import yabaCapitalImage from "../assets/yaba-capital.png";
import movieExplorerImage from "../assets/movie-explorer.png";

const projects = [
  {
    title: "BizTrack",
    category: "Full-Stack Application",
    description:
      "A business management application designed to help businesses track and manage their operations.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
    ],
    image: biztrackImage,
    liveUrl: "https://biz-track-ecru.vercel.app/",
    githubUrl: "https://github.com/TeeWhye/BizTrack",
    featured: true,
  },

  {
    title: "Yaba Capital",
    category: "Financial Web Application",
    description:
      "A loan management platform with borrower applications, staff review workflows, loan products, and application tracking.",
    technologies: [
      "Django",
      "Python",
      "PostgreSQL",
      "JavaScript",
    ],
    image: yabaCapitalImage,
    liveUrl: "https://yaba-capital.vercel.app/",
    githubUrl: "https://github.com/TeeWhye/Yaba-Capital",
    featured: true,
  },

  {
    title: "Movie Explorer",
    category: "React Application",
    description:
      "A movie discovery application powered by the TMDB API, featuring search, pagination, movie details, and favorites.",
    technologies: [
      "React",
      "JavaScript",
      "Vite",
      "TMDB API",
    ],
    image: movieExplorerImage,
    liveUrl: "https://client-iota-gilt-83.vercel.app/",
    githubUrl: "https://github.com/TeeWhye/Movie-Explorer",
    featured: false,
  },
];

function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="section-container">
        <div className="section-heading">
          <p className="section-eyebrow">PROJECTS</p>

          <h2>
            Things I've
            <span> built.</span>
          </h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              className={`project-card ${
                project.featured ? "featured" : ""
              }`}
              key={project.title}
            >
              <div className="project-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={`${project.title} project screenshot`}
                  className="project-image"
                />
              </div>

              <div className="project-content">
                <p className="project-category">
                  {project.category}
                </p>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span
                      className="project-tech"
                      key={technology}
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.liveUrl}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo ↗
                  </a>

                  <a
                    href={project.githubUrl}
                    className="project-link secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;