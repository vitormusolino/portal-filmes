export default function Login({isLogged, handleLogin}){

    return(
        <>
        <div className="flex gap-4 items-center">
            {isLogged && 'Bem vindo!'}
            <button 
            onClick={handleLogin} 
            className="bg-white text-purple-800 px-4 py-1 rounded"> 
            {isLogged ? "Logout" : "Login"} </button>
        </div>
        </>
    )
}