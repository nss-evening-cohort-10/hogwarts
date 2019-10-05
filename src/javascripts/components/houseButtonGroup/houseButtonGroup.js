import utilities from '../../helpers/utilities';
import houseData from '../../helpers/data/houseData';
import houseButton from '../houseButton/houseButton';

import './houseButtonGroup.scss';

const assignEventListeners = () => {
  const buttons = document.getElementsByClassName('house-button');
  for (let j = 0; j < buttons.length; j += 1) {
    buttons[j].addEventListener('click', houseButton.buttonEventFunction);
  }
};

const createHouseButtonGroup = () => {
  const houses = houseData.getHouses();
  let domString = '<div class="house-button-group">';
  for (let i = 0; i < houses.length; i += 1) {
    domString += houseButton.createHouseButton(houses[i]);
  }
  domString += '</div>';

  utilities.printToDom('button-container', domString);
  assignEventListeners();
};

export default { createHouseButtonGroup };
