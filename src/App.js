import React, {useEffect, useState} from 'react'
import firebase from 'firebase';
import Todo from './Component/Todo';

import Login from './Component/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch,Route,BrowserRouter,Redirect } from 'react-router-dom';
import Signup from './Component/Signup';
function App(){
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const PrivateRoute = ({ component: Component, isAuthenticated, ...rest}) => (
    <Route
      {...rest}
      render={props => (
        isAuthenticated
        ? (
           <Component {...props} />
        )
        : (<Redirect to={{ pathname: '/', state: { from: props.location} }} />)
      )}
    />
    );
  
  useEffect(() =>{
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        setIsAuthenticated(true)
      }else{
        setIsAuthenticated(false)
      }
    })
  })

  return(
    <div>
      <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Login}/>
    
      
     <Route exact path='/signup' component={Signup}/>
   
   
     
     <PrivateRoute exact path='/todo' component={Todo} isAuthenticated={isAuthenticated} />
     </Switch>
     </BrowserRouter>
</div>
  )
}
export default App;