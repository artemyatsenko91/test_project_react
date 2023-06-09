import { Link } from 'react-router-dom';
import style from './style.module.scss';

const Notfoundpage = () => {
	return (
		<p className={style.page404__text}>
			404 page not found. Please go <Link to='/'>home</Link>
		</p>
	);
};

export default Notfoundpage;
