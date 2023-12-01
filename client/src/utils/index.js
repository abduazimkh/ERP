import "./index.scss";

const Button = ({ text, type, isloading, appearence, icon, click }) => {


  return (
    <button className={`btn ${appearence}`} type={type} disabled={isloading} onClick={click} >
       {isloading ? "Loading..." : <>{icon} {text}</>}
    </button>
  )
}

export { Button }