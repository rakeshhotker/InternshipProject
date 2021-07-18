import React from 'react';
import './ManageInfo.css';
import { FcConferenceCall } from 'react-icons/fc';
import AddCandidate from './AddCandidate';
import JobDetails from './JobDetails';
import EmployeeDirectory from './EmployeeDirectory';
function ManageInfo() {
	return (
		<div className='ManagePeople'>
			<div className='ManagePeopleContent'>
				<div className='HRGuide'>
					<div className='HRGuideInfo'>
						<h3>
							<span className='meetingIcon'>
								<FcConferenceCall />
							</span>
							&nbsp;&nbsp;<span id='HRtext'>HR </span>Manage your people with
							ease.
						</h3>
					</div>
				</div>
				<div className='AddCandidateWrapper'>
					<div className='addCandidate'>
						<AddCandidate />
					</div>
					<div className='JobEmployeeDiv'>
						<div className='JobDetailDiv'>
							<JobDetails />
						</div>
						<div className='EmployeeDirectoryDiv'>
							<EmployeeDirectory />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ManageInfo;
