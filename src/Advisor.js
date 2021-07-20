import React from 'react';
import './Advisor.css';
import { RiStarSFill } from 'react-icons/ri';
import { CgArrowLongRight } from 'react-icons/cg';
import { CgArrowLongLeft } from 'react-icons/cg';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
function Advisor() {
	return (
		<div className='Advisor'>
			<div className='trapeziumdiv'>
				<div className='boldtext'>
					<p>
						We're Here To
						<br />
						Help You.
						<br />
						Ask Us Anything
						<br />
						Or Schedule A Demo Call.
					</p>
				</div>
				<div className='buttondiv'>Talk To Advisor</div>
			</div>
			<div className='ReviewContentDiv'>
				<figure className='employeeImageDiv'>
					<img
						src='https://cdn.luxe.digital/media/2019/09/12090443/business-professional-attire-office-men-style-gabriel-macht-luxe-digital.jpg'
						className='sampleImage'
					/>
					<figcaption>
						<div className='EmpNameDiv'>
							<div className='EmpName'>
								<p style={{ fontSize: '15px' }}>
									Ashley Lancazo
									<br />
									Manager
								</p>
							</div>
							<div className='starrating'>
								<RiStarSFill />
								<RiStarSFill />
								<RiStarSFill />
								<RiStarSFill />
								<RiStarSFill />
							</div>
						</div>
					</figcaption>
				</figure>
				<div className='EmpContentDiv'>
					<div className='ArrowButtons'>
						<div className='ArrowButton'>
							<CgArrowLongLeft />
						</div>
						<div className='ArrowButton'>
							<CgArrowLongRight />
						</div>
					</div>
					<div className='EmpReviews'>
						<div className='EmpReview'>
							When we onboard our employees,its really
							<br />
							quick and easy.&nbsp;We get to focus on making
							<br />
							sure that they're okay and happy and being
							<br />
							introduced to the company.
						</div>
						<div className='otherEmployeeImages'>
							<div id='image1'>
								<img src='https://cdn.cdnparenting.com/articles/2019/01/08144644/1211306812-H.jpg' />
							</div>
							<div id='image2'>
								<img src='https://cdn.cdnparenting.com/articles/2019/01/08144644/1211306812-H.jpg' />
							</div>
							<div id='image3'>
								<img src='https://cdn.luxe.digital/media/2019/09/12090443/business-professional-attire-office-men-style-gabriel-macht-luxe-digital.jpg' />
							</div>
							<div id='image4'>
								<img src='https://cdn.cdnparenting.com/articles/2019/01/08144644/1211306812-H.jpg' />
							</div>
							<div id='image5'>
								<img src='https://cdn.cdnparenting.com/articles/2019/01/08144644/1211306812-H.jpg' />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='reviewContentborder'></div>
			<div className='GetStarted'>
				<div className='BoldText'>
					<h2>
						Get Your Team
						<br />
						Working With
						<br />
						Us!
					</h2>
				</div>
				<div className='getStartedButton'>Get Started</div>
			</div>
			<div className='platformFeatures'>
				<div className='allInOnePlatform'>
					<div style={{ fontWeight: 'bold' }}>All-in-one platform</div>
					<div>Payroll</div>
					<div>Employee benefits</div>
					<div>Health insurance</div>
					<div>Financial benefits</div>
					<div>Hiring and onboarding</div>
					<div>Exper HR</div>
					<div>Time tracking tools</div>
					<div>Workers' comp</div>
					<div>Integrations</div>
					<div>Gusto Wallet</div>
					<div>Gusto Partner Offers</div>
				</div>
				<div className='Tools'>
					<div>
						<div style={{ fontWeight: 'bold' }}>Tools</div>
						<div>Small Business</div>
						<div>Employer tax calculator</div>
						<div>Burn rate calculator</div>
						<div>Salary comparision tool</div>
						<div>New hire checklist</div>
						<div>Small business gudies</div>
					</div>
					<div className='Media'>
						<div className='social'>
							<p>Social</p>
							<div className='facebookIcon'>
								<FaFacebook />
							</div>
							<div className='instagramIcon'>
								<FaInstagramSquare />
							</div>
						</div>
						<div className='contact'>
							<p style={{ fontSize: 'bold' }}>Contact</p>
							<p style={{ color: 'red' }}>0012576469</p>
						</div>
					</div>
				</div>
				<div className='Gusto'>
					<div style={{ fontWeight: 'bold' }}>About Gusto</div>
					<div>About</div>
					<div>
						Careers--<span style={{ color: 'red' }}>We're hiring!</span>
					</div>
					<div>Press</div>
					<div>Contact</div>
					<div>Investors</div>
					<div>Affiliate Program</div>
				</div>
			</div>
		</div>
	);
}

export default Advisor;
