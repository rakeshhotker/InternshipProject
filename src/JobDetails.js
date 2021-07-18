import React from 'react';
import './JobDetails.css';
import { VscCheck } from 'react-icons/vsc';
import { IconContext } from 'react-icons/lib';
function JobDetails() {
	return (
		<div className='JobDetails'>
			<table className='details'>
				<tr>
					<td>
						<h3>Job Details</h3>
					</td>
				</tr>
				<tr>
					<td className='tableRows'>Job Title</td>
					<td className='tableData'>
						<div>
							Class Instructor&nbsp;
							<div className='checkmark'>
								<IconContext.Provider value={{ color: 'white' }}>
									<VscCheck />
								</IconContext.Provider>
							</div>
						</div>
					</td>
				</tr>

				<tr>
					<td className='tableRows'>Department</td>
					<td className='tableData'>
						<div>
							Fitness Training&nbsp;
							<div className='checkmark'>
								<IconContext.Provider value={{ color: 'white' }}>
									<VscCheck />
								</IconContext.Provider>
							</div>
						</div>
					</td>
				</tr>

				<tr>
					<td className='tableRows'>Work Location</td>
					<td className='tableData'>
						<div>
							Los Angeles&nbsp;
							<div className='checkmark'>
								<IconContext.Provider value={{ color: 'white' }}>
									<VscCheck />
								</IconContext.Provider>
							</div>
						</div>
					</td>
				</tr>

				<tr>
					<td className='tableRows'>Classification</td>
					<td className='tableData'>
						<div>
							Independent Contractor&nbsp;
							<div className='checkmark'>
								<IconContext.Provider value={{ color: 'white' }}>
									<VscCheck />
								</IconContext.Provider>
							</div>
						</div>
					</td>
					<td>
						<div></div>
					</td>
				</tr>

				<tr>
					<td className='tableRows'>Hire Date</td>
					<td className='tableData'>
						<div>
							01/08/2020&nbsp;
							<div className='checkmark'>
								<IconContext.Provider value={{ color: 'white' }}>
									<VscCheck />
								</IconContext.Provider>
							</div>
						</div>
					</td>
				</tr>
			</table>
		</div>
	);
}

export default JobDetails;
