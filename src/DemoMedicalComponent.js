import React from 'react';
import './DemoMedicalComponent.css';
function DemoMedicalComponent() {
	return (
		<div className='demoMedicalComponent'>
			<div className='medicalpriceDiv'>
				<div>Medical</div>
				<div>$393.23</div>
			</div>
			<div className='dummycontentdivs'>
				<div className='equalDivs'></div>
				<div className='equalDivs'></div>
				<div className='smalldiv'></div>
			</div>
			<div className='buttonDivs'>
				<div className='button'>Plan Detail</div>
				<div className='button'>Change Plans</div>
			</div>
		</div>
	);
}

export default DemoMedicalComponent;
