function sideBarLoadLinks(linkArr) {
  let returnString = '';
  linkArr.forEach(element => {
    returnString += `
      <div class="side-bar-link">
        <img src="${element.image}" alt="" class="side-bar-link-svg">
        <h3>${element.title}</h3>
      </div>
    `;
  });
  return returnString;
}

export { sideBarLoadLinks }