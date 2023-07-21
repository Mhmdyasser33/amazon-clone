
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='*' element={<h1></h1>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;