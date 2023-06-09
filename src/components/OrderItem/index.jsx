import { useSelector } from 'react-redux';

import style from './style.module.scss';

import { selectFilteredProducts } from '../../features/productsSlice';

import { selectOrders } from '../../features/orderSlice';
import {
	getDateAndTime,
	convertDate,
	getProductsSumInOrder,
	getOrderName,
} from '../../functions';

const OrderItem = ({
	title,
	date,
	id,
	status,
	handleOpenPopUp,
	totalCost,
	isOrder,
	photo,
	serialNumber,
	guarantee,
	order,
	price,
	handleClick,
	orderAndProducts,
}) => {
	const getStatus = (status) => {
		let color;

		switch (status) {
			case 'Отменен':
				color = 'red';
				break;
			case 'В работе':
				color = 'blue';
				break;
			case 'В ожидании':
				color = 'black';
				break;
			case 'Выполнен':
				color = 'green';
				break;
			default:
				break;
		}
		return color;
	};
	const { filteredProducts } = useSelector(selectFilteredProducts);
	const { orders, products } = useSelector(selectOrders);
	const { dayOfMonth, month, year } = getDateAndTime(new Date(date));

	return (
		<li
			className={`${isOrder ? style.order_item : style.product_item}
		${filteredProducts.length && isOrder ? style.order_item_active : null} ${
				orderAndProducts ? style.order_and_products : null
			}
		`}
			data-id={isOrder ? id : null}
		>
			<div className={style.item__name}>
				<span className={style.item__name_text} onClick={handleClick}>
					{title ? title : 'Не указано'}
				</span>
				{isOrder ? (
					''
				) : (
					<span className={style.item__serial_number}>
						{serialNumber}
					</span>
				)}
			</div>

			{isOrder ? (
				<div
					className={style.item__status}
					style={{ color: getStatus(status) }}
				>
					{status ? status : 'Не выбран статус'}
				</div>
			) : (
				<div>
					<img src={photo} alt='title' width={40} />
				</div>
			)}
			{isOrder ? (
				<div className={style.item__name}>
					<span>Товаров</span>
					<span>{getProductsSumInOrder(id, products)}</span>
				</div>
			) : orderAndProducts ? null : (
				<div className={style.item__name}>
					<span className={style.item__name_text}>
						{getOrderName(orders, order) || 'Не указано имя'}
					</span>
				</div>
			)}
			{isOrder ? (
				<div className={style.item__date}>
					<span>{convertDate(new Date(date))}</span>
					<span>{`${dayOfMonth} ${month} ${year}`}</span>
				</div>
			) : (
				<div className={style.item__date}>
					<span style={{ color: 'grey', fontSize: '10px' }}>
						от{' '}
						<span style={{ color: 'black', fontSize: '14px' }}>
							{convertDate(new Date(guarantee.start))}
						</span>
					</span>
					<span style={{ color: 'grey', fontSize: '10px' }}>
						до{' '}
						<span style={{ color: 'black', fontSize: '14px' }}>
							{convertDate(new Date(guarantee.end))}
						</span>
					</span>
				</div>
			)}
			{isOrder ? (
				<div className={style.item_price}>
					{totalCost ? (
						totalCost.map((item, index) => (
							<span
								key={index}
								className={`${style.item_price_value} ${
									item.isDefault ? style.value_default : ''
								}`}
							>{`${item.total ? item.total : 'нет цены'} ${
								item.currency
							}`}</span>
						))
					) : (
						<span className={style.value_default}>
							Не указаны цены
						</span>
					)}
				</div>
			) : orderAndProducts ? null : (
				<div className={style.item_price}>
					{price ? (
						price.map((item, index) => (
							<span
								key={index}
								className={`${style.item_price_value} ${
									item.isDefault ? style.value_default : ''
								}`}
							>{`${item.value ? item.value : 'нет цены'} ${
								item.symbol
							}`}</span>
						))
					) : (
						<span className={style.value_default}>
							Не указаны цены
						</span>
					)}
				</div>
			)}

			{isOrder ? (
				<div
					className={style.item__button_block}
					onClick={handleOpenPopUp}
				>
					<button className={style.button_delete} data-key={id}>
						{iconDelete}
					</button>
				</div>
			) : null}
		</li>
	);
};

export default OrderItem;

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
