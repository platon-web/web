const appendToDisplay=(value)=> {
  document.getElementById('display').value += value;
}

const calculate=() =>{
  let expression = document.getElementById('display').value;
  let result = eval(expression);
  document.getElementById('display').value = result;
}