import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProductList></ProductList>,
  },
  {
    path: '/add',
    element: <AddProduct></AddProduct>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
