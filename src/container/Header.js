import React from 'react';
import Top from '../component/Top/Top';
import Topnav from '../component/Topnav/Topnav';
import './Header.css';


const Header = () => {
	return(
		<div>
			<div className='w3-top top-index'>
				<Top />
				<Topnav />
			</div>
		</div>
	);
}

export default Header;