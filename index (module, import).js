/*
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*  Programmed by Mona, Darell Christopher    *
*  Faculty of Computer Science               *
*  2nd Grade, 2nd Semester (Summer school)   *
*  JavaScript (ES6 Exercise)                 *
*  MODULE, Export & Inport                   *
==============================================
*/

// untuk menggunakan data dari JS lain harus diimport terlebih dahulu
// bisa array, objek, fungsi, dll
// nama alias dapat diterapkan pada import ataupun export
import {fullName, person, welcome} from './person (export).js' // menandakan pada folder yang sama

console.log(fullName);
console.log(person);
welcome(person);