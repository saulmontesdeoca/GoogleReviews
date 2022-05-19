import logo from './logo.svg';
import './App.css';
import GoogleLogin from 'react-google-login';
import { signIn } from './util/firebase_config';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={signIn}>Sign in with Google</button>
      </header>
    </div>
  );
}

export default App;
 