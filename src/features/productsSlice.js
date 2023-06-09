import { createSlice } from '@reduxjs/toolkit';
import data from '../mock/products.json';


const productsSlice = createSlice({
	name: 'produtcsInfo',
	initialState: {
		products: data,
		filteredProducts: [],
		isOpenOrderInfo: false,
		orderName: ""
	},
	reducers: {
		filterByOrderName: (state, action) => {
			state.isOpenOrderInfo = action.payload.isOpenOrderInfo
			state.filteredProducts = state.products.products.filter(item => item.order === +action.payload.id)
			state.products.orders.map(item => {
				if (item.id === +action.payload.id) {
					state.orderName = item.title ? item.title : "Не указано"
				}
			})
		}
	},
});

export const { filterByOrderName } = productsSlice.actions;
export const selectProducts = state => state.products.products;
export const selectFilteredProducts = state => state.products;
export default productsSlice.reducer;
