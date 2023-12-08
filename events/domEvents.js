import { getWords, deleteWord } from '../api/wordData';
import addWordForm from '../components/addWordForm';
import { showWords } from '../pages/words';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
  // CLICK EVENT FOR SHOWING FORM FOR ADDING A BOOK
    if (e.target.id.includes('add-book-btn')) {
      addWordForm();
    }

    // ADD CLICK EVENT FOR DELETING A WORD
    if (e.target.id.includes('delete-word-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = (e.target.id.split('--'));

        deleteWord(firebaseKey).then(() => {
          getWords().then(showWords);
        });
      }
    }
  });
};

export default domEvents;
