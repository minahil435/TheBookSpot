import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import BookList from './Booklist';
import  './Home.css';
import { fetchProducts } from '../../bookData';

const Home = () => {
    const [bookData, setbookData] = useState([]);

    // We want to only fetch data after the first render. not after every render.
    // That is the reason were using the useEffect hook and passing and empty array as the second argument.
    useEffect(() => {
        fetchProducts().then(
          bookData => {
            setbookData(bookData);
            }
        )
    }, []);

    return (
        <div id="homeMainDiv">
              <div className = "bookGrid">
          {bookData.map((item, index) => {
            return <BookList
              key={item.id}
              item={item}
              index={index}
            />
          })
          }
      
              </div>
        </div>
    )
};

export default Home;