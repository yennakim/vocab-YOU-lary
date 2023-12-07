import { signOut } from '../utils/auth';
import { getWords } from '../api/wordData';
import { showWords } from '../pages/words';

const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button').addEventListener('click', signOut);

  // ALL ENTRIES
  document.querySelector('#all-words').addEventListener('click', () => {
    getWords().then(showWords);
  });
};

export default navigationEvents;
