import products from './component/Products.json'
import "./App.css";
import Product from './component/Product';
import Cart from './component/Cart';

function App() {
  return (
    <div className="App">
      <Cart />
      <div className="products">
        {products.map((product) => (
          <Product  key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

export default App;
