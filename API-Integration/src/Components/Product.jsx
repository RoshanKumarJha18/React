import axios from '../Util/axios';
import React, { useEffect, useState } from 'react'

const Product = () => {
    const [products, setproducts] = useState([]);


  const getProducts = () => {
    const api = "/products";

    axios
      .get(api)
      .then((Product) => {
        console.log(Product);
        setproducts(Product.data)
      })
      .catch((err) => console.log(err))
      
  };
//   console.log(products)   

  const AddProducts = () => {
    const api = "https://fakestoreapi.com/products";

    axios
      .post(api, {
        id: 0,
        title: "Demo",
        price: 0.1,
        description: "Demo Description",
        category: "Demo Category",
        image: "http://example.com",
      })
      .then((ref) => console.log(ref))
      .catch((err) => console.log(err));
  };

  useEffect(()=>{
    getProducts();
  },[])
  return (
    <div className="p-8 flex flex-col gap-5">
      <button
        onClick={getProducts}
        className="px-3 py-1 rounded-full bg-blue-600 text-white cursor-pointer"
      >
        Get Products From API
      </button>
      <button
        onClick={AddProducts}
        className="px-3 py-1 rounded-full bg-blue-600 text-white cursor-pointer"
      >
        Save Product in API
      </button>
      <hr className="h-2 w-full " />
    
      <div className="flex flex-wrap gap-18">
        {products.length>0 ? products.map(p=><img key={p.id} className="h-[12vw] w-[12vw] " src={p.image}></img>) : <h1>loading.....</h1>}
      </div>
    </div>
  )
}

export default Product
