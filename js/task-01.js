const listItems = document.querySelectorAll('#categories > .item');
const header = document.querySelectorAll('h2');

const messageOfCategories = `Number of categories: ${header.length}`; // kategorie
console.log(messageOfCategories);

listItems.forEach((item) => {
    const headerList = item.querySelector("h2");
    console.log("Category: ", headerList.textContent);
    const elementList = item.querySelectorAll("ul > li");
    console.log("Elements: ", elementList.length);
});
