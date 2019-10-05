import utilities from '../../helpers/utilities';

import studentData from '../../helpers/data/studentData';

import './studentList.scss';
import studentCard from '../studentCard/studentCard';

const createStudentList = () => {
  const students = studentData.getStudents();
  let domString = '<ul class="student-list">';
  for (let i = 0; i < students.length; i += 1) {
    domString += studentCard.createStudentCard(students[i]);
  }
  domString += '</ul>';

  utilities.printToDom('student-container', domString);
};

export default { createStudentList };
