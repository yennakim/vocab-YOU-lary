import { signOut } from '../utils/auth';
import { getWords } from '../api/wordData';
import { showWords } from '../pages/words';
import addWordForm from '../components/addWordForm';

const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button').addEventListener('click', signOut);

  // ALL ENTRIES
  document.querySelector('#all-words').addEventListener('click', () => {
    getWords().then(showWords);
  });

  // ADD WORD ENTRY
  document.querySelector('#add-word-btn').addEventListener('click', () => {
    addWordForm();
  });
};

export default navigationEvents;
