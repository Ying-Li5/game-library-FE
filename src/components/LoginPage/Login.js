import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import style from './Login.css'

export default function Login() {
    return(
        <div className='login-page' style={style}>
          <h2>Log In to Your Account</h2>

          <div class='mb-3'>
            <label for="exampleFormControlInput1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
          </div>
          
          <div class='mb-3'>
            <label for="exampleFormControlInput1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Password" />
          </div>

          <div class='button'>
            <button type="button" class="btn btn-primary">Continue</button>
          </div>

          <div className="help-area">
            <div className="forgot-password">
                <a href="#">Help, I can't sign in</a>
            </div>

            <div className="no-account">
                Don't have a Steam account? 
                <br />
                <a href="#">Create a Free Account</a>
            </div>
          </div>
        </div>
    )
}