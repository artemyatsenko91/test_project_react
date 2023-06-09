import { createSlice } from '@reduxjs/toolkit';
import data from '../mock/products.json';

const ordersSlice = createSlice({
	name: 'orders',
	initialState: {
		orders: data,
		ordersFilterByStatus: [],
		orderInfo: {},
		isOpenPopUp: false
	},
	reducers: {
		removeOrder: (state, action) => {
			state.orders.orders = state.orders.orders.filter(item =>
				item.id !== action.payload
			)
		},
		getOrderInfo: (state, action) => {
			state.orderInfo = data.orders.filter(item => item.id == +action.payload.key)
			state.isOpenPopUp = action.payload.isPopUpOpen
		},
		filterByStatus: (state, action) => {
			if (action.payload === 'Все') {
				state.ordersFilterByStatus = state.orders.orders;
			}
			else if (action.payload === 'Не выбран статус') {
				console.log(action.payload)
				state.ordersFilterByStatus = state.orders.orders.filter(item => item.status === "")
			} else {
				state.ordersFilterByStatus = state.orders.orders.filter(item => item.status === action.payload)
			}
		},
	},
});

export const { removeOrder, getOrderInfo, filterByStatus } = ordersSlice.actions;
export const selectOrders = state => state.orders.orders;
export const selectFilteredOrders = state => state.orders.ordersFilterByStatus;
export const selectOrderInfo = state => state.orders;
export default ordersSlice.reducer;
