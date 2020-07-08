import React, {useEffect, useState} from 'react';
import Form from "./components/Form";
import StudentList from "./components/StudentList";
import AuthForm from "./components/AuthForm";
// import Logout from "./components/Logout"
import PublicRoute from "./components/PublicRoute";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import "./App.css"
import {Students} from "./services/students";
// import {Auth} from "./services/auth";
import logo from './images/smallbee.jpg'
import {BrowserRouter, Switch} from "react-router-dom";

function App() {
  //Here we have different variables ------------------------------------------

  const [students, setStudents] = useState([]);
  const [editableItem, setEditableItem] = useState(null);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(
    () => {
      Students.getStudents().then((data) => {
        setStudents(data);
      });

    }, []
  );

  //Here we have different handlers----------------------------------------

  const handleSubmit = async (student) => {
    let response;
    if(!!editableItem) {
      response = await Students.editStudent(student);
      setEditableItem(null);
    } else {
      response = await Students.addStudent(student)
    }
    setStudents(response.data);
  };

  const deleteStudent = async (id) => {
    const data = await Students.deleteStudent(id);
    setStudents(data.data);
  };


  //Here we have the actual "return"---------------------------------------

  return (
    <div>
      <BrowserRouter>
      <div id="headingStyle">
        <img src={logo} id="logo" alt=""/>
        <h2 id="titleStyle">BeeLingvo Language School</h2>
      </div>
        <Navbar />
              <Switch>
                <ProtectedRoute exact path="/">
                  <Form onSubmit={handleSubmit} item={editableItem} />
                </ProtectedRoute>
                <ProtectedRoute  path="/list">
                  <StudentList students={students} onEdit={setEditableItem} onDelete ={deleteStudent}/>
                </ProtectedRoute>
                <PublicRoute path="/login" component={AuthForm} />
              </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
