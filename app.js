const data = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];

// ***** JS FILTER METHOD START ******

// The filter method - Get characters with mass greater than 100
const characters100Plus = data.filter((char) => {
    return char.mass >= 100;
})

// The filter method - Get characters with height less than 200
const charactersHeightLess200 = data.filter((char) => {
    return char.height < 200;
})

// The filter method - Get all male characters
const charactersMale = data.filter((char) => {
    return char.gender === 'male';
})

// The filter method - Get all female characters
const charactersFemale = data.filter((char) => {
    return char.gender === 'female';
})

// ***** JS FILTER METHOD END******

// ***** JS REDUCE METHOD START ******

// The reduce method - Get total mass of all characters
const totalMassCharacters = data.reduce((acc, char) => {
    return acc + Number(char.mass);
}, 0)

// The reduce method - Get total height of all characters
const totalHeightCharacters = data.reduce((acc, char) => {
    return acc + Number(char.height);
}, 0)

// The reduce method - Get total number of characters by eye colour
// 1. make a empty object to add to
// 2. build a conditional statement to modify each element in the array. The action in the if statement will be performed on each element in the array
// 3. finally you create a new object with the desired result. Ensure to return the accumulator which started its life as an empty object.
const totalCharactersByEyeColour = data.reduce((acc, char) => {
    const color = char.eye_color;
    if(acc[color]) {
        acc[color] ++;
    } else {
        acc[color] = 1;
    }
    return acc
}, {})

// The reduce method - Get total number of characters in all the characters names
const totalCharactersAllCharNames = data.reduce((acc, char) => {
    const characters = char.name;
    acc[characters] = acc[characters].length
    console.log()
}, {})


// ***** JS REDUCE METHOD END******


console.log(totalCharactersByEyeColour)