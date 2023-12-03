// Examine the document object

// console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.doctype);
// console.log(document.title);
// console.log(document.head);

// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textContent = "hello Sumen";
// console.log(document.forms);
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// const titleBar = document.getElementById('main-header');

// titleBar.style.borderBottom = 'solid 2px black';

// const allClassElements = document.getElementsByClassName('list-group-item');

// allClassElements[2].style.backgroundColor = 'green';

// for(let i in allClassElements){
//     allClassElements[i].style.fontWeight = 'bold';
// }

// const newClassElement = document.getElementsByClassName('newLi');
// console.log("Hello",newClassElement[0]);

// newClassElement[0].style.backgroundColor = 'yellow';

// const allLiElements = document.getElementsByTagName('li');

// console.log(allLiElements[4]);

// allLiElements[4].style.color = 'red';

// const secondLiElement = document.querySelector(".list-group-item:nth-child(2)");
// console.log(secondLiElement);
// secondLiElement.style.backgroundColor = 'green';

// const thirdLiElement = document.querySelector(".list-group-item:nth-child(3)");
// console.log(thirdLiElement);
// thirdLiElement.style.display = 'none';

// const testElement1 = document.querySelector('li:nth-child(1)');
// console.log(testElement1.parentElement);

const testElement2 = document.querySelector('ul');
console.log(testElement2);
console.log(testElement2.lastElementChild.innerHTML);

const testElement3 = document.querySelector('ul');
console.log(testElement3.lastChild);
testElement3.lastChild.textContent = "This is not ok Sumen";

let newElement = document.createElement('div');
newElement.innerHTML = " This is new Element";
console.log(newElement);

const testElement4 = document.querySelector('ul');
console.log(testElement4.firstElementChild);

const testElement5 = document.querySelector('ul');
console.log(testElement5.firstChild);

const testElement6 = document.querySelector('li');
console.log(testElement6.nextSibling);

const testElement7 = document.querySelector('li');
console.log(testElement7.nextElementSibling);

const testElement8 = document.querySelector('li');
console.log(testElement8.previousSibling);

const testElement9 = document.querySelector('li:last-child');
console.log(testElement9.previousElementSibling);

const testElement10 = document.querySelector('li');
console.log(testElement10);

testElement10.setAttribute("newAttribute","Best");
console.log(testElement10);

const testElement11 = document.getElementsByTagName('form')[0];
console.log(testElement11);
testElement11.appendChild(newElement);

const testElement12 = document.getElementsByTagName('ul')[0];
console.log(testElement12);
testElement12.appendChild(newElement);