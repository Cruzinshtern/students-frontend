import React from "react";
import style from "./Form.module.css";
import {v4 as uuid} from "uuid";



function Form ({onSubmit, item}) {

  function handleClick (e) {
    e.preventDefault();
    const data = {
      id: !!item ? item.id : uuid(),
      firstName: e.target.elements.firstName.value,
      lastName: e.target.elements.lastName.value,
      gender: e.target.elements.gender.value,
      language: e.target.elements.language.value,
      phone: e.target.elements.phone.value,
      email: e.target.elements.email.value,
      description: e.target.elements.description.value
    };
    onSubmit(data);
    e.target.reset();
  }

  return (
    <form onSubmit={handleClick} className={style.student_form}>
      <p className={style.heading}>Student Application Form</p>
      <div className={style.st_name}>
        <p>First and Last name</p>
        <input placeholder="First name" name="firstName" defaultValue={item ? item.firstName : ""}/>
        <input placeholder="Last name" name="lastName" defaultValue={item ? item.lastName : ""}/>
      </div>
      <div className={style.st_gender}>
        <p>Gender</p>
        <select name="gender" defaultValue={item ? item.gender : ""}>
          <option>Male</option>
          <option>Female</option>
        </select>
      </div>
      <div className={style.st_lang}>
        <p>Language</p>
        <select name="language" defaultValue={item ? item.language : ""}>
          <option>English</option>
          <option>French</option>
          <option>German</option>
          <option>Spanish</option>
          <option>Italian</option>
        </select>
      </div>
      <div className={style.st_phone}>
        <p>Phone</p>
        <input name="phone" defaultValue={item ? item.phone : ""} minLength="10"/>
      </div>
      <div className={style.st_email}>
        <p>E-mail</p>
        <input name="email" defaultValue={item ? item.email : ""}/>
      </div>
      <div className={style.st_desc}>
        <p>Additional information (if necessary)...</p>
        <textarea placeholder="Type here..." name="description" defaultValue={item ? item.description : ""}/>
      </div>
        <button className={style.formbtn} type="submit">{item ? "CONFIRM UPDATES" : "ADD STUDENT TO THE LIST"}</button>
    </form>
  );
};

export default Form;
