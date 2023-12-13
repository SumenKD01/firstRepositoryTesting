var form = document.getElementById('form');
var submitButton = document.getElementById('submitButton');


form.addEventListener('submit', addToStorage);

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
    console.log(newDetail);
    newDetail.textContent = ("name:" + objectMade.name + "-" + "email:" + objectMade.email + "-" + "phone:" + objectMade.phone)
    allUserDetailList.appendChild(newDetail);

    // localStorage.setItem(email, objectMade);
    localStorage.setItem(email, JSON.stringify(objectMade));
    console.log(localStorage);
}
