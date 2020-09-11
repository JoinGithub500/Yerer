import React from 'react';
import '../css/w3.css';
import Topnav from '../component/Topnav/Topnav';
import LeftNav from '../component/LeftNav/LeftNav';
import Top from '../component/Top/Top';

export const Home = () => {
	return(
		<React.Fragment>
			<div className='w3-top'>
				<Top />
				<Topnav />
			</div>
			<LeftNav />
		</React.Fragment>
	);
}	