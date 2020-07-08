import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Auth} from "../services/auth";

function Navbar () {

  const [isAuth, setIsAuth] = useState(false);

  useEffect(
    () => {
      Auth.isValid().then((data) => {
        setIsAuth(data.isAuthorized)
      }).catch((err) => {
        console.error(err)
      })}, []);


  const handleLogout = React.useCallback( async () => {
      await Auth.logout();
      setIsAuth(false)
    }, []);

  return !isAuth
    ? <h2>Please, log in before proceed any further</h2>
    : <nav id="nav_bar">
      <ul>
        {/*<li>*/}
        {/*  <Link to="/">Student Application Form</Link>*/}
        {/*</li>*/}
        <li>
          <Link to="/list">Student List</Link>
        </li>
        <li>
          <Link to="/login" onClick={handleLogout}>Logout</Link>
        </li>
      </ul>
    </nav>

}

export default Navbar;
