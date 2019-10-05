import utilities from '../../helpers/utilities';

import houseData from '../../helpers/data/houseData';

import studentCard from '../studentCard/studentCard';
import './studentList.scss';

const createStudentList = (students) => {
  const houses = houseData.getHouses();
  let domString = '<ul class="student-list">';
  for (let i = 0; i < students.length; i += 1) {
    for (let j = 0; j < houses.length; j += 1) {
      if (students[i].houseId === houses[j].id) {
        domString += studentCard.createStudentCard(students[i], houses[j]);
      }
    }
  }
  domString += '</ul>';

  utilities.printToDom('student-container', domString);
};

export default { createStudentList };
