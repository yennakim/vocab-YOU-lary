import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const emptyWords = () => {
  const domString = '<h1>No Books</h1>';
  renderToDom('#store', domString);
};

const showWords = (array) => {
  clearDom();

  let domString = '';
  array.forEach((item) => {
    domString += `
  <div class="card" style="width: 18rem;">
   <div class="card-body style="height: 180px;">
     <h5 class="card-title">${item.title}</h5>
     <h6 class="card-subtitle mb-2 text-body-secondary">Category: ${item.category}</h6>
     <p class="card-text">${item.definition}</p>
     <i id="edit-word-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
     <i id="delete-word-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
   </div>
 </div>`;
  });
  renderToDom('#store', domString);
};

export { showWords, emptyWords };
