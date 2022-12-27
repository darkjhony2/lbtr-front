import profile from "../../assets/img/a.png";
import email from "../../assets/img/email.jpg";
import pass from "../../assets/img/pass.png";
import { useDispatch } from 'react-redux'
import * as authApi from '../../api/authApi'
import { useState } from "react";
import { singIn } from '../../store/slices/auth'

export const LoginPage = () => {

  const [user, setUser] = useState({
    username: '',
    password: ''
  })

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    const { token } = await authApi.login(user);
    if (token) {
      localStorage.setItem("owl", token)
      dispatch(singIn())
    }
    localStorage.setItem('logged', true)
  }

  return (

    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src={profile} alt="profile" className="profile" />
            </div>
          </div>
          <div>
            <h1>Login Page</h1>
            <div>
              <img src={email} alt="email" className="email" />
              <input type="text" placeholder="usuario" className="name login-input" name="username" onChange={handleChange} value={user.username} />
            </div>
            <div className="second-input">
              <img src={pass} alt="pass" className="email" />
              <input type="password" placeholder="constraseña" className="name login-input" name="password" onChange={handleChange} value={user.password} />
            </div>
            <div className="login-button">
              <button className="button-customized" onClick={handleSubmit} >Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
