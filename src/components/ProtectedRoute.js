import React, {useState, useEffect} from "react";
import {Redirect, Route} from "react-router-dom"
import {Auth} from "../services/auth";

function ProtectedRoute(props) {

  const [isAuth, setIsAuth] = useState(true);


  useEffect(
    () => {
      Auth.isValid().then((data) => {
        setIsAuth(data.isAuthorized)
      }).catch((err) => {
        console.error(err)
      })
    }, []);


  return isAuth
    ? <Route {...props}/>
    : <Redirect to="/login"/>
}

export default ProtectedRoute;
