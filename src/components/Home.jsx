import CourseList from "./Courses/CourseList"

const Home = () => {
  
  return(
    <section className="page-container" data-testid="home-component">
      <h2 className="page-title">Välkommen till Westcoast Education</h2>
      <div className="home-preamble">
        <p>Funderar du på att börja studera? Kolla då in Westcoast educations kurser här in under eller gå in på "Våra kurser" bland flikarna högst upp på sidan.</p>
      </div>
      <CourseList btn={false}/>
    </section>
  )
}

export default Home;