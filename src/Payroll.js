import React from 'react';
import './Payroll.css';
import { RiExchangeDollarLine } from 'react-icons/ri';
import { FcComboChart } from 'react-icons/fc';
import { GiAutomaticSas } from 'react-icons/gi';
import { FcMoneyTransfer } from 'react-icons/fc';
import { FcCalendar } from 'react-icons/fc';
function Payroll() {
	return (
		<div className='Payroll'>
			<div className='PayrollGuideInfo'>
				<h3>
					<span className='chartsIcon'>
						<FcComboChart />
					</span>
					&nbsp;&nbsp;<span id='PayrollText'>Payroll</span>&nbsp;Payroll that's
					easy to use and seriously smart.
				</h3>
			</div>
			<div className='PayrollBenefits'>
				<div className='BenefitsWrapper'>
					<div className='Icons'>
						<RiExchangeDollarLine />
					</div>
					<div className='BenefitDetails'>
						<p style={{ color: 'rgb(91,194,235)' }}>
							Unlimited payrolls.
							<br />
							Clear pricing.No surprises.
						</p>
					</div>
				</div>
				<div className='BenefitsWrapper'>
					<div className='Icons'>
						<GiAutomaticSas />
					</div>
					<div className='BenefitDetails'>
						<p style={{ color: 'rgb(91,194,235)' }}>
							Automatically files
							<br />
							your payroll taxes.
						</p>
					</div>
				</div>
				<div className='BenefitsWrapper'>
					<div className='Icons'>
						<FcMoneyTransfer />
					</div>
					<div className='BenefitDetails'>
						<p style={{ color: 'rgb(91,194,235)' }}>
							Everything you need,
							<br />
							synced with payroll.
						</p>
					</div>
				</div>
				<div className='BenefitsWrapper'>
					<div className='Icons'>
						<FcCalendar />
					</div>
					<div className='BenefitDetails'>
						<p style={{ color: 'rgb(91,194,235)' }}>
							Compliance,accuracy,
							<br />
							and peace of mind.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Payroll;
