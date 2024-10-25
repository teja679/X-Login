import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('Invalid username or password')
    // console.log('user', userName);
    // console.log('password', password);
    if (userName === 'user' && password === 'password') {
      setMessage(`Welcome, ${userName}!`);
    }
  }
  return (
    <div className="App">
      <h1>Login Page</h1>
      {message &&
        <p>{message}</p>
      }
      <form onSubmit={handleSubmit}>
        <div className='username'>
          <label>Username: </label>
          <input type='text' onChange={(e) => setUserName(e.target.value)} required />
        </div>
        <div className='password'>
          <label>Password: </label>
          <input type='password' onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
