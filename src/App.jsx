import { Route, Routes } from 'react-router-dom';

import Layout from './Layout';
import Notfoundpage from './pages/NotFoundPage';
import Orders from './pages/Orders';
import Products from './pages/Products';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Orders />} />
				<Route path='/products' element={<Products />} />
				<Route path='*' element={<Notfoundpage />} />
			</Route>
		</Routes>
	);
}

export default App;
