import React from 'react';

const Login = () => {
	return(
		<div>
		  <form method="POST">
		    <input className="w3-light-grey" type="text" placeholder="User Name" name="username" autocomplete="off" required />
		    <input className="w3-light-grey" type="password" placeholder="Password" name="psw" required />
		    <input className="w3-btn w3-round w3-mycolor w3-hover-black" value="LogIn" type="submit"/>
		  </form>
		</div>
	);
}

export default Login;