
//const recipe = document.querySelectorAll("[id*='recipe']")


// Tariq's recommendation
// let recipe = document.querySelector("#wprm-recipe-container-61842"); <- too specific but works for our first test site

//FAILED ATTEMPT TO GRAB THE STYLE PROPERTIES
//grab the style elements of the recipe at the 0th index
//let style = JSON.parse(JSON.stringify(recipe[0].style))
// let style = JSON.parse(JSON.stringify(document.querySelector("body").style))


//FIRST ATTEMPTED CODE TO GRAB RECIPE AND DELETE EVERYTHING ELSE -it's sometimes rendering weird
// let recipe = [document.querySelector('[id^="wprm-recipe-container"]') || document.querySelector('[class*="recipe-card"]')];
// // recipe = document.querySelectorAll('[id*="recipe"]'); // , [class*='recipe']"
// //initialize a variable to hold the current body
// const oldBody = document.querySelector("body")
// //initialize a variable to hold the HTML element (top node)
// const htmlElement = oldBody.parentElement;
// //create a new body
// const newBody = document.createElement("body");
// //append the recipe variable to be a child of the HTML element
// recipe.forEach(r => htmlElement.appendChild(r))
// // htmlElement.appendChild(recipe)
// //remove the old body
// oldBody.remove()

//SECOND ATTEMPT TO THE PROBLEM ABOVE
//find the recipe and see if that element has siblings
let recipe = [document.querySelector('[id^="wprm-recipe-container"]') || document.querySelector('[class*="recipe-card"]')];
//if so, delete them

const method = 0;

if (method === 0) {

  const oldBody = document.querySelector("body")
  //initialize a variable to hold the HTML element (top node)
  const htmlElement = oldBody.parentElement;
  //create a new body
  const newBody = document.createElement("body");
  //append the recipe variable to be a child of the HTML element
  recipe.forEach(r => htmlElement.appendChild(r))
  // htmlElement.appendChild(recipe)
  //remove the old body
  // oldBody.remove()
  htmlElement.appendChild(recipe)
}
else if (method === 1) {

  let keep = recipe[0];
  do {
    let parent = keep.parentElement;
    parent.replaceChildren(keep);
    keep = parent;
  }
  while (keep.tagName !== 'HTML');

}


//then go up into the parent element above the recipe and delete it's siblings and keep going until we reach the root (html element)

/* deleted element from test site within recipe element id="AdThrive_Recipe_1_desktop"
    id="AdThrive_Recipe_1_tablet"
    class="adthrive-ad adthrive-recipe adthrive-recipe-1 adthrive-ad-cls"
    class="mv-ad-box" */

//go into each element in the array, and then go into each element inside that object and remove all of the insides
const AdQuerySelectors = ["[id*='AdThive']", "[class*='adthrive']", "[class*='mv-ad-box']"]
const Ads = AdQuerySelectors.map(qs => document.querySelectorAll(qs));
Ads.forEach(AdList => AdList.forEach(el => el.remove()))


//created a JSON string of the style of the div we were trying to collect from the FOS
//grab the style




// const Ads = [];

// Ads.push(document.querySelectorAll("[id*='Ad']"))
// Ads.push(document.querySelectorAll("[id*='Ad']"))

// const selected = document.querySelectorAll("img")
// for (const el of selected) {
//   el.remove();
// }


/*
const article = document.querySelector("article");

// `document.querySelector` may return null if the selector doesn't match anything.
if (article) {
  const text = article.textContent;
  const wordMatchRegExp = /[^\s]+/g; // Regular expression
  const words = text.matchAll(wordMatchRegExp);
  // matchAll returns an iterator, convert to array to get word count
  const wordCount = [...words].length;
  const readingTime = Math.round(wordCount / 200);
  const badge = document.createElement("p");
  // Use the same styling as the publish information in an article's header
  badge.classList.add("color-secondary-text", "type--caption");
  badge.textContent = `⏱️ ${readingTime} min read`;

  // Support for API reference docs
  const heading = article.querySelector("h1");
  // Support for article docs with date
  const date = article.querySelector("time")?.parentNode;

  (date ?? heading).insertAdjacentElement("afterend", badge);
}
*/