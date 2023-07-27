
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import { useEffect } from 'react';
import { useAuth } from './context/GlobalContext';
import {auth} from './firebase'
import * as actions from './context/Action'
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';
import Payment from './components/Payment/Payment';
import Orders from './components/Orders/Orders';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

function App() {
 const {dispatch} = useAuth();
 // to make a connection between clientSide and stripe
 const stripePromise = loadStripe("pk_test_51NYGcGHVgh4SqQvocZvMaXF3wOam3CKF5vUkIQelBAjoBCK2uuUY7bgcuRw9Mg0jBe4zGKu5BDNfsq7aHsDLiGvr00A0I321hJ") ;
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
       <Route path='/payment' element={
        <>
         <Header/>
         <Elements stripe={stripePromise}>
         <Payment/>
         </Elements>
        </>
       }/>
       <Route path='/orders' element={<>
       <Header/>
       <Orders/>
       </>}/>
        <Route path='/login' element={<Login/>}/>
        {/* this if there is anyComponent matched  */}
        <Route path='*' element={<h1>page not found </h1>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
