/*
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*  Programmed by Mona, Darell Christopher    *
*  Faculty of Computer Science               *
*  2nd Grade, 2nd Semester (Summer school)   *
*  Latihan : JavaScript (Object Exercise)    *
==============================================
*/

let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

// add 'Go' to the end of the array
programming.languages.push("Go");
console.log(programming.languages);

// change difficult value to 7
programming['difficulty'] = 7;
console.log(programming.difficulty);

// removing jokes key from the object
delete(programming.jokes);
console.log(programming);

// add new properties called isFun to object
programming.isFun = true;
console.log(programming);

// using map function to add number to the front of each language
let temp = programming.languages.map(function(languages, index)
{
    return index + " - " + languages;
});
console.log(temp);