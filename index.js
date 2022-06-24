/*
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*  Programmed by Mona, Darell Christopher    *
*  Faculty of Computer Science               *
*  2nd Grade, 2nd Semester (Summer school)   *
*  JavaScript (ES6 Exercise)                 *
*  CLASS AND INHERITANCE                     *
==============================================
*/

// class Mobil
// {
//     constructor(merek, warna, tahun)
//     {
//         this.merek = merek;
//         this.warna = warna;
//         this.tahun = tahun;
//     }

//     nyalakanMobil()
//     {
//         console.log(`Mobil ${this.merek} dinyalakan`);
//     }
// }

// const mobil1 = new Mobil("Toyota", "Kuning", 2015);
// mobil1.nyalakanMobil();

// // inheritance
// class Toyota extends Mobil
// {
//     constructor(merek, warna, tahun, mesin)
//     {
//         super(merek, warna, tahun);
//         this.mesin = mesin;
//     }
//     matikanMobil()
//     {
//         console.log(`Mobil ${this.merek} dimatikan`);
//     }
// }
// const agya = new Toyota("Toyota Agya", "Putih", 2002, "Turbo jet");

// agya.nyalakanMobil();
// agya.matikanMobil();

// 1. CLASS
class Orang 
{
    constructor(nama, umur)
    {
        this.nama = nama;
        this.umur = umur;
    }
    bekerja()
    {
        return `${this.nama} sedang bekerja seperti biasa`;
    }
}

const user1 = new Orang("Darell", 20);
console.log(user1.bekerja());

// 2. INHERITANCE
class Orang1
{
    constructor(nama, umur)
    {
        this.nama = nama;
        this.umur = umur;
    }
    tidur()
    {
        return `${this.nama} sedang tidur`;
    }
    makan()
    {
        return `${this.nama} sedang makan`;
    }
}

class Pelajar extends Orang1
{
    constructor(nama, umur, namaSekolah)
    {
        super(nama, umur);
        this.namaSekolah = namaSekolah;
    }
    belajar()
    {
        return `${this.nama} belajar di ${this.namaSekolah}`
    }
}

const user = new Pelajar("John", 17, "Unklab");
console.log(user);