//Cludeo Answer Generator
console.log('I know who the murderer was!');

//Data
const people = ['Mrs Peacock', 'Colonel Mustard', 'Professor Plum', 'Miss Scarlet', 'Mr Green'];
const weapons = ['Revolver', 'Dagger', 'Lead Pipe', 'Rope', 'Candlestick', 'Wrench'];
const locations = ['Kitchen', 'Hall', 'Ballroom', 'Conservatory', 'Dining Room', 'Cellar', 'Billiards Room', 'Library', 'Lounge', 'Study'];

//Random Number Generators
let random5 = Math.floor(Math.random()*5);
let random6 = Math.floor(Math.random()*6);
let random10 = Math.floor(Math.random()*10);

//function for Person
const randPerson = () => {
    console.log('It was ' + people[random5] + ',');
}
randPerson(random5);

//function for Weapon
const randWeapon = () => {
    console.log('with the ' + weapons[random6] + ',');
}
randWeapon(random6);

//function for Location
const randLocation = () => {
    console.log('in the ' + locations[random10] + '!');
}
randLocation(random10);

