import React from 'react';
import { useForm } from 'react-hook-form';

export default function Login() {
	const {register, handleSubmit} = useForm();

	const onSubmit = (data) => {
		console.log(data);
		alert(JSON.stringify(data))
	}

	return(
		<div>
		  <form onSubmit={handleSubmit(onSubmit)}>
		    <input 
			    type="text" 
			    placeholder="User Name" 
			    name="username" 
			    className="w3-light-grey" 
			    autocomplete="off" 
			    required
			    ref={register}
		    />
		    <input 
			    type="password" 
			    placeholder="Password" 
			    name="password" 
			    className="w3-light-grey" 
			    required 
			    ref={register}
		    />
		    <input 
		    	type="submit"
			    className="w3-btn w3-round w3-mycolor w3-hover-black" 
		    />
		  </form>
		</div>
	);
}