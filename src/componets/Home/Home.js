import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import BookList from './Booklist';
import  './Home.css';

// import { fetchProducts } from '../fetchData';

const Home = () => {
    const [productData, setProductData] = useState([]);

    // We want to only fetch data after the first render. not after every render.
    // That is the reason were using the useEffect hook and passing and empty array as the second argument.
    // useEffect(() => {
    //     fetchProducts().then(
    //         productData => {
    //             setProductData(productData);
    //         }
    //     )
    // }, []);

    return (
        <div id="homeMainDiv">
              <div className = "bookGrid">
        
                <BookList />
                <BookList />

                <BookList />
                <BookList />
                <BookList />
                <BookList />
                
        
              </div>
        </div>
    )
};

export default Home;