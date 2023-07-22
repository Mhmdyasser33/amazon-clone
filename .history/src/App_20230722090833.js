
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import { useEffect } from 'react';
import { UseAuth } from './context/GlobalContext';
import {onAuthStateChanged} from 'firebase/auth'
import {auth} from './firebase'
import {} from './'
function App() {
  //const {user} = UseAuth() ;
  useEffect(() =>{
   auth.onAuthStateChanged((user) =>{

   })

  } , [])
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path='/' element={<Header/>}/>
        <Route path='/login' element={<Login/>}/>
        {/* this if there is anyComponent matched  */}
        <Route path='*' element={<h1>page not found </h1>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
