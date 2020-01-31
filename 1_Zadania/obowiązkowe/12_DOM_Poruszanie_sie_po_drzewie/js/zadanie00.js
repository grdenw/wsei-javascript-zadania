// Zadanie 0

const firsChildFirst = document.querySelector(".first").firstElementChild;

const thirdElement = firsChildFirst.children[2];

const dataExElement = document.querySelector("[data-ex]")

const grandpaExElement = dataExElement.parentElement.parentElement

const grandpaChildrenArr = [...grandpaExElement.children];

const lastChildElement = grandpaChildrenArr[grandpaChildrenArr.length - 1];

const firstChildElement = grandpaChildrenArr[0]

const middleChildElement = grandpaChildrenArr[Math.floor(grandpaChildrenArr.length / 2)]

const forthElemenet = document.querySelector(".forth")

const forthElementParent = forthElemenet.parentElement;

const firstArticle = forthElementParent.querySelector("article")

const secondParagraph = [...firstArticle.querySelectorAll("p")][1];
