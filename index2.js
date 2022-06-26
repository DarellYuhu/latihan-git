/*
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*  Programmed by Mona, Darell Christopher    *
*  Faculty of Computer Science               *
*  2nd Grade, 2nd Semester (Summer school)   *
*  Latihan : JavaScript (Array & Object)     *
==============================================
*/

// Array
// array litteral declaration
let angka = [1, 2, 3, 4, 5]; // int array
// array in JS can have different data types in a single array
let biodata = ['Darell', 'Mona', 33, true];

// changing the value inside the array using index
biodata[biodata.length-1] = false;

// another way to declare arrays (new key)
let angka2 = new Array(1,2,3,4,5);
let biodata2 = new Array('Darell', 'Mona', 20, false);

// arrays always start with index 0
console.log(angka);
console.log(biodata);
// access array with specific index
console.log(biodata2[0]);

// length berfungsi untuk menghitung panjang suatu index
let indexTerakhir = biodata.length - 1;
console.log(biodata2[indexTerakhir]);

// deklarasi array yang panjangnya belum diketahui/belum diisi
let yuhuNumbers = [];
yuhuNumbers[0] = 27;
console.log(yuhuNumbers);


// object
// keuntungan dari objek adalah kita dapat memberikan properti
// di setiap value nya

let biodata3 = 
{
    firstName: 'Darell',
    lastName: 'Mona',
    age: 20,
    isMarried: true,
    wife: 'Amen',
    // bisa membuat function pada objek
    helloYou: function()
    {
        console.log("Hello my love");
    }
};
console.log(biodata3);
// menambahkan properti baru pada objek
biodata3.address = 'Airmadidi';
biodata3['nationality'] = 'Indonesia';
console.log(biodata3.address);
console.log(biodata3);
console.log(biodata3.helloYou()); // calling function from object

// how to access specified object property
console.log(biodata3.firstName); //1st method (dot notation)
console.log(biodata3['lastName']); // 2nd method (bracket notation)

let number1 = [1,2,3,4,5];
let number2 = ["Darell", 'Yuhu'];
let number3 = ['ganteng :v', true];
let ganteng = number1.concat(number2, number3);
console.log(ganteng);