import React from 'react';
import './Register.css';
import { useForm } from 'react-hook-form';

const Register = () => {
	const { register, handleSubmit } = useForm();

	const onSubmit = data => {
		console.log(data);
		alert(JSON.stringify(data))
	}

	return(
		<div className="form-input">
		  <div className="w3-container ye-container">
			<div className="w3-hide-large w3-hide-medium">
		      <h1>Create An</h1>
		    </div>
		    <div>
		      <h1 className="form-header">Create An Account</h1>
		    </div>
				<form onSubmit={handleSubmit(onSubmit)}>
				    <p>
				      <label for="user name">New User Name</label>
				      <input 
					      type="text" 
					      name="username" 
					      placeholder="User Name" 
					      className="form-input w3-border" 
					      required 
					      ref={register}
					    />
				     </p>
				    <p>
				      <label for="phone number">Mobile Number</label>
				      <input 
					      	type="number" 
					      	name="phone number" 
					      	placeholder="Phone Number" 
					      	className="form-input w3-border" 
					      	required 
					      	ref={register}
				      	/>
				     </p>
				    <p>
				      <label for="password">New Password</label>
				      <input 
					      type="password" 
					      name="psw" 
					      placeholder="Password" 
					      className="form-input w3-border" 
					      required
					      ref={register}
					    />
				     </p> 
				    <p>
				      <label for="country">Country</label>
				      <input 
					      type="text" 
					      name="country"
					      placeholder="Country" 
					      className="form-input w3-border " 
					      required 
					      ref={register}
					      />
				    </p>
				    <p>
				      	<input 
					      type="submit" 
					      value="Sing In"
					      class="form-input w3-button w3-round w3-hover-black w3-mycolor"
					      />
					   	
				    </p>
				</form>
		  </div>
		</div>
	);
}

export default Register;