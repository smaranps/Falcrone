import React from "react";
import "./Login.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function Login(){
    return(
<div id="logincont">
    <h1 className="text-center">Login</h1>
    <br/>
    <br/>
    <div className="container bg-success">
<form className="form-group form-inline">
    <div className="container"><label>Email:</label>
<input type="email" className="form-control" placeholder="Email" required/>
    </div>
    <br/>
    <div className="container"><label>Password:</label>
<input type="password" className="form-control" placeholder="Password" required/>
    </div>
    <br/>
    
    <br/>
    <br/>
    <button className="btn btn-danger">Login</button>
</form>

    </div>
    <br/>
    <br/>
    <h1 className="text-center ">Signup</h1>
    <br/>
    <br/>
    <div className="container bg-success needscolor">
<form className="form-group form-inline">
    <div className="container"><label>Email:</label>
<input type="email" className="form-control" placeholder="Email " required/>
    </div>
    <br/>
    <div className="container"><label>Password:</label>
<input type="password" className="form-control" placeholder="Password" required/>
    </div>
    <br/>
    <div className="container"><label>Phone Number:</label>
<input type="number" className="form-control" placeholder="Phone Number" required/>
    </div>
   
    <br/>
    <br/>
    <button className="btn btn-danger">Sign in</button>
</form>

    </div>
    
    
</div>
    )
}
export default Login