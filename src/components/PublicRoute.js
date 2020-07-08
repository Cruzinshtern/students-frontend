import React, {useState, useEffect} from "react";
import {Redirect, Route} from "react-router-dom"
import {Auth} from "../services/auth";



function PublicRoute (props) {

  const [isAuth, setIsAuth] = useState(false);


  useEffect(
    () => {
      Auth.isValid().then((data) => {
        setIsAuth(data.isAuthorized)
      }).catch((err) => {
        console.error(err)
      })}, []);

  return !isAuth
    ? <Route {...props}/>
    : <Redirect to="/" />

}

export default PublicRoute;
