import { useDispatch, useSelector } from 'react-redux';

import style from './style.module.scss';

import { removeOrder, filterByStatus } from '../../features/orderSlice';
import { getOrderInfo, selectOrderInfo } from '../../features/orderSlice';
import ClosingCross from '../СlosingСross';
import { filterByOrderName } from '../../features/productsSlice';

const PopUp = () => {
	const { orderInfo } = useSelector(selectOrderInfo);
	const dispatch = useDispatch();

	const handleClosePopUp = () => {
		dispatch(
			getOrderInfo({
				isPopUpOpen: false,
			}),
		);
		
	};

	const handleDelete = (id) => {
		dispatch(removeOrder(id));
		dispatch(
			getOrderInfo({
				isPopUpOpen: false,
			}),
		);
		dispatch(
			filterByOrderName({
				isOpenOrderInfo: false,
			}),
		);
		dispatch(filterByStatus('Все'));
	};

	return (
		<div className={style.pop_up_wrapper}>
			<div className={style.pop_up}>
				<ClosingCross onClick={handleClosePopUp} />
				<h2 className={style.pop_up_title}>
					{orderInfo[0].title ? orderInfo[0].title : 'Не указано'}
				</h2>
				<div className={style.pop_up__product_info}>
					<span></span>
					<span>{orderInfo[0].status} </span>
					<div className={style.product_info__}>
						<span>Nazva</span>
						<span>nazva2</span>
					</div>
				</div>
				<div className={style.pop_up_buttons}>
					<button
						className={style.btn_cancel}
						onClick={handleClosePopUp}
					>
						Отмена
					</button>
					<button
						className={style.btn_remove}
						onClick={() => handleDelete(orderInfo[0].id)}
					>
						{iconDelete}
						Удалить
					</button>
				</div>
			</div>
		</div>
	);
};

export default PopUp;

const iconDelete = (
	<svg
		width='24px'
		height='24px'
		viewBox='0 0 24 24'
		fill='none'
		className={style.icon_delete}
	>
		<g id='Interface / Trash_Full'>
			<path
				id='Vector'
				d='M14 10V17M10 10V17M6 6V17.8C6 18.9201 6 19.4798 6.21799 19.9076C6.40973 20.2839 6.71547 20.5905 7.0918 20.7822C7.5192 21 8.07899 21 9.19691 21H14.8031C15.921 21 16.48 21 16.9074 20.7822C17.2837 20.5905 17.5905 20.2839 17.7822 19.9076C18 19.4802 18 18.921 18 17.8031V6M6 6H8M6 6H4M8 6H16M8 6C8 5.06812 8 4.60241 8.15224 4.23486C8.35523 3.74481 8.74432 3.35523 9.23438 3.15224C9.60192 3 10.0681 3 11 3H13C13.9319 3 14.3978 3 14.7654 3.15224C15.2554 3.35523 15.6447 3.74481 15.8477 4.23486C15.9999 4.6024 16 5.06812 16 6M16 6H18M18 6H20'
				stroke='rgb(80, 80, 80)'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</g>
	</svg>
);
