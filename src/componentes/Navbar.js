import { Link } from 'react-router-dom';
import { useContext } from 'react';
import CartContext from '../context/CartContext';

function Navbar (){
    const {cart} = useContext(CartContext);

    return (
        <nav className=" flex text-white justify-between p-4 bg-blue-500 ">
            <h2 className='text-2xl'>All[tech]</h2>
            <ul className='flex gap-6'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                
                <li>
                    <Link to="/products">Products</Link>
                </li>
                
                <li>
                    <Link to="/cart">Cart({cart.length})</Link>
                </li>
                
            </ul>
        </nav>
    );
}
export default Navbar;
