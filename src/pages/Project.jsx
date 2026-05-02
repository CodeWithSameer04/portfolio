import "./Project.css";

import "./Project.css";
import scholarsIQImg from "../projectImages/scholarsIQ.png";
import taskManagerImg from "../projectImages/taskManager.png";
import filePOrganizerImg from "../projectImages/fileOrganizer.png";

function Projects() {
  const projectData = [
    {
      title: "ScholarsIQ",
      subtitle: "Academic Insights Platform",
      description: "AI-powered academic insights from raw data",
      link: "https://github.com/CodeWithSameer04/scholars-iq",
      image: scholarsIQImg,
      color: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)", // Purple/Indigo
    },
    {
      title: "Auto File Organizer",
      subtitle: "System Automation Tool",
      description: "Smart file organization, zero manual effort",
      link: "https://github.com/CodeWithSameer04/auto_file_organizer",
      image: filePOrganizerImg,
      color: "linear-gradient(135deg, #3b82f6 0%, #2dd4bf 100%)", // Blue/Teal
    },
    {
      title: "Task Manager",
      subtitle: "Productivity Suite",
      description: "Effortless task tracking for streamlined productivity",
      link: "https://github.com/CodeWithSameer04/task-manager",
      image: taskManagerImg,
      color: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)", // Orange/Red
    },
  ];

  return (
    <section className="projects-section" id="work">
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-visual-link"
            >
              <div 
                className="project-visual" 
                style={{ background: project.color }}
              >
                {project.image ? (
                  <img src={project.image} alt={project.title} className="project-img-content" />
                ) : (
                  <div className="project-icon-placeholder" style={{ background: project.color, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {project.title[0]}
                  </div>
                )}
              </div>
            </a>

            <div className="project-info">
              <h3>{project.title} — {project.subtitle}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;