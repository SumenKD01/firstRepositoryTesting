var form = document.getElementById('form');
var submitButton = document.getElementById('submitButton');


form.addEventListener('submit', addToStorage);

function deleteFunctionality(e) {
    e.target.parentElement.style.display = 'none';
    localStorage.removeItem(e.target.parentElement.getAttribute('email'));
}

function editFunctionlity(e){
    e.target.parentElement.style.display = 'none';
    localStorage.removeItem(e.target.parentElement.getAttribute('email'));
    document.getElementById('name').value = e.target.parentElement.getAttribute('name');
    document.getElementById('email').value = e.target.parentElement.getAttribute('email');
    document.getElementById('phone').value = e.target.parentElement.getAttribute('phone');
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

    let editButton = document.createElement("input");
    editButton.type = 'button';
    editButton.value = "edit";

    // console.log(newDetail);
    newDetail.textContent = ("name:" + objectMade.name + "-" + "email:" + objectMade.email + "-" + "phone:" + objectMade.phone + " ");
    newDetail.appendChild(deleteButton);
    newDetail.appendChild(editButton);

    newDetail.setAttribute('email', email);
    newDetail.setAttribute('name', nameGiven);
    newDetail.setAttribute('phone', phone);
    
    allUserDetailList.appendChild(newDetail);

    deleteButton.addEventListener("click", deleteFunctionality);
    editButton.addEventListener('click',editFunctionlity)

    localStorage.setItem(email, JSON.stringify(objectMade));
    console.log(localStorage);
}
