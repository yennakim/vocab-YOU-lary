import { getWords, deleteWord, getSingleWord } from '../api/wordData';
import addWordForm from '../components/addWordForm';
import { showWords } from '../pages/words';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
  // CLICK EVENT FOR SHOWING FORM FOR ADDING A WORD
    if (e.target.id.includes('add-word-btn')) {
      addWordForm();
    }

    // CLICK EVENT FOR EDITING/UPDATING A WORD ENTRY
    if (e.target.id.includes('edit-word-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleWord(firebaseKey).then((wordObj) => addWordForm(wordObj));
    }
    // ADD CLICK EVENT FOR DELETING A WORD
    if (e.target.id.includes('delete-word-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = (e.target.id.split('--'));

        deleteWord(firebaseKey).then(() => {
          getWords(user.uid).then(showWords);
        });
      }
    }
  });
};

export default domEvents;
