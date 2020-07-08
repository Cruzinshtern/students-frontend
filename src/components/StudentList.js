import React from "react";
import style from "./StudentList.module.css"
import Student from "./Student";
import {Link} from "react-router-dom"

function StudentList ({students, ...props}) {


  return (
    <div className={style.student_list}>
      <Link to="/">
        <h3>Add</h3>
      </Link>
      <div className={style.student_cards}>
        {students.map(student => <Student key={student.id} student={student} {...props}/>)}
      </div>
    </div>
  );}

export default StudentList;
