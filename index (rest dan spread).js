/*
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*  Programmed by Mona, Darell Christopher    *
*  Faculty of Computer Science               *
*  2nd Grade, 2nd Semester (Summer school)   *
*  JavaScript (ES6 Exercise)                 *
*  Rest & Spread Operator                    *
==============================================
*/

// REST OPERATOR
// akan menyimpan semua nilai dalam parameter ke sebuah array
// pener
function penjumlahan(a, b, c)
{
    console.log(a, b, c);
}
penjumlahan(1,2,3);

// contoh penerapan rest operator pada parameter
function buah(...buah) // jangan lupa menambahkan 3 titik
{
    console.log(buah);
}
buah('apel', 'mangga', 'pisang');
// pertanyaan: apakah scope dari variable array ini cuma berlaku pada function buah?

// rest operator pada parameter harus berada di akhir dari assign nilai parameter
function person(familyName, givenName, ...identity)
{
    console.log(familyName);
    console.log(givenName);
    console.log(identity);
}
person('Darell', 'Mona', 20, true, 'Manado');

// SPREAD OPERATOR
// memecah array menjadi elemen"
let numbers = [1,2,3,4,5];
console.log(numbers); // menampilkan isi dasri array secara keseluruhan (dalam satu wadah/array)
console.log(...numbers); // menampilkan isi dari array secara sastu persatu

// penggunaan lainnya pada penduplikasian array
//let numbers2 = numbers; // ini hanya akan mengassign numbers2 dengan "alamat" dari numbers
let numbers2 = [...numbers]; // memecah array menjadi elemen" dan mengasignnya dalam array numbers
console.log(numbers2);
console.log(numbers);

// penggunaan spread operator untuk concat dalam sebuah array
let bilangan1 = [1,2,3];
let bilangan2 = [4,5,6];
let gabungBilangan = [...bilangan1, 3.5, ...bilangan2] // kita juga bisa sisipkan nilai pada saat penggabungan
console.log(gabungBilangan);

// dapat menggunakan spread operator untuk duplikasi objek juga
let orang = 
{
    name: 'Darell',
    age: 20
}
let orang2 = {...orang};
orang2.name = 'Mona'; // hanya akan mengubah nilai dari objek orang2.nama
console.log(orang);
console.log(orang2);

// spread operator juga bisa digunakan untuk menambahkan properti pada objek
orang2 = {...orang2, alamat:"Manado"};
console.log(orang2);

// mengkombinasikan objek dengan bantuan spread operator
let bil1 = 
{
    a: 1,
    b: 2,
    c: 3
}
let bil2 =
{
    d:4,
    e:5,
    f:6
}
let bilCampur = {...bil1, ...bil2}
console.log(bilCampur);
// pertanyaan: bagaimana kalau concat tapi nama properti dari kedua objek itu sama?

const arrPerson = ['Darell', 'Mona', 33, true];
const [...arrPerson2] = arrPerson;
console.log(arrPerson);
console.log(arrPerson2);