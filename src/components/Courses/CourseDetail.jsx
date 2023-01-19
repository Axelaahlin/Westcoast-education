import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const CourseDetails = () => {
  const [course, setCourse] = useState({})
  const {id} = useParams(); 
  
  useEffect(() => {
    fetch(`http://localhost:3010/courses/${id}`)
    .then(res => {return res.json()})
    .then((data) => {setCourse(data)})
  },[id])
 
  return (
    <section className="page-container" data-testid="course-details-component">
      <h2>Kurs detaljer</h2> 
      <div className="course-details-container">
        <h2>{course.courseName}</h2>
        <p>Kursens längd: {course.courseLength}</p>
        <p>Kursens start datum: {course.courseStartDate}</p>
        <p>Kursensnummer: {course.courseNumber}</p>
        <p className="course-desc">{course.courseDescription}</p>
      </div>
    </section>
  )
}

export default CourseDetails;