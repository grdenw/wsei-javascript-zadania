// Zadanie 0

const classTitleElement = document.querySelector(".title")

function getDataAnimation(element) {
    const dataAnimationAttr = element.getAttribute("data-animation")
    return dataAnimationAttr
}

console.log(getDataAnimation(classTitleElement))

// Zadanie 1

const homeElementById = document.getElementById("home")
const homeElementByQuerySelector = document.querySelector("#home")
const firstDataDirectionListItem = document.querySelector("li[data-direction]");
const firstElementWithClassBlock = document.querySelector(".block")

// Zadanie 2

const listItemInNav = document.querySelectorAll("nav li")
const paragraphsInDivs = document.querySelectorAll("div p")
const divInArticle = document.querySelectorAll("div article")

// Zadanie 3

const firstClassArticle =  document.querySelector("article.first");

console.log(firstClassArticle.querySelectorAll("h1").length)