import React from 'react';
import './Body.css';
function Body() {
	return (
		<div className='Body'>
			<div className='TrailDiv'>
				<div className='TrailLink'>
					<strong>
						<a href='#'>Try For Free Now!&nbsp;&nbsp;&gt;</a>
					</strong>
				</div>

				<div className='TrailInfo'>
					<h3>
						Set Your Business UP
						<br />
						With Modern Payroll,
						<br />
						Benefits,&nbsp;And HR.
					</h3>
				</div>
				<div className='EmailInput'>
					<span>@</span>
					<input
						type='text'
						placeholder='Your email address'
						className='no-outline'
					/>
					<div className='GetStartedButton'>
						<strong>
							<a href='#'>Get Started</a>
						</strong>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Body;
