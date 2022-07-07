//Cludeo Answer Generator
console.log('I know who the murderer was!');

//Random Person Generator
let randomNumberForPerson = Math.floor(Math.random()*5);
let person = '';

switch(randomNumberForPerson){
    case 0:
        person = 'Mrs Peacock';
        break;
    case 1:
        person = 'Colonel Mustard';
        break;
    case 2:
        person = 'Professor Plum';
        break;
    case 3:
        person = 'Miss Scarlet';
        break;
    case 4:
        person = 'Mr Green';
        break;
}

console.log(`It was ${person},`);

//Random Weapon Generator
let randomNumberForWeapon = Math.floor(Math.random()*6);
let weapon = '';

switch(randomNumberForWeapon){
    case 0:
        weapon = 'Revolver';
        break;
    case 1:
        weapon = 'Dagger';
        break;
    case 2:
        weapon = 'Lead Pipe';
        break;
    case 3:
        weapon = 'Rope';
        break;
    case 4:
        weapon = 'Candlestick';
        break;
    case 5:
        weapon = 'Wrench';
        break;
}

console.log(`with the ${weapon},`);

//Random Location Generator
let randomNumberForLocation = Math.floor(Math.random()*10);
let location = '';

switch(randomNumberForLocation){
    case 0:
        location = 'Kitchen';
        break;
    case 1:
        location = 'Hall';
        break;
    case 2:
        location = 'Ballroom';
        break;
    case 3:
        location = 'Conservatory';
        break;
    case 4:
        location = 'Dining Room';
        break;
    case 5:
        location = 'Cellar';
        break;
    case 6:
        location = 'Billards Room';
        break;
    case 7:
        location = 'Library';
        break;
    case 8:
        location = 'Lounge';
        break;
    case 9:
        location = 'Study';
        break;
}

console.log(`in the ${location}!`);