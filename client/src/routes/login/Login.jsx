import {useLayoutEffect, useState} from 'react'
import {connect, useSelector} from "react-redux";
import { Button } from '../../utils'
import { login } from '../../redux/actions/auth-action';
import { useNavigate } from 'react-router-dom';
import { validateToken } from '../../helpers';

const Login = (props) => {
  const navigate = useNavigate();
  const userdata = useSelector(state => state.auth)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginUser = (e) => {
    e.preventDefault();
    props.login({email, password});
  }

  useLayoutEffect(() => {
    if (userdata.user && userdata.user.token && validateToken(userdata.user.token)) {
      navigate("/admin");
    }
  }, [userdata]);

  return (
    <div className='auth-form-container'>
        <h2>Login</h2>
        <form className='auth-form' onSubmit={handleLoginUser}>
        <input type="email" placeholder='Your email'  value={email} onChange={e => setEmail(e.target.value)} />
          <input type="password" placeholder='Your password'  value={password} onChange={e => setPassword(e.target.value)}  />
          <Button text={"Login"} type={"submit"} isloading={false} appearence={"success"} />
        </form>
    </div>
  )
}

export default connect (null , { login }) (Login)