import React from "react";
import style from "./Student.module.css"
import {Link} from "react-router-dom";

function Student ({student, onEdit, onDelete}) {
  return (
    <div className={style.studentCard}>
      <div>
        <div className={style.cartHeading}>
          <button onClick={() => onDelete(student.id)} className={style.cartHeading_btn_del}>Delete</button>
          <h1 >Student Card</h1>
          <Link to="/">
          <button onClick={() => onEdit(student)} className={style.cartHeading_btn_edt}>Edit</button>
          </Link>
        </div>
        <div className={style.studentName}>
          <div>{student.gender === "Male" ? "Mr." : "Ms."}</div>
          <div className={style.studentName_firstName}>{student.firstName}</div>
          <div>{student.lastName}</div>
        </div>
        <div className={style.studentLang}>I learn: {student.language}</div>
        <div className={style.studentPhone}>My phone is: {student.phone}</div>
        <div className={style.studentEmail}>My e-mail is: {student.email}</div>
      </div>
      <div className={style.studentDesc}>
        {student.description === "" ? "" : `Additional Info: ${student.description}`}
      </div>
    </div>
  )
}

export default Student;
