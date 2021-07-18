import React from 'react';
import './EmployeeDirectory.css';
function EmployeeDirectory() {
	return (
		<div className='employeeDirectoryDetails'>
			<div className='employeeDirectory'>
				<div>
					<h3>Employee Directory</h3>
				</div>
				<div style={{ color: 'silver' }}>Show All</div>
			</div>
			<div className='employeeDetails'>
				<div className='IndividualEmployee'>
					<img
						className='employeeImage'
						src='https://i.insider.com/602845462edd0f001a8d5b7d?width=700'
					/>
					<div style={{ textAlign: 'center' }}>
						Naomi Brett
						<br />
						<span style={{ color: 'silver' }}>Software Engineer</span>
					</div>
					<div className='roleDetails'>
						<p style={{ color: 'silver' }}>
							Full-Time
							<br />
							San Francisco
						</p>
					</div>
				</div>
				<div className='IndividualEmployee'>
					<img
						className='employeeImage'
						src='https://www.naomibrettrourke.com/wp-content/uploads/2019/08/author-naomi-brett-rourke-smiling.jpg'
					/>
					<div style={{ textAlign: 'center' }}>
						Naomi Brett
						<br />
						<span style={{ color: 'silver' }}>Software Engineer</span>
					</div>
					<div className='roleDetails'>
						<p style={{ color: 'silver' }}>
							Full-Time
							<br />
							San Francisco
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default EmployeeDirectory;
