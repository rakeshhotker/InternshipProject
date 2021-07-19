import React from 'react';
import Benefits from './Benefits';
import Body from './Body';
import EmpBenefits from './EmpBenefits';
import './Home.css';
import ManageInfo from './ManageInfo';
import Navbar from './Navbar';
import Payroll from './Payroll';
import TimeSaver from './TimeSaver';
function Home() {
	return (
		<div className='Home'>
			<div className='HomeFirstPage'>
				<Navbar />
				<Body />
			</div>
			<Benefits />
			<ManageInfo />
			<div className='employeeBenefits'>
				<Payroll />
				<EmpBenefits />
				<TimeSaver />
			</div>
		</div>
	);
}

export default Home;
