import { connect, useSelector } from "react-redux"
import { Button } from '../../utils';
import { register } from '../../redux/actions/auth-action';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Register = (props) => {
  const navigate = useNavigate();
  const userdata = useSelector(state => state.auth)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegisterNewUser = (e) => {
    e.preventDefault();
    props.register({name, email, password});
  }

  useEffect(() => {
    console.log(userdata)
    if(userdata.user.token){
      navigate("/admin")
    }
  }, [userdata])

  return (
    <div className='auth-form-container'>
        <h2>Register</h2>
        <form className='auth-form' onSubmit={handleRegisterNewUser}>
          <input type="text" placeholder='Your name'  value={name} onChange={e => setName(e.target.value)}  />
          <input type="email" placeholder='Your email'  value={email} onChange={e => setEmail(e.target.value)} />
          <input type="password" placeholder='Your password'  value={password} onChange={e => setPassword(e.target.value)}  />
          <Button text={"Register"} type={"submit"} isloading={false} appearence={"success"} />
        </form>
    </div>
  )
}

export default connect (null, { register })(Register)