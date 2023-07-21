
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path='/' element={<Header/>}/>
        <Route path='/lgon'/>
        {/* this if there is anyComponent matched  */}
        <Route path='*' element={<h1>page not found </h1>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
