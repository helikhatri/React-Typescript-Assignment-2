import React, { Component,useState,useEffect  } from "react";
import Routes from "./Routes";
import { useHistory } from "react-router-dom";
import { AppContext } from "./libs/contextLib";
import Header from "./containers/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

let path=window.location.pathname;

const App = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  let history = useHistory();
  
  useEffect(() => {
    onLoad();
  }, []);
  
  async function onLoad() {
    try {
      if(typeof localStorage.token !== 'undefined') {
        userHasAuthenticated(true);
      }
      else
      {
        //history.push('/Login');
      }
    }
    catch(e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }
    setIsAuthenticating(false);
  }
  
  function handleLogout() {
    userHasAuthenticated(false);
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    history.push('/Login');
  }
  return (

    <>
    {!isAuthenticating && (
    <div className="Signup">
    <div className="App container py-3">
    <Header isAuthenticated={isAuthenticated} click={handleLogout}></Header>
    <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
      <Routes isAuthenticated ={isAuthenticated}/>
    </AppContext.Provider>
  </div>
  </div>
  )}
  </>
  )
}

export default App;
