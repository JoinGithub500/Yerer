import React from 'react';
import './Register.css';

const Register = () => {
	return(
		<div className="form-input">
			<div className="w3-container ye-container">
				<div className="w3-hide-large w3-hide-medium">
			      <h1>Create An</h1>
			    </div>
			    <div>
			      <h1 className="form-header">Create An Account</h1>
			    </div>
				<form>
				    <p>
				      <label for="user name">New User Name</label>
				      <input className="form-input w3-border" type="text" name="username" placeholder="User Name" required /></p>
				    <p>
				      <label for="phone number">Mobile Number</label>
				      <input className="form-input w3-border" type="number" name="phonenumber" placeholder="Phone Number" required /></p>
				    <p>
				      <label for="password">New Password</label>
				      <input className="form-input w3-border" type="password" name="psw" placeholder="Password" required /></p> 
				    <p>
				      <label for="country">Country</label>
				      <input className="form-input w3-border " type="text" placeholder="Country" required /></p>
				    <p>
				      <button type="submit" class="form-input w3-button w3-round w3-hover-black w3-mycolor">Sing In</button></p>
				</form>
		  </div>
		</div>
	);
}

export default Register;