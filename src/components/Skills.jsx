import "./Skills.css";

function Skills() {
  const skillCategories = [
    { 
      category: "Languages", 
      items: "Java, JavaScript, C++, Python" 
    },
    { 
      category: "Frontend", 
      items: "HTML, CSS, React.js" 
    },
    { 
      category: "Backend & Database", 
      items: "Node.js, Express.js, MySQL" 
    },
    { 
      category: "Core Concepts", 
      items: "Data Structures & Algorithms, OOPs, DBMS" 
    },
    { 
      category: "Tools & Technologies", 
      items: "Git, GitHub, REST APIs" 
    }
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        
        <div className="skills-left">
          <h2>Skills</h2>
        </div>

        <div className="skills-right">
          <p className="skills-intro">
            I specialize in building scalable <strong>full-stack applications</strong>, integrating modern frontend frameworks with robust backend architectures. I focus on writing clean, efficient code and transforming complex <strong>Data Structures and Algorithms</strong> into seamless software solutions.
          </p>

          <div className="skills-list-grid">
            {skillCategories.map((group, index) => (
              <div className="skill-item" key={index}>
                <h3>{group.category}</h3>
                <p>{group.items}</p>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Skills;