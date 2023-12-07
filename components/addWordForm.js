import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const addWordForm = (obj = {}) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-word--${obj.firebaseKey}` : 'submit-word'}" class="mb-4">
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title" aria-describedby="wordTitle" placeholder="Enter a word or phrase" value="${obj.title || ''}" required>
      </div>
      <div class="form-group">
        <label for="definition">Definition</label>
        <input type="text" class="form-control" id="definition" placeholder="Enter a definition" value="${obj.definition || ''}" required>
      </div>
      <div class="form-group">
        <label for="category">Category</label>
        <input type="text" class="form-control" id="category" placeholder="Placeholder" value="${obj.category || ''}" required>
      </div>
      <div class="form-group" id="select-author">
      </div>
      <button type="submit" class="btn btn-primary">Submit
      </button>
    </form>`;

  renderToDom('#form-container', domString);
  // selectAuthor(`${obj.author_id || ''}`);
};

export default addWordForm;
