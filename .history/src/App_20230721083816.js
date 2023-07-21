
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        {/* this if there is anyC */}
        <Route path='*' element={<h1>page not found </h1>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
