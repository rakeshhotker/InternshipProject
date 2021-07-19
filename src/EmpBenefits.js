import React from 'react';
import './EmpBenefits.css';
import { BiNotepad } from 'react-icons/bi';
import { FcCheckmark } from 'react-icons/fc';
import { RiMastercardLine } from 'react-icons/ri';
import DemoMedicalComponent from './DemoMedicalComponent';
function EmpBenefits() {
	return (
		<div className='empBenefitsDiv'>
			<div className='BenefitsGuideInfo'>
				<h3>
					<span className='PadIcon'>
						<BiNotepad />
					</span>
					&nbsp;&nbsp;<span id='PayrollText'>Benefits</span>&nbsp;Finally,
					employee benefits for every business.
				</h3>
			</div>
			<div className='BenefitsDivWrapper'>
				<div className='benefits'>
					<div className='BenefitsDiv1'>
						<h2>Benefits</h2>
						<p>
							Select The Medical Plan
							<br />
							That's Best For You
							<br />
							And Your Family.
						</p>
						<div className='emptyDivs'>
							<div className='FillFull'></div>
							<div className='FillHalf'></div>
							<div className='FillFull'></div>
						</div>
					</div>
					<div className='BenefitsDiv2'>
						<div className='checkmarkDiv2'>
							<FcCheckmark />
						</div>
						<div>
							<div>
								<p>
									Blue Cross
									<br />
									PPO Direct HSA 3K
								</p>
							</div>
							<div className='set2emptyDivs'>
								<div className='EqualDivs'></div>
								<div className='EqualDivs'></div>
								<div className='EqualDivs'></div>
								<div className='smallDiv'></div>
							</div>
							<div>
								<h2>$ 393</h2>
							</div>
						</div>
					</div>
				</div>
				<div className='benefitssecondDiv'>
					<div className='carddiv'>
						<div className='cardfirstdiv'>
							<h2 style={{ color: 'black' }}>Tripupp</h2>
							<h3 style={{ color: 'white' }}>Benfits Card</h3>
						</div>
						<div className='cardseconddiv'>
							<div>
								<h2>1234</h2>
							</div>
							<div>
								<h2>5678</h2>
							</div>
							<div>
								<h2>9000</h2>
							</div>
							<div>
								<h2>0000</h2>
							</div>
						</div>
						<div className='cardthirddiv'>
							<div style={{ color: 'rgba(21,21,21)' }}>1234</div>
							<div className='validthru'>
								<div style={{ fontSize: '10px' }}>
									VALID
									<br />
									THRU
								</div>
								<div>
									<h3>12/19</h3>
								</div>
							</div>
						</div>
						<div className='cardfourthdiv'>
							<div>
								<h2>MICHEAL WILLIAMS</h2>
							</div>
							<div className='mastercardIcon'>
								<RiMastercardLine />
							</div>
						</div>
					</div>
					<div className='BenefitsDiv3'>
						<div className='benefitsSummary'>
							<h3>Benefits</h3>
							<p>Here's A Summary Of The Plans Selected.</p>
						</div>
						<div className='demomedicalcomponents'>
							<div id='demo1'>
								<DemoMedicalComponent />
							</div>
							<div id='demo2'>
								<DemoMedicalComponent />
							</div>
							<div id='demo3'>
								<DemoMedicalComponent />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default EmpBenefits;
