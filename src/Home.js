import React from 'react';
import Advisor from './Advisor';
import Benefits from './Benefits';
import Body from './Body';
import EmpBenefits from './EmpBenefits';
import './Home.css';
import ManageInfo from './ManageInfo';
import Navbar from './Navbar';
import Payroll from './Payroll';
import TimeSaver from './TimeSaver';
import WhyUs from './WhyUs';
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
			<WhyUs />
			<Advisor />
		</div>
	);
}

export default Home;
