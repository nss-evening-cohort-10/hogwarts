import './studentCard.scss';

const createStudentCard = (student) => {
  const domString = `
    <li class="student-card">
      <div class="img-holder">
        <img src=${student.picture}>
      </div>
      <h2>${student.name}</h2>
    </li>
  `;
  return domString;
};

export default { createStudentCard };
