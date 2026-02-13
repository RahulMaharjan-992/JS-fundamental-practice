//array methods
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();

console.log(groceryList);

groceryList.unshift('popcorn');

console.log(groceryList);

console.log(groceryList.slice(1, 4));

console.log(groceryList);
const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);

//array and functions
const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr)
{
  arr[3] = 'MUTATED';
}
changeArr(concept);
console.log(concept);
function removeElement(newArr){newArr.pop()
}
removeElement(concept);
console.log(concept);

//nested array
let numberClusters = [[1,2],[3,4],[5,6]];
const target = numberClusters[2][1];
console.log(target);
