//.foreach
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

fruits.forEach(function (fruits)
{
  console.log('I want to eat a ' + fruits);
})

//.map
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];
const secretMessage = animals.map(animal => animal[0]);
console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];
const smallNumbers = bigNumbers.map(bigNumber => bigNumber/100);
console.log(smallNumbers.join(''));

//.filter
const randomNumbers = [375, 200, 3.14, 7, 13, 852];
const smallNumbers = randomNumbers.filter
(randomNumber => randomNumber<250);
console.log(smallNumbers);

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
const longFavoriteWords = favoriteWords.filter
(favoriteWord => favoriteWord.length > 7);
console.log(longFavoriteWords);

//.findIndex
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex
(animal => animal === 'elephant');
console.log(foundAnimal);

const startsWithS = animals.findIndex
(animal => animal.startsWith('s'));
console.log(startsWithS);
