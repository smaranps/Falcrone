import React from "react";
import './contact.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function Contact(){
    return(
        <div id="contdiv">
            <h1 className="text-center color" >Contact us</h1>
            <br/>
            <br/>
            <div className="container bg-success color" >
                <h3 className="text-center">Book an Appointment:</h3>
                <br/>
                <form className="form-inline form-group">
                    <div className="container">
                  <label>Name:</label>  <input type="text" placeholder="Name"  className="form-control" required/>
                    </div>
<br/>
<div className="container">
                  <label>Email:</label>  <input type="email" placeholder="Email"  className="form-control" required/>
                    </div>
                    <br/>
                    <br/>
<div className="container">
                  <label>Branch:</label><br/>  <input type="radio" name="Branch"/> <label>Toronto</label><br/>
                  <input type="radio" name="Branch"/> <label>New York</label><br/>
                  <input type="radio" name="Branch"/> <label>Los Angeles</label><br/>
                  <input type="radio" name="Branch"/> <label>London</label><br/>
                  <input type="radio" name="Branch"/> <label>Paris</label><br/>
                  <input type="radio" name="Branch"/> <label>Madrid</label><br/>
                  <input type="radio" name="Branch"/> <label>New Delhi</label><br/>
                  <input type="radio" name="Branch"/> <label>Dubai</label><br/>
                    </div>
                    <br/>
                
                    <div className="container">
                  <label>Date:</label>  <input type="date"  className="form-control" required/>
            
                    </div>
                    <div className="container">
                  <label>Time:</label>  <input type="time" placeholder="Email"  className="form-control" required/>
                    </div>
<br/>
<br/>
<button className="btn btn-warning" >Submit</button>
<br/>
<br/>

                </form>
                </div>
<br/>
<br/>
        </div>
    )
}
export default Contact