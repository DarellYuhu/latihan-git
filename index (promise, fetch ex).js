/*
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*  Programmed by Mona, Darell Christopher    *
*  Faculty of Computer Science               *
*  2nd Grade, 2nd Semester (Summer school)   *
*  JavaScript (ES6 Exercise)                 *
*  Promise, Fetch, async/await               *
==============================================
*/

// PROMISE
const helloWorld = () => 
{
    return new Promise((resolve) => 
    {
        setTimeout(() => {
            resolve("Hello World");
        }, 2000);
    })
}

const messages = async () =>
{
    const msg = await helloWorld();
    console.log(msg);
}
messages();

// FETCH
const ambilDataUser = () =>
{
    new Promise((resolve, reject) => 
    {
        fetch("https://reqres.in/api/users")
        .then((response) => 
        {
            return response.json();
        })
        .then((users) =>
        {
            console.log(users.data);
        })
    })
}
// must be run on browser side
ambilDataUser();

// ASYNC/AWAIT
const ambilDataUserAsync = async () =>
{
    const response  = await fetch("https://reqres.in/api/users");
    const users = await response.json();
    console.log(users.data);
    console.log(`this is from async/await`);
}
// must be run on browser side
ambilDataUserAsync();