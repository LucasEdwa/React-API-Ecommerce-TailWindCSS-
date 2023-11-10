import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { FaStar } from 'react-icons/fa';
import CartContext from "../context/CartContext";
// import taost notification
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Call this function when the toast is to be displayed


function Product(){

    const{ id } = useParams();

    const [product, setProduct] = useState({});
    
    //useContext to get the cart and setCart from the CartContext
    const {cart, setCart} = useContext(CartContext);
    
    //add to cart function
    const addToCart = () =>{
        setCart([...cart, product])
        // add toast notification into the function to show the message
        toast.info("Product added to cart", {
            position: toast.POSITION.TOP_RIGHT
        });
    }

    const stars = [];
    for (let i = 0; i < product.rating; i++) {
        //push the stars to the array with the key(i) from the method map
        stars.push(<FaStar key={i} />);
    }

    useEffect(() => {
        async function FetchProduct(){
            await fetch("https://play-ecom-api.allcodeapp.com/api/products/" + id)
                .then(async (data) => {

                    const response = await data.json();
                    setProduct(response);
                });
                
        }
        FetchProduct();

    }, []);

    return (
      
         
        <div className='flex gap-8 m-16 p-4 bg-gray-200 rounded-xl '>
            <img src={product.imgUrl} className='w-1/4' alt=''/>
            <div className="flex flex-col gap-4 ">
            <h2 className="text-xl semi-bold mb-2">{product.name}</h2>                
            <p className="">{product.description}</p>
                <b className="flex gap-3">{stars}</b>
                <span className="text-2xl font-semibold">${product.priceUSD}</span>
                <button onClick={addToCart} className="p-2 w-1/4 bg-blue-500 text-white rounded-xl hover:bg-blue-950">
                    Add To Cart
                </button>
            
            </div>

            </div>
       
    );
}
export default Product;