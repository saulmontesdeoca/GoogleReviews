import AuthPage from './pages/Auth';
import MainPage from './pages/MainPage';
import List from './pages/List';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<AuthPage/>} />
          <Route exact path="/home" element={<MainPage/>} />
          <Route exact path="/list/:element" element={<List/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
 