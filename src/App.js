
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import { useEffect } from 'react';
import { useAuth } from './context/GlobalContext';
import {auth} from './firebase'
import * as actions from './context/Action'
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';
import CheckoutProduct from './components/CheckoutProduct/CheckoutProduct';
import Footer from './components/Footer/Footer';
import Payment from './components/Payment/Payment';
import ProtectedRoutes from './components/ProtectedRoutes';

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
         < ProtectedRoutes>
          <Header/>
          <Home/>
         </ProtectedRoutes>
          </>
        }/>
       <Route path='/checkout' element={
        <>
        <Header/>
        <Checkout/>
        </>
       }/>
       <Route path='/payment' element={
        <>
         <Header/>
         <Payment/>
        </>
       }/>
        <Route path='/login' element={<Login/>}/>
        {/* this if there is anyComponent matched  */}
        <Route path='*' element={<h1>page not found </h1>}/>
      </Routes>
      <Footer/>
     </Router>
    </div>
  );
}

export default App;
