/*
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*  Programmed by Mona, Darell Christopher    *
*  Faculty of Computer Science               *
*  2nd Grade, 1st Semester                   *
*  Latihan : JavaScript                      *
==============================================
*/


console.log("Hello world");
// deklarasi variabel dapat menggunakan let dan const
let hello = "Hello";
const pi = 3.14; 
// const akan mengunci variable sehingga nilai dari variable tersebut tidak bisa dimodifikasi
console.log(hello, pi);

// penulisan variable
// hello_world (snake_case)
// FirstName (PascalCase)
// firstName (camelCase)
// _ and $ are the only allowed symbol in JS
// numbers is allowed but not in the first place

let age = 20;
let firstName = "Darell";
const lastName = "Mona";
//lastName = "mona"; // will result an error because of constant viariable can't be modified
console.log("Nama anda adalah", firstName + " " + lastName + " " + age);

// tipe data JS sangat flexible, dimana tipe datanya bisa diubah setiap saat;
let isStudent = true;
let grade;
grade = 90.5;
age = "dua puluh"; // tipe data int menjadi string;
console.log(firstName, age, isStudent, grade);

// supported arithmatic operator
console.log(5 + 5);
console.log(5 - 5);
console.log(5 * 5);
console.log(5 / 5);
console.log(5 % 5);
x = 5;
console.log(x++);
console.log(x--);
console.log(5**5);
// salary = salary + 5000 can be simplify into salary += 5000;
let salary = 5000;
salary += 5000;
console.log(salary);

// assignment operator in string will result a concatenation between both string
let nama = "darell";
let fam = "mona";
nama += fam;
console.log(nama);

// === megecek data beserta tipenya sedangkan == hanya mengecek value nya saja;
console.log(5 == "5");
console.log(5 === "5");// will result false because the different of data type
console.log(5 == "5" && 5 === "5");// will result false because both condition must be true
console.log(5 == "5" || 5 === "5");
console.log(!(5 == "5" || 5 === "5"));// this will reverse the condition from true to false vice versa.


// ternary operator untuk penyederhanaan if-else statement
let umur = 20;
let result = umur >= 17 ? "anda bisa memiliki sim" : "Anda belum bisa memiliki sim";
// jika kondisi true, maka value pertama akan dieksekusi, value kedua jika kondisi false
console.log(result);

// both global variable and can be visible to helloWorld fucntion
let namaDepan = "Darell";
let namaBelakang = "Mona";
//this is a fucntion hoisting. it can be called before the function declaration.
helloWorld(firstName, lastName);
function helloWorld(a, b)// parameter. this is a term in function declaration
{
    // this is a lokal variable and can only be visible inside helloWorld function
    let namaLengkap = a+b;
    console.log("Hello world from function. " + namaLengkap);
    console.log("Nama : ",namaDepan, namaBelakang);// calling the global var
};
helloWorld(namaDepan, namaBelakang);// argument. this is a term in function call

// deklarasi fungsi juga bisa disimpan dalam variable
let sayHello = function(){
    console.log("Hello world");
}
sayHello(); // calling the function by variable's name