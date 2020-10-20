import React, {useState} from 'react';
import './App.css';
import Header from './Header';
import Login from './Login';
import Sidebar from './Sidebar';
import {BrowserRouter as Router, Switch , Route} from "react-router-dom"
import Chat from "./Chat"
import { useStateValue } from './StateProvider';

function App() {
  
  
  const [ {user} , dispatch] = useStateValue();

  return (
    <div className="App">
      
      <Router>
        {!user ? (<Login />) : (
           
          <>
          
          <Header />
         <div className="app__body">
         <Sidebar />

         <Switch>
           <Route path="/room/:roomId">
             <Chat />

           </Route>

           <Route path="/room/AZCPfCi1TCag7vGvjNLT">
             <h1>Welcome</h1>

           </Route>

         </Switch>


       </div>
       </>
        )}        
      </Router>
      

    </div>
  );
}

export default App;
