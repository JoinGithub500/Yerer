import React from 'react';
import './Topnav.css';
import Login from '../Login/Login';
import ChangeMode from '../ChangeMode/ChangeMode';

const Topnav = () =>{
	return (
		<div>
		  	<div className="w3-bar w3-theme w3-card-2 w3-wide">
				<div className="w3-hide-medium w3-hide-small" >
					<div className="form-large w3-right">
						<Login />
					</div>	
					<ChangeMode name='Change Mode'/>
				</div>
				<div className="w3-hide-large w3-hide-small">
			 		<div className="form-medium w3-right">
						<Login />
			 		</div>
					<ChangeMode name='Mode'/>
		 		</div>
			 	<div className="w3-hide-large w3-hide-medium">
					<div className="form-small w3-padding">
						<Login />	
					</div>
				</div>
			</div>
				<div className="forgot-password w3-right">
			      <a href="#.html"> Forgot my password </a>
			    </div>
		</div>
	);
}

export default Topnav;