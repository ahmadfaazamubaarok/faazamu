import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { Github } from './SocialIcons';
import adminImg from '../assets/admin_dashboard_mockup.png';
import shopImg from '../assets/ecommerce_shop_mockup.png';
import kanbanImg from '../assets/kanban_board_mockup.png';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projectsData = [
    {
      id: 1,
      title: 'Nexa Analytics Dashboard',
      description: 'A premium SaaS analytics dashboard that visualizes sales revenue, user analytics, and performance KPIs in real-time.',
      category: 'frontend',
      tags: ['React', 'CSS Grid', 'ChartJS', 'Lucide Icons'],
      image: adminImg,
      demoUrl: 'https://github.com',
      githubUrl: 'https://github.com',
    },
    {
      id: 2,
      title: 'Terraform E-Commerce Store',
      description: 'A minimalist outdoor gear store featuring product listings, full cart functionality, and fluid checkout animations.',
      category: 'fullstack',
      tags: ['React', 'Context API', 'NodeJS', 'CSS Modules'],
      image: shopImg,
      demoUrl: 'https://github.com',
      githubUrl: 'https://github.com',
    },
    {
      id: 3,
      title: 'Product Launch Board',
      description: 'A kanban-style project board with task management columns, customized color labels, drag tracking, and subtask trees.',
      category: 'frontend',
      tags: ['React', 'CSS Flexbox', 'Local Storage', 'Animations'],
      image: kanbanImg,
      demoUrl: 'https://github.com',
      githubUrl: 'https://github.com',
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">
          My <span className="gradient-text">Projects</span>
        </h2>
        <p className="section-subtitle">
          Here is a selection of my latest projects, demonstrating my skills in frontend architecture, user experience, and visual design.
        </p>

        {/* Filter Controls */}
        <div className="filter-controls">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Projects
          </button>
          <button 
            className={`filter-btn ${filter === 'frontend' ? 'active' : ''}`}
            onClick={() => setFilter('frontend')}
          >
            Frontend
          </button>
          <button 
            className={`filter-btn ${filter === 'fullstack' ? 'active' : ''}`}
            onClick={() => setFilter('fullstack')}
          >
            Full Stack
          </button>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card glass card">
              <div className="project-image-wrapper">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-image"
                  loading="lazy"
                />
                <div className="project-overlay">
                  <div className="overlay-links">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="View Source">
                      <Github size={20} />
                    </a>
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" aria-label="View Demo">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-info">
                <span className="project-category-badge">
                  {project.category === 'frontend' ? 'Frontend' : 'Full Stack'}
                </span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
