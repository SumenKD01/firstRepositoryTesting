var form = document.getElementById('form');
var submitButton = document.getElementById('submitButton');


form.addEventListener('submit', addToStorage);

function addToStorage(e) {
    e.preventDefault();
    var nameGiven = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    let objectMade = {
        name: nameGiven,
        age: age
    }
    // console.log(nameGiven, age);
    localStorage.setItem("objMade", objectMade);
    localStorage.setItem("objMadeString", JSON.stringify(objectMade));
    console.log(localStorage);
}
