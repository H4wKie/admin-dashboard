import { projectDataArr } from "./project-data-constr.js";

function loadProjectData() {
  let projectDataString = '';
  projectDataArr.forEach(elem => {
    projectDataString += `
      <div class="project-data">
        <div class="project-data-text">
          <h4>${elem.title}</h4>
          <h5>${elem.desc}</h5>
        </div>
        <div class="project-data-icons">
          <img src="icons/star.svg" alt="">
          <img src="icons/eye.svg" alt="">
          <img src="icons/share.svg" alt="">
        </div>
      </div>
    `;
  });
  return projectDataString;
}

export { loadProjectData }