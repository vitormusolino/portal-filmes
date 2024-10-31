import { NavLink } from "react-router-dom";
import Login from "./Login";
import { useState } from "react";


export default function Header(){

    const [isLogged, setIsLogged] = useState(false)
    const handleLogin = () => {
        setIsLogged(!isLogged)
    }

    return(
        <>
            <header className="flex w-full h-20 bg-purple-800 justify-around text-white items-center text-xl font-bold">
                <div>
                    <h1>CineApp</h1>
                </div>
                <nav>
                    <ul className="flex gap-4">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/movies'>Filmes</NavLink></li>
                        <li><NavLink to='/genre'>Gêneros</NavLink></li>
                        {isLogged && <li><NavLink to='/favoritos'>Sua lista</NavLink></li>}
                    </ul>
                </nav>
                <Login isLogged={isLogged} handleLogin={handleLogin}/>
            </header>
        </>
    )
}