import { useContext } from "react";
import { useState, useEffect } from "react";

import GeneralContext from "../../store/general-context";

const CourseList = (props) => {
  const [courses, setCourses] = useState([])
  const context = useContext(GeneralContext)

  useEffect(() => {
    fetch('http://localhost:3010/courses')
    .then(res => {return res.json()})
    .then((data) => {setCourses(data)})
  },[])

  const openModal = () => {
    context.modalContentHandler("course")
    context.showModal()
  }
 
return(
  <section className="page-container" data-testid="course-list-component">
    <h2 className="page-title">Våra Kurser</h2>
    {props.btn && <button className="btn" onClick={openModal}>Registrera Kurs</button> }
    <ul className="display-area">

      {courses.map((course) => (
        <li className="display-item" key={course.id}>
          <p className="display-item-bold">{course.courseName}</p>
          <p> Kursnummer: <b>{course.courseNumber}</b></p>
          <p>{course.courseLength}</p>
          <p className="display-item-bold">Start datum {course.courseStartDate}</p>
          <a href={`/courses/${course.id}`}>Läs mer här</a> 
        </li>
        
      ))}
    </ul>
  </section>
)
}

export default CourseList;