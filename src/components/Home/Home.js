import React, { useEffect, useState } from 'react';
import BookList from './Booklist';
import './Home.css';
import { fetchProducts } from '../../bookData';

const Home = () => {
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    fetchProducts().then(
      bookData => {
        setBookData(bookData);
      }
    )
  }, []);

  return (
    <div id="homeMainDiv">
      <div className="bookGrid">
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