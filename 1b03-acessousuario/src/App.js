import './App.css';
import { useState } from 'react';
import RestrictedPage from './components/RestrictedPage';

function App() {
  const[isLoggedIn, setIsLoggedIn] = useState(false)
  const user = 'Bruno'

  function Login (){
    setIsLoggedIn(!isLoggedIn)  
  }
  function Logout (){
    setIsLoggedIn(!isLoggedIn)
  } 
  
  return (
    
    <div className="App">
      <RestrictedPage isLoggedIn={isLoggedIn} user={user} Login={Login} Logout={Logout}/>
    </div>
  );
}

export default App;
