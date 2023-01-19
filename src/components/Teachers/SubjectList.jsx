const Subjectlist = (props) => {
  return (
    <ul className="display-area">
      {props.favSub.map((sub) => {
        return (
          <li key={sub}>{sub}</li>
        )
      })}
    </ul>
  )
}

export default Subjectlist;