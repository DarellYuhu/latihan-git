/*
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*  Programmed by Mona, Darell Christopher    *
*  Faculty of Computer Science               *
*  2nd Grade, 2nd Semester (Summer school)   *
*  JavaScript (ES6 Exercise)                 *
*  String literals, arrow function, and more *
==============================================
*/

const warna = ["merah", "kuning", "kelabu"];
// warna = ['putih', 'hitam', 'hijau']; // akan menghasilkan error karena ini akan memberikan array baru
warna.push("hijau"); // bisa dijalankan karena hanya merubah isi dalam array bukan arraynya
console.log(warna);

// kelemahan 'var' dalam pendeklarasian adalah memungkinkan untuk mendeklarasikan
// variable yang sudah ada sebelumnya. 'Var' juga tidak memiliki blok scoping
var nama = 'Darell';
var nama = 'Mona'; // ini tidak diijinkan pada ES6 'let'
console.log(nama);

// penggunaan string literal
let fullName = 'Darell Mona';
let age = 34;

// penggunaan concatenate sangat tidak relevant untuk situasi seperti ini
let greetings = "Hallo nama saya adalah " + fullName + ". Umur saya " + age + " tahun.";
let greetings6 = `Hallo nama saya ${fullName}. Umur saya ${age}.`; // contoh penulisan string literals
console.log(greetings6);

// penggunaan operator pada string literal
let marriageValidation = `apakah saya sudah bisa memiliki SIM? ${(age >= 17)}`;
console.log(marriageValidation);

// arrow function -> pengganti deklarasi function pada umumnya
// deklarasi function biasanya sperti ini:
function salam()
{
    return `Yuhu nama saya ${fullName}. Umur saya ${age}.`;
};
console.log(salam());

// ini penggunaan arrow function;
let salam6 = () => 
{
    return `Shalom nama saya ${fullName}. Umur saya ${age}.`;
};
console.log(salam6());

// jika hanya memiliki satu baris dan akan mengembalikan nilai (return) bisa ditulis seperti ini
let yuhu = (kota) => `Shalom nama saya ${fullName}. Umur saya ${age}. Saya tinggal di ${kota}`;
console.log(yuhu('Airmadidi'));

// default parameter -> untuk memberikan nilai default jika tidak diberikan nilai pada fucntion argument
let sayHallo = (pelanggan = 'pelanggan') => `Hallo ${pelanggan}. Terimakasih sudah mampir :)`;
console.log(sayHallo()); // tidak memberikan nilai. akan memberikan nilai default
console.log(sayHallo('Darell')); // memberikan nilai. akan memakai nilai ini
console.log('Darell', 'Mona');

// Destrukturisasi
// array
const arrPerson = ['Darell', 'Mona', 33, true];
// line ini akan mengassign nilai dari array ke variable" yang telah ditentukan
// note: pemberian array akan berurut susai index dari array
const [firstName, lastName, umur, isMarried] = arrPerson;
console.log(firstName, lastName, umur, isMarried);
// jika hanya ini memecah nilai untuk variable tertentu dapat dituliskan sebagai berikut
const [namaDepan, , Age] = arrPerson;
console.log(namaDepan, Age);

// jika deklrasi dan assignement dilakukan secara terpisah
const animal = ['Snake', 'Reptile'];
let animalName;
let animalType;
[animalName, animalType, foodType = 'Carnivores'] = animal; // default value for undefined variable's value
console.log(animalName, animalType, foodType);

// rest opperator for assign the rest of the value to another variable
const arrDarell = ['Darell', 'Mona', 20, false];
const [darName, , darAge, ...restDar] = arrDarell;
console.log(darName, darAge);
console.log(restDar); // all the rest variable will be assign to 'restDar' Variable


// object
// notes: destructuring object tidak perlu pengurutan seperti array. default value dan rest == array
const objPerson = 
{
    depanName: 'Darell',
    belakangNama: 'Mona',
    agePer: 20,
    menikah: false
};
const {depanName = 'Yuhu', belakangNama, agePer, menikah} = objPerson // nama variable harus sesuai dengan nama propertinya
console.log(depanName, belakangNama, agePer, menikah);
const {depanName: darell} = objPerson; // jika ingin merename variablenya;
console.log(darell);

// destructuring object dalam sebuah fungsi
// tidak perlu menggunakan dot notation untuk mengakses sebuah variable dalam objek
const hallo = ({firstName, lastName}) => `Hallo nama saya ${depanName} ${belakangNama}`;
console.log(hallo(objPerson));