const category = document.querySelector('#categories');
const listItems = category.querySelectorAll('li');
const getHeaders = category.querySelectorAll('h2');
const headersCount = getHeaders.length;

const messageOfCategories = `Number of categories: ${headersCount}`; // kategorie


const firstList = category.firstElementChild;
const getHeadingFirst = firstList.querySelector('h2');
const headingFirst = getHeadingFirst.textContent;
const countFirst = firstList.querySelectorAll('ul > li');
const firstElements = countFirst.length;


const messageHeadingFirst = `Category: ${headingFirst}`; //pierwsza lista + nagłówek
const messageListFirst = `Elements: ${firstElements}`;

const secondList = category.children[1];
const getHeadingSecond = secondList.querySelector('h2');
const headingSecond = getHeadingSecond.textContent;
const countSecond = secondList.querySelectorAll('ul > li');
const secondElements = countSecond.length;


const messageHeadingSecond = `Category: ${headingSecond}`; //druga lista + nagłówek
const messageListSecond = `Elements: ${secondElements}`;


const lastList = category.lastElementChild;
const getHeadingLast = lastList.querySelector('h2');
const headingLast = getHeadingLast.textContent;
const countLast = lastList.querySelectorAll('ul > li');
const lastElements = countLast.length;

const messageHeadingLast = `Category: ${headingLast}`; // trzecia lista + nagłówek
const messageListLast = `Elements: ${lastElements}`;

// gotowe!
console.log(messageOfCategories);
console.log(messageHeadingFirst);
console.log(messageListFirst);
console.log(messageHeadingSecond);
console.log(messageListSecond);
console.log(messageHeadingLast);
console.log(messageListLast);
