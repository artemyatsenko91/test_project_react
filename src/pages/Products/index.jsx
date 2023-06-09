import { useSelector } from 'react-redux';

import style from './style.module.scss';

import OrdersList from '../../components/OrdersList';
import { selectOrders } from '../../features/orderSlice';
import ContentHeader from '../../components/ContentHeader';

const Products = () => {
	const orders = useSelector(selectOrders);

	return (
		<>
			<div className={style.orders}>
				<ContentHeader
					name='Продукты'
					count={orders.products.length}
					selectText='Имя прихода'
					products
				/>
				<div className={style.content_table}>
					<OrdersList isProducts/>
				</div>
			</div>
		</>
	);
};

export default Products;
