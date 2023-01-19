import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useContext } from 'react';

import Navbar from './components/Layout/Navbar';
import Home from './components/Home';
import CourseList from './components/Courses/CourseList';
import CourseDetails from './components/Courses/CourseDetail';
import TeacherList from './components/Teachers/TeacherList';
import TeacherDetails from './components/Teachers/TeacherDetails';
import Modal from './components/UI/Modal';

import GeneralContext from './store/general-context';


function App() {
  const context = useContext(GeneralContext)

  return (
    <Router>
      <header>
        <Navbar/>
      </header>
      <main>
        {context.modalStatus && (
         <Modal/> 
        )} 
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
           <Route
            path='/courses'
            element={<CourseList btn={true}/>}
          />  
        <Route
          path='/teachers'
          element={<TeacherList />}
        />
        <Route
          path='/courses/:id'
          element={<CourseDetails />}
        />
        <Route
          path='/teachers/:id'
          element={<TeacherDetails />}
        />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
