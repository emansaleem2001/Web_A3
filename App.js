import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Product } from './Product';


function App() {

  const [products,setProducts] = useState(0);

  const myProducts = async() => {

    let response = await axios.get('https://dummyjson.com/products');
    console.log(response);
    setProducts(response.data.products);
  }

  useEffect(() => {
      myProducts();
  }, []);

  console.log("HIII");
  return (

    <div>
    {
      products.map((product) => {
        return(
          <Product title={product.title} price={product.price} img={product.thumbnail}/>
        );
      })
    }
    </div>

  );
}

export default App;
