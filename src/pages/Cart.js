import { useContext } from "react";
import CartContext from "../context/CartContext";

function Cart() {
    const {cart, setCart} = useContext(CartContext);
    /** Calculate the total price of all items in the cart */
    const totalPrice = cart.reduce((total, item) => total + item.priceUSD, 0);
    
    const removeItemFromCart = (index) => {
        setCart(prevCart => prevCart.filter((item, i) => i !== index));
    };
  
     
    return (
        <div className="mx-20 my-8 ">
            <div className="flex justify-between">
                <h1 className="text-4xl font-semibold mb-6">Cart</h1>
                <p>Total: ${totalPrice} </p>
            </div>
            <div className='flex flex-col gap-6 p-4 bg-gray-200 rounded-xl '>
                {!(cart.length >0 )? 'No product has been added to your cart': null}
                {cart.map((cartItem, index)=>(
                    <div key={index} className="flex gap-4 items-center mb-5">
                        <img src={cartItem.imgUrl} className='w-[10rem] h-[10rem] object-cover' alt=''/>
                        <div>
                            <h3 className="text-2xl ">{cartItem.name}</h3>
                            <div>
                                <span className="text-xl font-semibold">${cartItem.priceUSD}</span>
                            </div>
                            <button onClick={()=> removeItemFromCart(index)} className="text-red-500 underline">Remove</button>
                        </div>
                    </div>
                ))}
                {(cart.length >0 )? 
                    <button className="bg-blue-500 p-4 text-white rounded-xl text-center"> CheckOut</button>
                : null }

            </div>
        </div>
    )
}
export default Cart;