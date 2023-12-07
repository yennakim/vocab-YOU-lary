import renderToDom from '../../utils/renderToDom';

const navBar = () => {
  const domString = `
  <nav class="navbar fixed-top navbar-expand-lg bg-body-tertiary mb-5">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">vocab-YOU-lary</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item active">
          <a class="nav-link " href="#" id="all-words">All Words <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <button class="nav-link" href="#" id="add-word-btn">Create Entry</button>
        </li>
      </ul>
      <span class="navbar-text">
      <div id="logout-button"></div>
    </span>
    </div>
  </div>
</nav>`;

  renderToDom('#navigation', domString);
};

export default navBar;
