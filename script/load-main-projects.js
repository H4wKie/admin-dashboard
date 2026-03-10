import { loadProjectData } from "./project-data-load.js";


function loadMainProjects() {
  let contentBox = document.getElementsByClassName('content-box');
  contentBox = contentBox[0];

  contentBox.innerHTML = `
    <div class="projects">
      <h4 class="projects-header">Your Projects</h4>
      <div class="projects-content">${loadProjectData()}</div>
    </div>

    <div class="announcements">
      <h4 class="announcements-header">Announcements</h4>
      <div class="announcements-content">
        <h5>Site Maintenance</h5>
        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, velit.</h6>
        <hr>
        <h5>Community Share Day</h5>
        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, ad deserunt ducimus minima mollitia earum.</h6>
        <hr>
        <h5>Update Privacy Policy</h5>
        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ex assumenda eos.</h6>
      </div>
    </div>
    
    <div class="trending">
      <h4 class="trending-header">Trending</h4>
      <div class="trending-content">

        <div class="trending-post">
          <img src="images/picture2.jpg" alt="">
          <div class="trending-post-text">
            <h5>@tegan</h5>
            <h6>World Peace Builder</h6>
          </div>
        </div>
        <div class="trending-post">
          <img src="images/picture3.png" alt="">
          <div class="trending-post-text">
            <h5>@kendall</h5>
            <h6>Life Changing App</h6>
          </div>
        </div>
        <div class="trending-post">
          <img src="images/profile-picture.png" alt="">
          <div class="trending-post-text">
            <h5>@morgan</h5>
            <h6>Super Cool Project</h6>
          </div>
        </div>
        <div class="trending-post">
          <img src="images/picture4.jpg" alt="">
          <div class="trending-post-text">
            <h5>@alex</h5>
            <h6>No Trafic Maker</h6>
          </div>
        </div>

      </div>
    </div>
  `;
}

export { loadMainProjects }