import { signOut } from '../utils/auth';
import { filterCoffee, getWords, filterPastry } from '../api/wordData';
import { showWords } from '../pages/words';
import addWordForm from '../components/addWordForm';

const navigationEvents = (user) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button').addEventListener('click', signOut);

  // ALL ENTRIES
  document.querySelector('#all-words').addEventListener('click', () => {
    getWords(user.uid).then(showWords);
  });

  // ADD WORD ENTRY
  document.querySelector('#add-word-btn').addEventListener('click', () => {
    addWordForm();
  });

  // FILTER CATEGORY BY COFFEE
  document.querySelector('#category-coffee').addEventListener('click', () => {
    filterCoffee(user.uid).then(showWords);
  });
  // FILTER CATEGORY BY PASTRY
  document.querySelector('#category-pastry').addEventListener('click', () => {
    filterPastry(user.uid).then(showWords);
  });
};

export default navigationEvents;
