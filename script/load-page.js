import { loadMainHeader } from "./load-main-header.js";
import { loadMainProjects } from "./load-main-projects.js";
import { loadSideBar } from "./load-sidebar.js";
import { addWindowResizeListener } from "./mobile-friendly.js";
import { pcMode } from "./mobile-friendly.js";

function loadPage() {
  loadSideBar();
  loadMainHeader();
  loadMainProjects();
  addWindowResizeListener();
}

export { loadPage }