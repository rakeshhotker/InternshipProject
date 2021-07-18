import React from 'react';
import './Navbar.css';
function Navbar() {
	return (
		<div className='Navbar'>
			<div className='logo'>
				<h2>TRIPUPP HR</h2>
			</div>
			<div>
				<ul className='nav-items'>
					<li>
						<strong>HOME</strong>
					</li>
					<li>PAYROLL</li>
					<li>BENEFITS</li>
					<li>PRICING</li>
					<li>WORK WITH US</li>
				</ul>
			</div>
			<div className='signInButton'>
				<strong>
					<a href='#'>SIGN IN&nbsp;&gt;</a>
				</strong>
			</div>
		</div>
	);
}

export default Navbar;
