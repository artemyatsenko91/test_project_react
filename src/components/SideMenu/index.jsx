import style from './style.module.scss';
import Navigation from './Navigation/index';

const SideMenu = () => {
	const handleOpenSideMenu = (e) => {
		const asideMenu = e.target.closest('aside');
		asideMenu.classList.toggle(style.show);
	};
	return (
		<aside className={style.side_menu}>
			<div className={style.side_menu__wrapper}>
				<div className={style.side_menu__avatar}>
					<div className={style.avatar}>
						<div className={style.avatar_wrapp}>
							<img
								className={style.avatar_image}
								src='/images/zel.jpg'
								alt='avatar'
							/>
						</div>
						<div className={style.avatar_settings}>
							{settingsIcon}
						</div>
					</div>
					<Navigation data={navigationData} />
				</div>
			</div>
			<div
				className={style.btn__open_side_menu}
				onClick={handleOpenSideMenu}
			>
				+
			</div>
		</aside>
	);
};

export default SideMenu;

const navigationData = [
	{
		text: 'Заказы',
		link: '/',
	},
	{
		text: 'Продукты',
		link: '/products',
	},
];

const settingsIcon = (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0,0,256,256'
		width='50px'
		height='50px'
		fillRule='nonzero'
		className={style.settings_icon}
	>
		<g
			fill='#8bceb7'
			fillRule='nonzero'
			stroke='none'
			strokeWidth='1'
			strokeLinecap='butt'
			strokeLinejoin='miter'
			strokeMiterlimit='10'
		>
			<g transform='scale(5.12,5.12)'>
				<path d='M47.16,21.221l-5.91,-0.966c-0.346,-1.186 -0.819,-2.326 -1.411,-3.405l3.45,-4.917c0.279,-0.397 0.231,-0.938 -0.112,-1.282l-3.889,-3.887c-0.347,-0.346 -0.893,-0.391 -1.291,-0.104l-4.843,3.481c-1.089,-0.602 -2.239,-1.08 -3.432,-1.427l-1.031,-5.886c-0.084,-0.478 -0.499,-0.828 -0.985,-0.828h-5.5c-0.49,0 -0.908,0.355 -0.987,0.839l-0.956,5.854c-1.2,0.345 -2.352,0.818 -3.437,1.412l-4.83,-3.45c-0.399,-0.285 -0.942,-0.239 -1.289,0.106l-3.887,3.887c-0.343,0.343 -0.391,0.883 -0.112,1.28l3.399,4.863c-0.605,1.095 -1.087,2.254 -1.438,3.46l-5.831,0.971c-0.482,0.08 -0.836,0.498 -0.836,0.986v5.5c0,0.485 0.348,0.9 0.825,0.985l5.831,1.034c0.349,1.203 0.831,2.362 1.438,3.46l-3.441,4.813c-0.284,0.397 -0.239,0.942 0.106,1.289l3.888,3.891c0.343,0.343 0.884,0.391 1.281,0.112l4.87,-3.411c1.093,0.601 2.248,1.078 3.445,1.424l0.976,5.861c0.079,0.481 0.496,0.834 0.985,0.834h5.5c0.485,0 0.9,-0.348 0.984,-0.825l1.045,-5.89c1.199,-0.353 2.348,-0.833 3.43,-1.435l4.905,3.441c0.398,0.281 0.938,0.232 1.282,-0.111l3.888,-3.891c0.346,-0.347 0.391,-0.894 0.104,-1.292l-3.498,-4.857c0.593,-1.08 1.064,-2.222 1.407,-3.408l5.918,-1.039c0.479,-0.084 0.827,-0.5 0.827,-0.985v-5.5c0.001,-0.49 -0.354,-0.908 -0.838,-0.987zM25,32c-3.866,0 -7,-3.134 -7,-7c0,-3.866 3.134,-7 7,-7c3.866,0 7,3.134 7,7c0,3.866 -3.134,7 -7,7z'></path>
			</g>
		</g>
	</svg>
);
