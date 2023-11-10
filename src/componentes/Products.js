import { Link } from "react-router-dom";
// react-icons/fa installed by npm install react-icons 
import { FaStar } from 'react-icons/fa';
import { useEffect, useState } from "react";


function Products() {
    // useState to create a state variable in the component it has an empty array
    const [products, setProducts] = useState([]);
    // useEffect to fetch the data from the API
    useEffect(() => {
        async function FetchProducts(){
            await fetch("https://play-ecom-api.allcodeapp.com/api/products")
                .then(async (data) => {
                    const response = await data.json();
                    setProducts(response);
                });

        }
        FetchProducts();   
        
    }, []);
    
        

    return (
        <div className="p-6 ">
            <h1 className="text-2xl mb-10">Products</h1>
            {/**grid with 5 columns */}
<div className="grid grid-cols-1  md:grid-cols-5 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-5 gap-6">                {/**map the products array */}
                {products.map((product, index) => (
                    <Product product={product} key={index} />
                ))}
            
            </div>
           
        </div>
    );
}

function Product({product}){
    //array of stars
    const stars = [];
    //loop to create the stars
    for (let i = 0; i < product.rating; i++) {
        //push the stars to the array with the key(i) from the method map
        stars.push(<FaStar key={i} />);
    }
    return(
        <div className="flex flex-col  p-6 bg-gray-300 rounded-xl justify-between ">
        <img src={product.imgUrl} alt={product.name} className="w-full h-[10rem] object-cover"/>
        <h2 className="text-xl semi-bold mb-2 " >{product.name}</h2>

        <p className="flex">{stars}</p>
        
        <Link to={"/product/" + product.id} className="bg-blue-500 text-white p-2  text-center rounded-xl mt-4 hover:bg-blue-950">
            View Product
        </Link>

        </div>
    );
}


export default Products;