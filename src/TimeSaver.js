import React from 'react';
import './TimeSaver.css';
import { RiHeartAddFill } from 'react-icons/ri';
import { FaRegHandshake } from 'react-icons/fa';
import { FaBriefcaseMedical } from 'react-icons/fa';
function TimeSaver() {
	return (
		<div className='TimeSaver'>
			<div className='PayrollBenefits2'>
				<div className='BenefitsWrapper2'>
					<div className='Icons2'>
						<RiHeartAddFill />
					</div>
					<div className='BenefitDetails2'>
						<p style={{ color: 'rgb(91,194,235)' }}>
							Our benefits are designed to
							<br />
							be accessible for all.
						</p>
					</div>
				</div>
				<div className='BenefitsWrapper2'>
					<div className='Icons2'>
						<FaRegHandshake />
					</div>
					<div className='BenefitDetails2'>
						<p style={{ color: 'rgb(91,194,235)' }}>
							A healthy team can better
							<br />
							support your business and
							<br />
							your bottom line.
						</p>
					</div>
				</div>
				<div className='BenefitsWrapper2'>
					<div className='Icons2'>
						<FaBriefcaseMedical />
					</div>
					<div className='BenefitDetails2'>
						<p style={{ color: 'rgb(91,194,235)' }}>
							Become a business where
							<br />
							talented people want to
							<br />
							work and stick around.
						</p>
					</div>
				</div>
			</div>
			<div className='TimeSaverInfoDiv'>
				<div className='TimeSaverInfoDivBoldText'>
					<h1>
						A Complete HR
						<br />
						Platform
						<br />
						Saves You
						<br />
						Time.
					</h1>
				</div>
				<div className='TimeSaverInfoDivtext'>
					<p>
						TripUpp streamlines your workflow by
						<br />
						automatically
						<br />
						connecting HR,&nbsp;Benefits,&nbsp;Payroll and
						<br />
						Scheduling,&nbsp;together in one platform.&nbsp;This
						<br />
						means less time spent on low-priority
						<br />
						tasks so your team can focus on more
						<br />
						important things.
					</p>
				</div>
			</div>
		</div>
	);
}

export default TimeSaver;
