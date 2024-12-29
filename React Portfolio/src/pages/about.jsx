export default function About() {
    return (
      <div className= 'hero'>
        <img src = '/src/assets/profile.png' alt='Celeste Hayes' />
        <h1><span>Hi! I’m Celeste Hayes,</span> an aspiring full-stack developer based in North Carolina.</h1>
        <p>
        Currently working as a product manager, I’m focused on expanding my technical expertise and product management skills to create impactful experiences. Outside of work and study, I’m a yoga instructor, a DIY enthusiast, and a home remodeling fanatic. Whether I’m solving problems, traveling to new places, or taking on creative projects, I’m always looking for the next adventure
        </p>
        <div className= 'hero-action'>
          <div className='connect-btn'>Let's Connect</div>
          <div className='resume-btn'>View My Resume</div>
        </div>
      </div>
    );
  }