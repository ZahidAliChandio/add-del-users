import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import './App.css';
import {
  BrowserRouter as Router,
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Home/>
      
      {/* <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Routes>
          <Route path='/register' element={<Register />} />
        </Routes>
        <Routes>
          <Route path='/users' element={<Register />} />
        </Routes>
      </Router> */}

      {/* <Error> */}
    </div>
  );
}

export default App;
