import React from 'react';
import './WhyUs.css';
function WhyUs() {
	return (
		<div className='whyUsComponent'>
			<div className='headerDiv'>
				<div className='textdiv'>
					<h1>Why Us?</h1>
				</div>
				<div className='backgroundDiv'></div>
			</div>
			<div className='whyusdivswrapper'>
				<div id='whyusdiv1' className='whyusdivs'>
					<div className='divBoldText'>
						<p
							style={{
								wordSpacing: '10px',
								lineHeight: '25px',
							}}
						>
							Hire and
							<br />
							retain top
							<br />
							talent.
						</p>
					</div>
					<div className='divthinText'>
						<p
							style={{
								wordSpacing: '10px',
								lineHeight: '25px',
								marginTop: '-5px',
							}}
						>
							We make
							<br />
							onboarding new
							<br />
							employees
							<br />
							ridiculously
							<br />
							easy.&nbsp;And retaining
							<br />
							them is easier,
							<br />
							too,&nbsp;with
							<br />
							advanced HR
							<br />
							tools like
							<br />
							compensation
							<br />
							reporting.
						</p>
					</div>
				</div>
				<div id='whyusdiv2' className='whyusdivs'>
					<div
						className='divBoldText'
						style={{ wordSpacing: '10px', lineHeight: '25px' }}
					>
						Stay
						<br />
						Compliant
					</div>
					<div
						className='divthinText'
						style={{
							wordSpacing: '10px',
							lineHeight: '25px',
							marginTop: '-5px',
						}}
					>
						<p>
							Keeping a
							<br />
							business
							<br />
							compliant is made
							<br />
							easier with
							<br />
							Zenefits.&nbsp;We
							<br />
							automate many of
							<br />
							the compliance
							<br />
							tasks and
							<br />
							government
							<br />
							filings for you.
						</p>
					</div>
				</div>
				<div id='whyusdiv3' className='whyusdivs'>
					<div
						className='divBoldText'
						style={{ wordSpacing: '10px', lineHeight: '25px' }}
					>
						Improve
						<br />
						Productivity
					</div>
					<div
						className='divthinText'
						style={{
							wordSpacing: '10px',
							lineHeight: '25px',
							marginTop: '-5px',
						}}
					>
						<p>
							Many of our
							<br />
							features like self
							<br />
							onboarding,
							<br />
							selecting benefits,
							<br />
							and signing
							<br />
							documents
							<br />
							happen
							<br />
							completely online,
							<br />
							which means your
							<br />
							employees will
							<br />
							spend more time
							<br />
							focused on their
							<br />
							core functions,
						</p>
					</div>
				</div>
				<div id='whyusdiv4' className='whyusdivs'>
					<div
						className='divBoldText'
						style={{ wordSpacing: '10px', lineHeight: '25px' }}
					>
						Improve
						<br />
						Employee
						<br />
						Experience
					</div>
					<div
						className='divthinText'
						style={{
							wordSpacing: '10px',
							lineHeight: '25px',
							marginTop: '-5px',
							paddingTop: '25px',
						}}
					>
						<p>
							We improve your
							<br />
							employees'
							<br />
							overall
							<br />
							experience.&nbsp;From
							<br />
							a mobile app that
							<br />
							streamlines
							<br />
							onboarding and
							<br />
							requesting time
							<br />
							off, to a modern
							<br />
							experience that
							<br />
							lets employees
							<br />
							sign up for
							<br />
							benefits online.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default WhyUs;
