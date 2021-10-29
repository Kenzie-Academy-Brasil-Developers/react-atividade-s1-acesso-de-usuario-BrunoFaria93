import './styles.css'
function RestrictedPage({isLoggedIn, user, Login, Logout}){

    return(
        <div className='container-1'>
            {isLoggedIn ? (
            <div className='container-2'>
                <h2>Bem vindo, {user}</h2>
                <button onClick={() => Logout()}>Logout</button>
            </div>
            ):(
            <div className='container-2'>
                <h2>Você não pode acessar essa página</h2>
                <button onClick={() =>  Login()}>Login</button>
            </div>
            )}
        </div>
    )
}

export default RestrictedPage