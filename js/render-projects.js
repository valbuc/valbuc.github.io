function renderProjects() {
  const projectsContainer = document.querySelector('.portfolio-stack');
  if (!projectsContainer) return;

  // Clear existing content except spacers
  const spacers = projectsContainer.querySelectorAll('.carousel-spacer');
  projectsContainer.innerHTML = '';
  spacers.forEach(spacer => projectsContainer.appendChild(spacer));

  // Add projects
  projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'w-layout-cell carousel-card';
    
    projectCard.innerHTML = `
      <img src="${project.image}" loading="lazy" alt="${project.title}">
      <div class="div-block">
        <h3 class="heading">${project.title}</h3>
        <p class="paragraph-large">${project.description}</p>
        <div class="project-buttons-grid">
          ${project.links.map(link => `
            <a href="${link.url}" target="_blank" class="button-primary full-width w-inline-block">
              <div>${link.title}</div>
              <div class="icons-font">arrow_forward</div>
            </a>
          `).join('')}
        </div>
      </div>
    `;
    
    projectsContainer.insertBefore(projectCard, spacers[1]);
  });
}

// Initialize projects when the DOM is loaded
document.addEventListener('DOMContentLoaded', renderProjects); 