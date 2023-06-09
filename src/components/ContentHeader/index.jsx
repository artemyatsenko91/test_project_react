import { useSelector } from 'react-redux';
import style from './style.module.scss';
import { filterByStatus, selectOrders } from '../../features/orderSlice';
import { filterByOrderName } from '../../features/productsSlice';
import { useDispatch } from 'react-redux';
import { getSelectData } from '../../functions';

const ContentHeader = ({ name, count, selectText, products }) => {
	const data = useSelector(selectOrders);
	const dispatch = useDispatch();
	const { selectStatusData, selectOrdersNameData } = getSelectData(data);

	const handleChange = (e) => {
		let id;
		data.orders.map((item) => {
			if (
				item.title === e ||
				(e === 'Не указано имя' && item.title === '')
			) {
				id = item.id;
			}
		});
		products
			? dispatch(filterByOrderName({ id }))
			: dispatch(filterByStatus(e));
	};

	return (
		<div className={style.content__header}>
			<h1 className={style.header_text}>{`${name} / ${count}`}</h1>
			<div className={style.content__header_select}>
				<span>{selectText}</span>
				<select onChange={(e) => handleChange(e.target.value)}>
					<option value='Все'>Все</option>
					{products
						? selectOrdersNameData.map((item, index) => (
								<option key={index} value={item}>
									{item}
								</option>
						  ))
						: selectStatusData.map((item, index) => (
								<option key={index} value={item}>
									{item}
								</option>
						  ))}
				</select>
			</div>
		</div>
	);
};
export default ContentHeader;
