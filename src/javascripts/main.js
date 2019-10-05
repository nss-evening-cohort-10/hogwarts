import navbar from './components/navbar/navbar';
import studentList from './components/studentList/studentList';

import '../styles/main.scss';

const init = () => {
  navbar.loadNavbar();
  studentList.createStudentList();
};

init();
