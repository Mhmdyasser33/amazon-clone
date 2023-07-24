
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import { useEffect } from 'react';
import { useAuth } from './context/GlobalContext';
import {auth} from './firebase'
import * as actions from './context/Action'
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';

function App() {
 const {dispatch} = useAuth();
  useEffect(() =>{
   auth.onAuthStateChanged((authPerson) =>{
    if(authPerson){
       dispatch({
            type : actions.ADD_USER ,
            user : authPerson
       })
    }else{
     dispatch({
      type : actions.ADD_USER ,
      user : null
     })
    }
   })

  } , [])
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path='/' element={
          <>
          <Header/>
          <Home/>
          </>
        }/>
       <Route path='/checkout' element={
        <>
        <Header/>
        <Checkout/>

        </>
       }/>
        <Route path='/login' element={<Login/>}/>
        {/* this if there is anyComponent matched  */}
        <Route path='*' element={<h1>page not found </h1>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
