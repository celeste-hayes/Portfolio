import { Link } from 'react-router-dom';

export default function About() {
    return (
      <div className= 'hero'>
        <img src = 'public/assets/Profile.png' alt='Celeste Hayes' />
        <h1><span>Hi! I’m Celeste Hayes,</span> an aspiring full-stack developer based in North Carolina.</h1>
        <p>
        Currently working as a product manager, I’m focused on expanding my technical expertise and product management skills to create impactful experiences. Outside of work and study, I’m a yoga instructor, a DIY enthusiast, and a home remodeling fanatic. Whether I’m solving problems, traveling to new places, or taking on creative projects, I’m always looking for the next adventure
        </p>
        <div className= 'hero-action'>
          <a
          href='/assets/CHayesResume2024_Bootcamp.pdf'
          download='Celeste_Hayes_Resume.pdf'
          className='fs-5 resume-btn'
          >
          View My Resume
          </a>
          <Link to="/contact" className='fs-5 connect-btn'> Let's Connect </Link>
        </div>
      </div>
    );
  }