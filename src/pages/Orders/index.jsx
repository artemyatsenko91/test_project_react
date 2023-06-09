import { useDispatch, useSelector } from 'react-redux';

import style from './style.module.scss';

import OrdersList from '../../components/OrdersList';
import { selectOrderInfo } from '../../features/orderSlice';
import {
	selectFilteredProducts,
	filterByOrderName,
} from '../../features/productsSlice';
import PopUp from '../../components/PopUp';
import ContentHeader from '../../components/ContentHeader';
import ClosingCross from '../../components/СlosingСross';
import OrderItem from '../../components/OrderItem';

const Orders = () => {
	const { isOpenPopUp, orders } = useSelector(selectOrderInfo);
	const { isOpenOrderInfo, filteredProducts, orderName } = useSelector(
		selectFilteredProducts,
	);
	const dispatch = useDispatch();

	const handleCloseOrderInfo = () => {
		dispatch(
			filterByOrderName({
				isOpenOrderInfo: false,
			}),
		);
	};

	return (
		<>
			<div className={style.orders}>
				<ContentHeader
					name='Заказы'
					count={orders.orders.length}
					selectText='Статус'
				/>
				<div
					className={`${style.content_table} ${
						isOpenOrderInfo
							? style.content_table_with_products
							: null
					}`}
				>
					<OrdersList isOrder />
					<div
						className={`${style.content_products_table} ${
							isOpenOrderInfo ? style.show : null
						}`}
					>
						<ul className={style.products__list}>
							<ClosingCross
								popUp
								onClick={handleCloseOrderInfo}
							/>
							<li className={style.products__list_title}>
								Заказ: {orderName}
							</li>
							{filteredProducts.map((item, index) => (
								<OrderItem
									key={index}
									{...item}
									orderAndProducts
								/>
							))}
						</ul>
					</div>
				</div>
				{isOpenPopUp && <PopUp />}
			</div>
		</>
	);
};

export default Orders;
