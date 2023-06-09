import style from './style.module.scss';

const ClosingCross = ({ onClick }) => {
	return (
		<div className={style.btn_close_pop_up} onClick={onClick}>
			{closeICon}
		</div>
	);
};

export default ClosingCross;

const closeICon = (
	<svg
		width='14px'
		height='14px'
		viewBox='0 -0.5 21 21'
		version='1.1'
		className={style.icon_close}
	>
		<g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
			<g transform='translate(-419.000000, -240.000000)' fill='#000000'>
				<g id='icons' transform='translate(56.000000, 160.000000)'>
					<polygon
						id='close-[#1511]'
						points='375.0183 90 384 98.554 382.48065 100 373.5 91.446 364.5183 100 363 98.554 371.98065 90 363 81.446 364.5183 80 373.5 88.554 382.48065 80 384 81.446'
					></polygon>
				</g>
			</g>
		</g>
	</svg>
);
