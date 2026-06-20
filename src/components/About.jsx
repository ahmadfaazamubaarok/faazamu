import React from 'react';
import { User, Award, CheckCircle, Briefcase } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Award size={24} />, label: 'Experience', value: '2+ Years' },
    { icon: <Briefcase size={24} />, label: 'Projects Done', value: '20+ Projects' },
    { icon: <CheckCircle size={24} />, label: 'Support', value: '24/7 Online' },
  ];

  const skillGroups = [
    {
      category: 'Frontend Development',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'JavaScript (ES6+)', level: 85 },
        { name: 'HTML5 & CSS3', level: 95 },
        { name: 'Redux / Context API', level: 80 },
      ]
    },
    {
      category: 'Backend & Database',
      skills: [
        { name: 'Node.js & Express', level: 75 },
        { name: 'REST APIs', level: 85 },
        { name: 'MongoDB', level: 70 },
        { name: 'SQL / PostgreSQL', level: 65 },
      ]
    },
    {
      category: 'Design & Tools',
      skills: [
        { name: 'Figma (UI/UX)', level: 80 },
        { name: 'Git & GitHub', level: 90 },
        { name: 'Responsive Design', level: 95 },
        { name: 'Chrome DevTools', level: 85 },
      ]
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="section-subtitle">
          My technical journey, key statistics, and the core technologies I use to bring ideas to life.
        </p>

        <div className="about-wrapper">
          {/* Left: Biography & Stats */}
          <div className="about-details">
            <div className="bio-card glass card">
              <div className="bio-header">
                <User className="bio-icon" size={28} />
                <h3>My Story</h3>
              </div>
              <p>
                Hello! I am a passionate software engineer based in Indonesia. I love creating beautiful user interfaces and solving complex coding challenges. My focus is on writing clean, scalable, and maintainable code.
              </p>
              <p style={{ marginTop: '16px' }}>
                With a background in computer science, I have spent the last few years mastering modern web development frameworks, particularly React. I constantly strive to keep up with industry best practices and learn new technologies.
              </p>
            </div>

            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card glass card">
                  <div className="stat-icon-wrapper">
                    {stat.icon}
                  </div>
                  <h4 className="stat-value">{stat.value}</h4>
                  <p className="stat-label">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Skills Category List */}
          <div className="about-skills">
            {skillGroups.map((group, groupIndex) => (
              <div key={groupIndex} className="skills-group-card glass card">
                <h3 className="group-title">{group.category}</h3>
                <div className="skills-list">
                  {group.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar-bg">
                        <div 
                          className="skill-bar-fill" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
