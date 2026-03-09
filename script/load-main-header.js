function loadMainHeader() {
  let mainHeaderElem = document.getElementsByClassName('main-header');
  mainHeaderElem = mainHeaderElem[0];

  mainHeaderElem.innerHTML = `
    <div class="search-personal">
      <div class="search">
        <img src="icons/search.svg" alt="">
        <input type="search" id="search">
      </div>
      <div class="personal">
        <img src="icons/bell.svg" alt="" class="bell">
        <img src="images/profile-picture.png" alt="" class="profile-picture">
        <h4>Morgan Oakley</h4>
      </div>
    </div>
    <div class="welcome-actions">
      <div class="welcome">
        <img src="images/profile-picture.png" alt="" class="welcome-picture">
        <div class="welcome-text">
          <h5>Hi there,</h5>
          <h3>Morgan Oakley (@morgan)</h3>
        </div>
      </div>
      <div class="actions">
        <button>New</button>
        <button>Upload</button>
        <button>Share</button>
      </div>
    </div>
  `;
}

export { loadMainHeader }