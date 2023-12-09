import renderToDom from '../utils/renderToDom';

const selectCategory = () => {
  const domString = `<label for="category">Select a Category</label>
  <select class="form-control" id="category" required>
  <option selected">Select a Category</option>
  <option value="Coffee">Coffee</option>
  <option value="Pastry">Pastry</option>
  </select>`;
  renderToDom('#select-category', domString);
};

export default selectCategory;
