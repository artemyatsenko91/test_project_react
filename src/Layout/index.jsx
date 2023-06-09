import { Outlet } from 'react-router-dom';

import Footer from '../components/Footer';
import Header from '../components/Header';
import style from './style.module.scss';
import SideMenu from '../components/SideMenu';

const Layout = () => {
	return (
		<>
			<Header />
			<main className={style.main}>
				<SideMenu />
				<Outlet />
			</main>
			<Footer />
		</>
	);
};

export default Layout;
