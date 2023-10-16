import React,{useState,useEffect} from "react";
import axios from 'axios';
import Card from "./Card";
function ProductList(){
const[products,setProducts]=useState([])

useEffect(()=>{
const fetcher=async()=>{
    const response= await axios.get('https://dummyjson.com/products');
    setProducts(response.data.products)
}
fetcher()
},[])

return(
    <>
        {/* let fetchdata=products */}
        {(products.length!==0) ? products.map(()=>{
            return(
            <div className="row row-cols-1 row-cols-md-3 g-4 "><Card /></div>
)}):
        <div>no data</div>}
    </>
)

}
export default ProductList;