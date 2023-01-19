import { useRef } from "react";
import { v4 as uuidv4 } from 'uuid';
import GeneralContext from "../../store/general-context";
import { useContext } from "react";



const AddTeacher = () => {
  const context = useContext(GeneralContext)

  const firstNameInput = useRef();
  const lastNameInput = useRef();
  const psnInput = useRef();
  const emailInput = useRef();
  const phoneNumberInput = useRef();
  const SubjectInput = useRef();
  const newSubjectList = [];
  
  const clearForm = () => {
    return (
    firstNameInput.current.value = '',
    lastNameInput.current.value = '',
    psnInput.current.value = '',
    emailInput.current.value = '',
    phoneNumberInput.current.value = ''
    )
  }

  const onAddSubjectHandler = (e) => {
    e.preventDefault()

    const currenSubject = SubjectInput.current.value;

    newSubjectList.push(currenSubject);
    
    SubjectInput.current.value = "";
  }

  const onSaveHandler = (e) => {
    e.preventDefault(); 


    const teacher = {
      id: uuidv4(),
      firstName: firstNameInput.current.value,
      lastName: lastNameInput.current.value,
      PSN: psnInput.current.value,
      email: emailInput.current.value,
      phoneNumber: phoneNumberInput.current.value,
      favSubject: newSubjectList
    }

    fetch('http://localhost:3010/teachers', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(teacher)
    })

    clearForm();
    context.hideModal()

    window.location.reload()
  }


  return (
    <form>
      <h3>Registrera Ny Lärare</h3>
      <div className="form-control">
        <label htmlFor="firstName">Förnamn</label>
        <input id="firstName" ref={firstNameInput}/>
      </div>
      <div className="form-control">
        <label htmlFor="lastName">Efternamn</label>
        <input id="lastName" ref={lastNameInput}/>
      </div>
      <div className="form-control">
        <label htmlFor="psn">Personnummer</label>
        <input id="psn" ref={psnInput} />
      </div>
      <div className="form-control">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" ref={emailInput} />
      </div>
      <div className="form-control">
        <label htmlFor="phoneNumber">telefonmummer</label>
        <input type="tel" id="phoneNumber" ref={phoneNumberInput} />
      </div>
      <div className="form-control">
        <label htmlFor="subjects">Kompetenser</label>
        <input type="tel" id="subjects" ref={SubjectInput} />
        <button onClick={onAddSubjectHandler} className="btn">Lägg till kompetens</button>
      </div>
      
        <button 
          onClick={onSaveHandler}
          className="btn"
        >
          Registrera
        </button>
        <button 
          onClick={context.hideModal}
          className="btn"
        >
          Avbryt
        </button>
    </form>
  )
}

export default AddTeacher;