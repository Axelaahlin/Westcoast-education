import { useContext } from "react";
import { useState, useEffect } from "react";
import GeneralContext from "../../store/general-context";


const TeacherList = () => {
  const context = useContext(GeneralContext)
  const [teachers, setTeachers] = useState([])

  useEffect(() => {
    fetch('http://localhost:3010/teachers')
    .then(res => {return res.json()})
    .then((data) => {setTeachers(data)})
  },[])

  const openModal = () => {
    context.modalContentHandler("teacher")
    context.showModal()
  }

return(
  <section className="page-container" data-testid="teachers-list-component">
    <h2 className="page-title">Våra Lärare</h2>
    <button className="btn" onClick={openModal}>Ny lärare? Registrera dig här!</button>

    <ul className="display-area">

      {teachers.map((teacher => (
        <li className="display-item"  key={teacher.firstName}>
          <p>{teacher.firstName} {teacher.lastName}</p>
          <p>{teacher.PSN}</p>
          <p>{teacher.email}</p> 
          <p>{teacher.phoneNumber}</p>
          <a href={`/teachers/${teacher.id}`}>Läs mer om mig här</a> 
        </li>
      )))}

    </ul>
    
  </section>
)
}

export default TeacherList;