import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section className='projects projects-bg'>
      <div className='project-container'>
        <h1>PROJECTS</h1>
        <h3>Charity works</h3>
        <div className='project-container-body project-container-body-first'>
          <div className='project-container-text'>
            <p>One of the projects I work with and support is the charity of super-heros.</p>
            <p>We are a group of volunteers that will dress up as a super heros to visit sick children in hospitals.</p>
            <p>My character is based on the Harry Potter, which all the children loves and makes them smile.</p>
          </div>
          <div className='project-container-img'>
            <img className='author-img' src='/project-img.jpg' alt='Dressed as Harry Potter'></img>
          </div>
        </div>
        <div className='project-container-body'>
          <div className='project-container-text'>
            <p>The visits take places on my day offs and over the weekend. We go to the hospitals during visiting hours and ask permission to their parents before we can see them.</p>
            <p>It is important to adhere to the health and safety of the children. All of them is going through treatment to cancer.</p>
            <p>The best part of this project is seeing the smile on their faces.</p>
          </div>
          <div className='project-container-img'>
            <img className='author-img1' src='/project-img1.jpeg' alt='Visiting one of the kinds'></img>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
