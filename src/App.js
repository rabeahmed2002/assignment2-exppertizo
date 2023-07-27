import './App.css';
import React, {useState} from 'react';

function App() {

  const [login, setLogin]=useState(true)

  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')
  const [country, setCountry]=useState('')
  const [username, setUsername]=useState('')

  const handleEmailChange=(event)=>{
    setEmail(event.target.value)
  }

  const handlePasswordChange=(event)=>{
    setPassword(event.target.value)
  }

  const handleCountryChange=(event)=>{
    setCountry(event.target.value)
  }

  const handleUsernameChange=(event)=>{
    setUsername(event.target.value)
  }

  const handleClick=()=>{
    setLogin(!login)
  }

  return (
    <div className="App">

          {login ? 

            <div className='container'>
         <form className='signup-form'>
            <div>
              <label>Email: </label>
              <input type='email' className='email' value={email} onChange={handleEmailChange}/>
            </div>

            <div>
              <label>Password: </label>
              <input type='password'className='password' value={password} onChange={handlePasswordChange}/>
            </div>

            <button>
              Login
            </button>

            <button onClick={handleClick}>Click here to signup</button>
            
          </form>
            </div>

            : 

            <div className='container'>

              <form className='login-form'>
              <div>
                <label>Email: </label>
                <input type='email' className='email' value={email} onChange={handleEmailChange}/>
              </div>

              <div>
                <label>Username: </label>
                <input type='text' className='email' value={username} onChange={handleUsernameChange}/>
              </div>

              <div>
                <label>Country: </label>
                <input type='text' className='email' value={country} onChange={handleCountryChange}/>
              </div>

              <div>
                <label>Password: </label>
                <input type='password' className='password' value={password} onChange={handlePasswordChange} />
              </div>

              <button>
                Signup
              </button>

              <button onClick={handleClick}>Click here to login</button>
              
            </form> 
            </div>}
    </div>
  );
}

export default App;
