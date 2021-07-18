import React from 'react';
import './Benefits.css';
import { FcCheckmark } from 'react-icons/fc';
function Benefits() {
	return (
		<div className='Benefits'>
			<div className='PlatformBenefitsInfo'>
				<p>
					Our plans were built to fit your unique needs.Streamline
					<br />
					onboarding,benefits,payroll,PTO and more with our
					<br />
					simple,intuitive platform.
				</p>
			</div>
			<div className='SignUpBenefitInfo'>
				<div className='SignUpBenefits'>
					<div className='checkmarkIcon'>
						<FcCheckmark />
					</div>
					<h2>Free 14-day Demo</h2>
				</div>
				<div className='SignUpBenefits'>
					<div className='checkmarkIcon'>
						<FcCheckmark />
					</div>
					<h2>No Credit Card Needed</h2>
				</div>
				<div className='SignUpBenefits'>
					<div className='checkmarkIcon'>
						<FcCheckmark />
					</div>
					<h2>No Setup</h2>
				</div>
			</div>
		</div>
	);
}

export default Benefits;
