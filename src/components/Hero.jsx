import { ArrowRight } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      {/* Decorative Blobs for premium aesthetic */}
      <div className="blob blob-primary"></div>
      <div className="blob blob-secondary"></div>

      <div className="container hero-wrapper">
        <div className="hero-content">
          <div className="badge-welcome animate-fade-in">
            <span>Available for Freelance & Full-time</span>
          </div>
          
          <h1 className="hero-title animate-slide-up">
            Hi, I am <span className="gradient-text">Faazamu</span>
          </h1>
          
          <h2 className="hero-subtitle animate-slide-up-delay-1">
            React Developer & UI/UX Designer
          </h2>
          
          <p className="hero-description animate-slide-up-delay-2">
            I specialize in building visually stunning, highly interactive, and performant web applications. Passionate about clean code, modern user experiences, and micro-interactions.
          </p>
          
          <div className="hero-actions animate-slide-up-delay-3">
            <a href="#projects" className="btn btn-primary">
              View Work <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Let's Talk
            </a>
          </div>

          <div className="hero-socials animate-fade-in-delay">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={22} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={22} />
            </a>
          </div>
        </div>

        {/* Visual element on the right (Floating Premium Cards/Grid) */}
        <div className="hero-visual animate-float">
          <div className="visual-card main-card glass">
            <div className="card-header">
              <div className="dot red"></div>
              <div className="dot yellow"></div>
              <div className="dot green"></div>
            </div>
            <div className="card-body">
              <pre>
                <code>
{`const developer = {
  name: "Faazamu",
  role: "React Specialist",
  skills: ["React", "JS", "CSS"],
  passion: "Beautiful UI/UX"
};`}
                </code>
              </pre>
            </div>
          </div>
          
          {/* Floating Badges */}
          <div className="floating-badge badge-1 glass">
            <span className="badge-icon">⚛️</span>
            <span>React</span>
          </div>
          <div className="floating-badge badge-2 glass">
            <span className="badge-icon">🎨</span>
            <span>CSS3</span>
          </div>
          <div className="floating-badge badge-3 glass">
            <span className="badge-icon">⚡</span>
            <span>Vite</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
