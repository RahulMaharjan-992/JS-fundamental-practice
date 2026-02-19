//async keyword
function withConstructor(num){
  return new Promise((resolve, reject) => {
    if (num === 0){
      resolve('zero');
    } else {
      resolve('not zero');
    }
  });
}

withConstructor(0)
  .then((resolveValue) => {
  console.log(` withConstructor(0) returned a promise which resolved to: ${resolveValue}.`);
});

async function withAsync(num){
  if (num===0){
    return ('zero');
  }
  else{
    return('not zero');
  }
}
withAsync(100)
  .then((resolveValue) => {
  console.log(` withAsync(100) returned a promise which resolved to: ${resolveValue}.`);
})

//await operator
async function announceDinner() {
  let meal = await brainstormDinner();
  console.log(`I'm going to make ${meal} for dinner.`);
}
announceDinner();

//async function
const shopForBeans = require('./library.js');
async function getBeans() {
  console.log(`1. Heading to the store to buy beans...`);
  let value =  await shopForBeans();
  console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
}

getBeans();

//handling dependent promises 
const {shopForBeans, soakTheBeans, cookTheBeans} = require('./library.js');
async function makeBeans(){
  const type = await shopForBeans();
  const isSoft = await soakTheBeans(type);
  const dinner = await cookTheBeans(isSoft);
  console.log(dinner);
}
makeBeans();

//handling errors
const cookBeanSouffle = require('./library.js');
async function hostDinnerParty(){
  try{
    let dinner = await cookBeanSouffle();
console.log(`${dinner} is served!`);
  }
  catch(error){
    console.log(error);
console.log('Ordering a pizza!');
  }
} 
hostDinnerParty();

//handling dependent promises 
let {cookBeans, steamBroccoli, cookRice, bakeChicken} = require('./library.js');
async function serveDinner(){
  const vegetablePromise = steamBroccoli();
  const starchPromise = cookRice();
  const proteinPromise = bakeChicken();
  const sidePromise = cookBeans();
  console.log(`Dinner is served. We're having ${await vegetablePromise}, ${await starchPromise}, ${await proteinPromise}, and ${await sidePromise}.`);
}
serveDinner();

//await promise.all
let {cookBeans, steamBroccoli, cookRice, bakeChicken} = require('./library.js');
async function serveDinnerAgain(){
  let foodArray = await Promise.all([steamBroccoli(), cookRice(), bakeChicken(), cookBeans()]);

  console.log(`Dinner is served. We're having ${foodArray[0]}, ${foodArray[1]}, ${foodArray[2]}, and ${foodArray[3]}.`);
}
serveDinnerAgain();


