var form = document.getElementById('form');
var submitButton = document.getElementById('submitButton');


form.addEventListener('submit', addToStorage);

function deleteFunctionality(e) {
    console.log(e.target.parentElement);
    e.target.parentElement.style.display = 'none';
    console.log("Email - ",e.target.parentElement.getAttribute('email'));
    localStorage.removeItem(e.target.parentElement.getAttribute('email'));
}

function addToStorage(e) {
    e.preventDefault();
    var nameGiven = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    let objectMade = {
        name: nameGiven,
        email: email,
        phone: phone
    }
    // console.log(nameGiven, age);
    var allUserDetailList = document.getElementById('allUserDetails');
    let newDetail = document.createElement("li");
    let deleteButton = document.createElement("input");
    deleteButton.type = 'button';
    deleteButton.value = "delete";
    console.log(newDetail);
    newDetail.textContent = ("name:" + objectMade.name + "-" + "email:" + objectMade.email + "-" + "phone:" + objectMade.phone + " ");
    newDetail.appendChild(deleteButton);
    newDetail.setAttribute('email', email);
    allUserDetailList.appendChild(newDetail);

    deleteButton.addEventListener("click", deleteFunctionality);

    localStorage.setItem(email, JSON.stringify(objectMade));
    console.log(localStorage);
}
