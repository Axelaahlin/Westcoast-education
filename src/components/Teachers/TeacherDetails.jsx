import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Subjectlist from "./SubjectList";


const TeacherDetails = () => {
  const [teacher, setTeacher] = useState({})
  const [showSubjects, setShowSubjects] = useState(false)
  const {id} = useParams(); 
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`http://localhost:3010/teachers/${id}`);
      const json = await data.json()
      return json
    }

    const setData = async () => {
      const results = await fetchData()
      .catch(console.error)

      setTeacher(results)
    }

    setData()
  },[id])

  const toggleShowSub = () => {
    setShowSubjects(!showSubjects)
  }
 
  return (
    <section className="page-container" data-testid="course-details-component">
      <h2>{teacher.firstName} {teacher.lastName}</h2>
      <div className="course-details-container">
        {
        teacher.favSubjects ?  <button className="btn" onClick={toggleShowSub}>{showSubjects 
        ? "Dölj kompetenser" : "Visa kompetenser"}</button> 
        : <p>Denna läraren har glömt att fylla i sina kompetenser, kontakta läraren med informationen undertill</p>
        }
        {showSubjects && <Subjectlist favSub={teacher.favSubjects}/>}
        <div className="teacher-details">
          <h3>Personlig Information</h3>
          <p>Personnummer:  {teacher.PSN}</p>
          <p>Email: {teacher.email}</p>
          <p>Telefonnummer: {teacher.phoneNumber}</p>
        </div>
      </div>
    </section>
  )
}

export default TeacherDetails;