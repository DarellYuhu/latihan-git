/*
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*  Programmed by Mona, Darell Christopher    *
*  Faculty of Computer Science               *
*  2nd Grade, 2nd Semester (Summer school)   *
*  JavaScript (ES6 Exercise)                 *
*  MODULE, Export & Inport                   *
==============================================
*/

export const fullName = "Darell Mona";
// export: agar object, variable, function dll dapat digunakan pada file JS lain

const person = 
{
    firstName: 'Darell',
    lastName: 'Mona',
    age: 20
};
const displayHallo = ({firstName, age}) => {console.log(`Hello ${firstName}, Welcom to JavaScript. Your age is ${age}`);};
// export secara bersamaan
export {person, displayHallo as welcome}; // dapat menggunakan alias