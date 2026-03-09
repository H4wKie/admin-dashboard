import { sideBarLinkArr } from "./sidebar-link-constr.js";
import { sideBarLoadLinks } from "./sidebar-link-load.js";

function loadSideBar() {
  let sideBarElem = document.getElementsByClassName('side-bar');
  sideBarElem = sideBarElem[0];

  sideBarElem.innerHTML = `
    <div class="side-bar">
      <div class="side-bar-top">
        <div class="side-bar-logo">
          <img src="icons/view-dashboard.svg" alt="">
          <h2>Dashboard</h2>
        </div>
        ${sideBarLoadLinks(sideBarLinkArr.top)}
      </div>
      <div class="side-bar-bottom">${sideBarLoadLinks(sideBarLinkArr.bottom)}</div>
    </div>
  `;
}

export { loadSideBar }