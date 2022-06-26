/*
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*  Programmed by Mona, Darell Christopher     *
*  Faculty of Computer Science                *
*  2nd Grade, 2nd Semester (Summer School)    *
*  Exercise: Array & Object                   *
==============================================
*/


let people = ['Greg', 'Mary', 'Devon', 'James'];

// for loop
for(i = 0; i<people.length; i++)
{
    console.log(people[i]);
};

// forEach
people.forEach(function(value, index){
    console.log(people[index]);
});

// remove greg from array people
people.shift();
console.log(people);

// remove james from array people
people.pop();
console.log(people);

// add matt to the front of the array
people.unshift('Matt');
console.log(people);

// add 'your name' to the end of the array
people.push('Darell');
console.log(people);

// break after 'Mary'
for(i = 0; i<people.length; i++)
{
    console.log(people[i]);
    if(people[i] == 'Mary')
    {
        break;
    }
};

// copy of the array using slice without mary or matt
let copyPeople = people.slice(1, );
console.log(copyPeople);

// redefined the people variable
people.splice(2,1,'Elizabeth','Artie');
console.log(people);

// Bob
let withBob = people.concat('Bob');
console.log(withBob);