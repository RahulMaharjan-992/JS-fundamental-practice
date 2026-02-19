//making an object
let apple =
{
  color :'red',
  'taste' : 'sweet'
}

//bracket notation
let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  'Active Mission' : true,
  homePlanet : 'Earth', 
  numCrew: 5
 };

let propName =  'Active Mission';
let isActive = spaceship['Active Mission']
console.log(spaceship[propName]);
 
//property assignment
let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

spaceship.color = 'glorious gold';
spaceship['numEngines'] = 7;
delete spaceship['Secret Mission'];

//Methods
let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';
const alienShip = { retreat(retreatMessage){console.log('We no longer wish to conquer your planet. It is full of dogs, which we do not care for.');
},
takeOff() {console.log('Spim... Borp... Glix... Blastoff!');}
}
alienShip.retreat();
alienShip.takeOff();

//pass by reference 
let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};
let greenEnergy =
spaceship => {spaceship['Fuel Type'] = 'avocado oil'}
let remotelyDisable = spaceship => {
  spaceship.disabled = true;
}
greenEnergy(spaceship);
remotelyDisable(spaceship);
console.log(spaceship);

//looping through objects
let spaceship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 

for (let crewMem in spaceship.crew)
{
  console.log(`${crewMem}: ${spaceship.crew[crewMem].name},\nrole: ${spaceship.crew[crewMem].degree}\n`);
}

//promise object
const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344
};
function myExecutor(resolve, reject) {
  if (inventory.sunglasses > 0){
  resolve('Sunglasses order processed.');}
  else{
  reject('That item is sold out.');}
}
function orderSunglasses() {return new Promise(myExecutor);}
const orderPromise = orderSunglasses();
console.log(orderPromise);

