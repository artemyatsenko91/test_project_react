import { useSelector, useDispatch } from 'react-redux';

import style from './style.module.scss';

import {
	selectOrders,
	getOrderInfo,
	selectFilteredOrders,
} from '../../features/orderSlice';
import {
	selectProducts,
	selectFilteredProducts,
} from '../../features/productsSlice';
import { filterByOrderName } from '../../features/productsSlice';
import OrderItem from '../OrderItem';
import { getTotalOrderCost } from '../../functions';

const OrdersList = ({ isOrder }) => {
	const { orders } = useSelector(selectOrders);
	const { products } = useSelector(selectProducts);
	const filteredOrders = useSelector(selectFilteredOrders);
	const { filteredProducts } = useSelector(selectFilteredProducts);
	const dispatch = useDispatch();

	const handleOpenPopUp = (e) => {
		const button = e.target.closest('button');
		dispatch(
			getOrderInfo({
				key: button.getAttribute('data-key'),
				isPopUpOpen: true,
			}),
		);
	};

	const handleClick = (e) => {
		const name = e.target.closest('li');
		dispatch(
			filterByOrderName({
				id: name.getAttribute('data-id'),
				isOpenOrderInfo: true,
			}),
		);
	};

	return (
		<ul className={style.orders__list}>
			{isOrder
				? filteredOrders.length
					? filteredOrders.map((item, index) => {
							return (
								<OrderItem
									{...item}
									handleOpenPopUp={handleOpenPopUp}
									key={index}
									totalCost={getTotalOrderCost(
										products,
										item.id,
									)}
									isOrder
									handleClick={handleClick}
								/>
							);
					  })
					: orders.map((item, index) => {
							return (
								<OrderItem
									{...item}
									handleOpenPopUp={handleOpenPopUp}
									key={index}
									totalCost={getTotalOrderCost(
										products,
										item.id,
									)}
									isOrder
									handleClick={handleClick}
								/>
							);
					  })
				: filteredProducts.length
				? filteredProducts.map((item, index) => (
						<OrderItem
							{...item}
							handleOpenPopUp={handleOpenPopUp}
							key={index}
						/>
				  ))
				: products.map((item, index) => (
						<OrderItem
							{...item}
							handleOpenPopUp={handleOpenPopUp}
							key={index}
						/>
				  ))}
		</ul>
	);
};

export default OrdersList;
