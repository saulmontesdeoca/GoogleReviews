import AuthPage from './pages/Auth';
import MainPage from './pages/MainPage';
import List from './pages/List';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import useApp from './hooks/userApp.hook';

function App() {

  const {isAuth} = useApp();

  if (!isAuth) {
    return (
        <div className="App">
          <Router>
            <Routes>
              <Route path="/*" element={<Navigate to='/' />} />
              <Route exact path="/" element={<AuthPage />} />
            </Routes>
          </Router>
        </div>
      );
  }
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<MainPage/>} />
          <Route exact path="/list/:element" element={<List/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
 