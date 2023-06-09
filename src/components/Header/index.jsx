import style from './style.module.scss';
import { useState, useEffect } from 'react';
import icon from '/images/time.png';
import { getDateAndTime } from '../../functions';
const Header = () => {
	const [time1, setTime] = useState('');
	const [dayOfWeek, setDayOfWeek] = useState('');
	const [date, setDate] = useState('');

	useEffect(() => {
		const { localTime, dayOfTheWeek, dayOfMonth, month, year } =
			getDateAndTime(new Date());

		setTime(localTime);
		setDate(`${dayOfMonth} ${month} ${year}`);
		setDayOfWeek(dayOfTheWeek);
	}, []);

	setInterval(() => {
		const today = new Date().toLocaleTimeString();
		const localTime = today.substring(0, 5);
		setTime(localTime);
	}, 30000);

	return (
		<header className={style.header}>
			<div className='container'>
				<div className={style.header__wrapper}>
					<a href='/' className={style.header__logo}>
						<img src='/images/logo.png' alt='logo' />
						<span className={style.logo_text}>Inventory</span>
					</a>
					<div className={style.header__date}>
						<div className={style.header__date_wrapper}>
							<div className={style.date_wrapper}>
								<span>{dayOfWeek}</span>
							</div>
							<div className={style.date_and_time}>
								<span>{date} </span>

								<div className={style.time_with_icon}>
									<img src={icon} alt='' width={14} />
									{time1}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
