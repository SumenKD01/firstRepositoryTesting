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

const secondLiElement = document.querySelector(".list-group-item:nth-child(2)");
console.log(secondLiElement);
secondLiElement.style.backgroundColor = 'green';

const thirdLiElement = document.querySelector(".list-group-item:nth-child(3)");
console.log(thirdLiElement);
thirdLiElement.style.display = 'none';
