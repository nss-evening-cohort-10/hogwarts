const printToDom = (divId, stringToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = stringToPrint;
};

export default { printToDom };
