import React from 'react';
import { Link, useLocation, useHistory, Redirect } from 'react-router-dom';
import './Login.css';
import useAuth from './../../hooks/useAuth';

const Login = () => {
  const { signInWithGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || '/shop';

  const handleGoogleLogin = () => {
    signInWithGoogle().then(result => {
      history.push(redirect_uri);
    });
  };

  return (
    <div className="login-form">
      <div>
        <h2>Login</h2>
        <form>
          <input type="email" name="email" id="" placeholder="Your Email" />
          <br />
          <input
            type="password"
            name="password"
            id=""
            placeholder="Your Password"
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
        <p>
          new to ema-jhon? <Link to="/register">Create Account</Link>{' '}
        </p>
        <div>---------or---------</div>
        <button className="btn-regular" onClick={handleGoogleLogin}>
          Google Sing In
        </button>
      </div>
    </div>
  );
};

export default Login;
