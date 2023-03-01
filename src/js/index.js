// selectors
const siteTitle = document.getElementById("site-title");
const navEls = document.getElementsByTagName('li');
const contentText = document.getElementsByClassName('content-text');
const siteDesc = document.querySelector('#site-description');
const contentDiv = document.querySelector('.content');
const altNews = document.querySelectorAll('#nav > li:nth-of-type(odd');


//Manipulation
siteTitle.innerText = 'Dynamo';

Array.from(navEls).forEach((el) => (el.innerText = `--${el.innerText}--`));

Array.from(contentText).forEach((el) => (el.innerText = el.innerText.toUpperCase()));;

siteDesc.innerText = siteDesc.innerText.replace("DynTexh LLC", 'Dynamation SpaceTech');

contentDiv.style.backgroundColor = 'red';

altNews.forEach((el) => (el.style.backgroundColor = 'rgba(0,0,0,0.5)'));