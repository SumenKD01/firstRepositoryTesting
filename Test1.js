var form = document.getElementById('form');
var submitButton = document.getElementById('submitButton');


form.addEventListener('submit', addToStorage);

function addToStorage(e) {
    e.preventDefault();
    var nameGiven = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    console.log(nameGiven, age);
    localStorage.setItem("Name", nameGiven);
    localStorage.setItem("Age", age);
}
