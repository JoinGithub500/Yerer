import React from 'react';

const ChangeMode = (props) => {
	return(
		<div>
			<button className="w3-wide w3-button w3-padding-16 w3-hover-black" title="Change Mode">{props.name}</button>
		</div>
	);
}

export default ChangeMode;