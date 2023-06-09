import { configureStore } from '@reduxjs/toolkit';
import orderSlice from '../features/orderSlice';
import productSlice from '../features/productsSlice'

export const store = configureStore({
	reducer: {
		orders: orderSlice,
		products: productSlice
	},
});

