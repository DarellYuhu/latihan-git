import React, {useState} from "react"

export default function Header()
{
    // let title = "Welcome to my website";
    const subtitle = "This is for learning reactJS";

    const [title, setTitle] = useState("Welcome to my website");

    const handleClick = () =>
    {
        setTitle("Selamat datang di website saya");
        console.log(title);
    }

    return (
        <div>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}

// get website (any website)
// pindahkan website ke react (ada video)
// pesah komponen
// simpan data kedalam json server
// load data ke website (bisa pakai axios/fetch)