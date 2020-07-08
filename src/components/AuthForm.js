import React from "react";
import {Auth} from "../services/auth";
import style from "./AuthForm.module.css"

function AuthForm() {
  const handleSubmit = React.useCallback( async(e) => {
    const response = await Auth.login({
      login: e.nativeEvent.target.login.value,
      password: e.nativeEvent.target.password.value
      });
    console.log(response)
    },[]);

  return(
    <form onSubmit={handleSubmit} className={style.authform}>
      <input placeholder="Login" name="login"/>
      <input placeholder="Password" name="password" minLength="4" />
      <button type="submit">Submit</button>
    </form>
  )
}

export default AuthForm;
