import React from 'react';
import Benefits from './Benefits';
import Body from './Body';
import './Home.css';
import ManageInfo from './ManageInfo';
import Navbar from './Navbar';
function Home() {
	return (
		<div className='Home'>
			<div className='HomeFirstPage'>
				<Navbar />
				<Body />
			</div>
			<Benefits />
			<ManageInfo />
		</div>
	);
}

export default Home;
