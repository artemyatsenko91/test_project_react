import { NavLink } from 'react-router-dom';
import style from './style.module.scss';

const Navigation = ({ data }) => {
	return (
		<nav>
			<ul className={style.side_menu__navigation}>
				{data?.map((item, index) => (
					<li key={index}>
						<NavLink
							to={item.link}
							className={({ isActive }) =>
								isActive
									? `${style.navigation_item} ${style.active}`
									: style.navigation_item
							}
						>
							{item.text}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navigation;
