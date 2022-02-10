import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom';
function Login() {
    return (
        <div>
           <form>
  <div className="login-wrap">
    <div className="login-html">
      <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked /><label htmlFor="tab-1" className="tab">Sign In</label>
      <input id="tab-2" type="radio" name="tab" className="sign-up" /><label htmlFor="tab-2" className="tab"></label>
      <div className="login-form">
        <div className="sign-in-htm">
          <div className="group">
            <label htmlFor="user" className="label">Username</label>
            <input id="user" type="text" className="input" />
          </div>
          <div className="group">
            <label htmlFor="pass" className="label">Password</label>
            <input id="pass" type="password" className="input" data-type="password" />
          </div>
          <div className="group">
            <input id="check" type="checkbox" className="check" defaultChecked />
            <label htmlFor="check"><span className="icon" /> Keep me Signed in</label>
          </div>
          <div className="group">
            <input type="submit" className="button" defaultValue="Sign In" />
          </div>
          <div className="hr" />
          <div className="foot-lnk transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 " >
            
          </div>
          <Link className="text-gray-400" to="/Register">Register Here</Link>
        </div>
        
      </div>
    </div>
  </div>
</form>

        </div>
    )
}

export default Login
