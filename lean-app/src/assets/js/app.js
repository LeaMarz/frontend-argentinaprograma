// Carga los datos del archivo JSON
fetch('assets/json/portfolio.json')
  .then(response => response.json())
  .then(data => {
    // Obtiene la lista de experiencia y la llena con los datos del archivo JSON
    const bioeList = document.getElementById('bio-list');
    data.experience.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = `<h3>${item.apellido}</h3>
                      <p>${item.nombre}</p>
                      <p>${item.acercaDe}</p>
                      <p>${item.urlLogo}</p>`;
      experienceList.appendChild(li);
    });
    // Obtiene la lista de experiencia y la llena con los datos del archivo JSON
    const experienceList = document.getElementById('experience-list');
    data.experience.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = `<h3>${item.institucion}</h3>
                      <p>${item.cargo}</p>
                      <p>${item.fechaDesde}</p>
                      <p>${item.fechaHasta}</p>
                      <p>${item.urlLogo}</p>`;
      experienceList.appendChild(li);
    });

    // Obtiene la lista de proyectos y la llena con los datos del archivo JSON
    const projectsList = document.getElementById('projects-list');
    data.projects.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = `<h3>${item.title}</h3>
                      <p>${item.description}</p>`;
      projectsList.appendChild(li);
    });
  });
