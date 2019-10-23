import React, { useEffect, useState } from 'react';
// import ReactDOM from "react-dom";
import { Route } from 'react-router-dom';

import Header from './components/Header.js';
import './App.css';
import Landing from './components/landing/Landing.js';
import SignUp from './components/SignUp.js';
import TeacherLanding from './components/teacher/TeacherLanding.js';
import StudentLanding from './components/student/StudentLanding.js';
import Login from './components/Login';
import CreateTest from './components/test/CreateTest';
import TestBank from './components/teacher/TestBank';
import ClassesDashboard from './components/teacher/ClassesDashboard';
import ClassViewer from './components/teacher/ClassViewer';
import TestViewer from './components/teacher/TestViewer';
import TakeTest from './components/student/TakeTest.js';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const populateUser = obj => {
    setCurrentUser(obj);
  };

  return (
    <div className='App'>
      <Header
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        currentUser={currentUser}
        populateUser={populateUser}
      />

      <Route exact path='/' render={props => <Landing {...props} />} />
      <Route
        path='/SignUp'
        render={props => (
          <SignUp
            {...props}
            populateUser={populateUser}
            setLoggedIn={setLoggedIn}
          />
        )}
      />
      <Route
        path='/Login'
        render={props => (
          <Login
            {...props}
            populateUser={populateUser}
            setLoggedIn={setLoggedIn}
          />
        )}
      />

      {loggedIn && (
        <div>
          {/* set this route to correct path if not already done */}

          {/* ========= STUDENT ROUTES =============
              ========= STUDENT ROUTES =============
              ========= STUDENT ROUTES =============
          */}
          <Route
            exact
            path='/Student'
            render={props => (
              <StudentLanding
                {...props}
                currentUser={currentUser}
                loggedIn={loggedIn}
              />
            )}
          />
          <Route
            path={`/Student/TakeTest/:testid`}
            render={props => (
              <TakeTest
                {...props}
                loggedIn={loggedIn}
                currentUser={currentUser}
              />
            )}
          />
          {/* ========= TEACHER ROUTES =============
              ========= TEACHER ROUTES =============
              ========= TEACHER ROUTES =============
          */}
          <Route
            path='/Teacher'
            render={props => (
              <TeacherLanding
                {...props}
                currentUser={currentUser}
                loggedIn={loggedIn}
              />
            )}
          />

          <Route
            exact
            path='/Teacher/create-test'
            render={props => (
              <CreateTest
                {...props}
                loggedIn={loggedIn}
                currentUser={currentUser}
              />
            )}
          />
          <Route
            exact
            path='/Teacher/test-bank'
            render={props => (
              <TestBank
                {...props}
                loggedIn={loggedIn}
                currentUser={currentUser}
              />
            )}
          />
          <Route exact path={'/test-viewer/:id'} component={TestViewer} />
          <Route
            path='/Teacher/classes-dashboard'
            component={ClassesDashboard}
          />

          <Route
            path={`/class-viewer/:id/:id`}
            render={props => <ClassViewer {...props} />}
          />
        </div>
      )}
    </div>
  );
}

export default App;
