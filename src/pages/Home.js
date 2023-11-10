import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import Products from '../componentes/Products';


function Home(){
    const [featured, setFeatured] = useState({});
    
    useEffect(() => {
        async function fetchFeaturedProduct (){
            await fetch("https://play-ecom-api.allcodeapp.com/api/featured")
                .then(async (data) =>{
                    const response = await data.json();
                    setFeatured(response);
                });
        }
        fetchFeaturedProduct();
        //empty array to load only once the information from the API
    }, []);
    
    return (
       <main>
            <header className='h-25rem w-screen relative sd:w-screen'>
                <img src={featured.bannerUrl} className='h-[25rem] w-screen object-cover' alt=''/>
                
                <div className='absolute h-[25rem] w-screen flex justify-center  text-center items-center bottom-0 bg-gray-900/80'>              
                    <div className='flex flex-col items-center '>
                        <h1 className='text-white text-6xl mb-8'>{featured.promoTitle}</h1>          
                        <Link to={"/product/" + featured.id } className='bg-white p-4 text-black rounded-xl  justify-center  hover:bg-blue-300'>
                                View Product
                        </Link>
                    
                    </div>
                </div>
            </header>
            < Products  />
       </main>
    );
}


export default Home;