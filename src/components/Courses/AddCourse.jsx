import { useContext } from "react";
import { useRef } from "react";
import { v4 as uuidv4 } from 'uuid';

import GeneralContext from "../../store/general-context";

const AddCourse = () => {
  const context = useContext(GeneralContext)

  const courseNameInput = useRef(); 
  const courseNumberInput = useRef(); 
  const courseLengthInput = useRef(); 
  const courseStartDateInput = useRef(); 
  const courseDescriptionInput = useRef(); 

  const clearForm = () => {
    return (
      courseNameInput.current.value = '',
      courseNumberInput.current.value = '',
      courseLengthInput.current.value = '',
      courseStartDateInput.current.value = '',
      courseDescriptionInput.current.value = ''
    )
  }

  const onSaveHandler = (e) => {
    e.preventDefault(); 

    const course = {
      id: uuidv4(), 
      courseName: courseNameInput.current.value,
      courseNumber: courseNumberInput.current.value,
      courseLength: courseLengthInput.current.value,
      courseStartDate: courseStartDateInput.current.value,
      courseDescription: courseDescriptionInput.current.value
    }

    fetch('http://localhost:3010/courses', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(course)
    })

    context.hideModal()
    clearForm()
    window.location.reload()
  }

  return (
      <form>
        <h3>Registrera Kurs</h3>
        <div className="form-control">
          <label htmlFor="courseName">Kursnamn</label>
          <input 
            id="courseName" 
            ref={courseNameInput}
          />
        </div>
        <div className="form-control">
          <label htmlFor="courseNumber">Kursnummer</label>
          <input 
            type="number"
            id="courseNumber" 
            ref={courseNumberInput}
          />
        </div>
        <div className="form-control">
          <label htmlFor="courseLength">kursens längd</label>
          <input 
            id="courseLength" 
            ref={courseLengthInput}
          />
        </div>
        <div className="form-control">
          <label htmlFor="courseStartDate">Startdatum</label>
          <input 
            type="date" 
            id="courseStartDate" 
            ref={courseStartDateInput}
          />
        </div>
        <div className="form-control">
          <label htmlFor="courseDescription">Kurs beskrivining</label>
          <input 
            id="courseDescription" 
            ref={courseDescriptionInput} 
          />
        </div>
        <button 
          className="btn" 
          onClick={onSaveHandler}> Registrera 
        </button>
        <button className="btn" onClick={context.hideModal}>Avbryt</button>
      </form>
  )
}

export default AddCourse;