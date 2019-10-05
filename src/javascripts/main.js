import navbar from './components/navbar/navbar';

import studentData from './helpers/data/studentData';

import studentList from './components/studentList/studentList';
import houseButtonGroup from './components/houseButtonGroup/houseButtonGroup';

import '../styles/main.scss';

const init = () => {
  const students = studentData.getStudents();
  navbar.loadNavbar();
  houseButtonGroup.createHouseButtonGroup();
  studentList.createStudentList(students);
};

init();
