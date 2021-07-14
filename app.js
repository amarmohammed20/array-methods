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

// The reduce method - Get total number of characters in all the characters names.
// This task you simply start the accumulator with 0 and get the length of each name and add it to the accumulator.
const totalCharactersAllCharNames = data.reduce((acc, char) => {
   return acc + char.name.length
}, 0)


// ***** JS REDUCE METHOD END******

// ***** JS MAP METHOD START ******

// Get array of all names
const charNames = data.map((char => char.name)) 

// Get array of all heights
const charHeights = data.map((char => char.height)) 

// Get array of objects with just name and height properties
// This was a little tricky as the object had to be wrapped in brackets as it was the return. Originally there was no open bracket before the last curly bracket on line 101, this didnt work. 
const objectNameAndHeight = data.map((char => ({ 
    name: char.name, height: char.height})
    )); 

// Get array of all first names
//Ensure to select 0 index in the new resulting array. 
// I tried the second parameter as 1 in the split but that brought back a new array for each name. 
const charFirstNames = data.map((char => char.name.split(" ")[0])) 

// ***** JS MAP METHOD END ******

// ***** JS SOME METHOD START ******

// Is there at least one male character
const maleChar = data.some(char => char.gender == "male" )

//Is there at least one character with blue eyes
const eyeColourBlue = data.some(char => char.eye_color == "blue" )

//Is there at least one character taller than 200
const charTallerThan200 = data.some(char => char.height > "200" )

//Is there at least one character that has a mass less than 50
const charLessThan50 = data.some(char => char.mass < "50" )

// ***** JS SOME METHOD END ******


console.log(charLessThan50)