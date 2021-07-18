import React from 'react';
import './AddCandidate.css';
import FillBars from './FillBars';
function AddCandidate() {
	return (
		<div className='AddCandidate'>
			<div>
				<h3>Add a candidate</h3>
				<div className='FillBars'>
					<FillBars />
					<FillBars />
					<FillBars />
					<FillBars />
				</div>
			</div>
			<div className='Review'>
				<h3>Review your offer letter for Jillian Wilde</h3>
				<div className='XlargeWidthdiv'></div>
				<div className='smallWidthdiv'></div>
			</div>
			<div>
				<div className='demoContentOuter'>
					<div className='demoContent'>
						<h3>Dear Jillian Wilde,</h3>
						<div className='setFourDiv'>
							<div className='largeWidthdiv'></div>
							<div className='smallWidthdiv'></div>
							<div className='largeWidthdiv'></div>
							<div className='smallWidthdiv'></div>
						</div>
						<div className='setTwoDiv'>
							<div className='largeWidthdiv'></div>
							<div className='smallWidthdiv'></div>
						</div>
						<div className='setFourDiv'>
							<div className='largeWidthdiv'></div>
							<div className='smallWidthdiv'></div>
							<div className='largeWidthdiv'></div>
							<div className='smallWidthdiv'></div>
						</div>
						<div className='setTwoDiv'>
							<div className='largeWidthdiv'></div>
							<div className='smallWidthdiv'></div>
						</div>
					</div>
					<div className='demoAttributes'>
						<div className='demoAttribute'>
							<h4 style={{ color: 'silver' }}>Position</h4>
							<h4>Manager</h4>
						</div>
						<div className='demoAttribute'>
							<h4 style={{ color: 'silver' }}>Salary</h4>
							<h4>$999.00 Per Week</h4>
						</div>
						<div className='demoAttribute'>
							<h4 style={{ color: 'silver' }}>Joining Date</h4>
							<h4>August 01,2021</h4>
						</div>
						<div className='demoAttribute'>
							<h4 style={{ color: 'silver' }}>Employer</h4>
							<h4>Rosa Amador</h4>
						</div>
						<div>
							<button className='SendOffer'>SEND OFFER</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AddCandidate;
