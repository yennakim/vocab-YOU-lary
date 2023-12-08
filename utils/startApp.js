// import logoutButton from '../components/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navigationEvents from '../events/navigationEvents';
import navBar from '../components/shared/navBar';
import logoutButton from '../components/logoutButton';
import { showWords } from '../pages/words';
import { getWords } from '../api/wordData';
import domEvents from '../events/domEvents';

const startApp = () => {
  domBuilder(); // BUILD THE DOM
  domEvents(); // ADD THE EVENT LISTENTERS TO THE DOM
  // formEvents(user); // ADD FORM EVENT LISTENTERS TO THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  navigationEvents(); // ATTACH THE EVENT LISTENERS TO THE NAVBAR

  getWords().then(showWords);
};

export default startApp;
