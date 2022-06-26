/*
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*  Programmed by Mona, Darell Christopher    *
*  Faculty of Computer Science               *
*  2nd Grade, 2nd Semester (Summer school)   *
*  JavaScript (ES6 Exercise)                 *
*  Callback,asyncronous,promise,async/await  *
==============================================
*/

//import fetch from "node-fetch";

// assuncronous javascript: JS juka disebut dengan multithread language
// bisa menjalankan proses lain terlebih dahulu tanpa perlu menunggu
// proses lain berakhir

// callbac: function pada sebuah parameter function lain (function in a parameter)
function greetings(fullName)
{
    console.log(`Hi ${fullName}`);
}

function introFunction(firstName, lastName, callback)
{
    const fullName = `${firstName} ${lastName}`;
    callback(fullName);
}

introFunction("Darell", "Mona", greetings);

// simulasi asyncronous pada JS
// contoh dibawah ini adalah parallel async
console.log("satu");
setTimeout(() => 
{
    console.log("dua");
}, 2000); // line ini akan berjalan di thread lain
console.log("tiga");
// line diatas akan langsung dijalankan tanpa harus menunggu prosesnya selesai
// pertanyaan: apakah asyncronous itu terikat dengan sequence rules?


function proses1()
{
    console.log(`proses 1 selesai dijalankan`);
}

function proses2(callback)
{
    setTimeout(() => {
        console.log(`proses 2 selesai dijalankan`);
        callback();
    }, 2000);
}

function proses3()
{
    console.log(`proses 3 selesai dijalankan`);
} 

proses1();
proses2(proses3);
// line diatas akan mengeksekusi proses 3 jika proses 3 telah selesai dijalankan
// hal ini dilakukan jika kita ingin proses 3 dijalankan sesaat setelah proses 2 telah selesai

// kondisis seperti diatas dapat disederhanakan menggunakan promise
// type coding dibawah ini adalah concurrent dimana proses memiliki jeda
let condition = true;

let newPromise = new Promise((resolve, reject) => {
    if(condition)
    {
        resolve("Berhasil"); // akan dieksekusi jika kondisi terpenuhi
    }
    else
    {
        reject("Error");
    }
});

newPromise
    .then((result) => 
    {
        console.log(result);
    })
    .catch((error) =>
    {
        console.log(error);
    });

// simple application of promise for understand the asyncronous concept
function getIdStudent()
{
    return new Promise((resolve, reject) =>
    {
        resolve("12345")
    });
}

function getNameById(id)
{
    return new Promise((resolve, reject) =>
    {
        if(id === "12345")
        {
            resolve(`Darell Mona`);
        }
        else
        {
            reject("Unknown ID Student");
        }
    });
}

getIdStudent()
    .then((id) => 
    {
        return getNameById(id);
    })
    .then((name) => 
    {
        console.log(name);
    })
    .catch((error) => 
    {
        console.log(error);
    })


// simplify the program with asunc/await function
const getNameByIdAsync = async () =>
{
    try
    {
        const id = await getIdStudent();
        const name = await getNameById(id);
        console.log(`${name} from async/await`);
    }
    catch(error)
    {
        console.log(`${error} from async/await`);
    }
}
getNameByIdAsync();