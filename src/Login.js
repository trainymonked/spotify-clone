import React from 'react';
import './Login.css';
import { loginUrl } from './spotify';
import dLogo from './tempSVGvalue';

function Login() {
  return (
    <div className="login">
      <svg viewBox="0 0 1120 340" style={{color: '#1db954', width: '60%'}}>
        <title>Spotify</title>
        <path fill="currentColor" d={dLogo}></path>
      </svg>
      <a href={loginUrl}>Sign in with Spotify</a>
    </div>
  );
}

export default Login;
