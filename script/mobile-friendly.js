let pcMode = getBrowserWith();

function getBrowserWith() {
  if(window.innerWidth > 1050) {
    return true;
  }else {
    return false;
  }
}

function checkBrowserWidth() {
  if(pcMode !== getBrowserWith()) {
    pcMode = !pcMode;
  }
}

function addWindowResizeListener() {
  window.addEventListener("resize", () => {checkBrowserWidth()});
}

export { addWindowResizeListener, pcMode };