import React, { useEffect, useState } from "react";
import BookList from "./Booklist";
import "./Home.css";
import Spinner from "../spinner/Spinner";

import { fetchProducts } from "../../bookData";
import Layout from "../layout/Layout";

const Home = () => {
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    fetchProducts().then((bookData) => {
      setBookData(bookData);
    });
  }, []);

  return (
    <div id="homeMainDiv">
      <Layout>
        <div className="bookGrid">
          {bookData.length > 0 ? (
            bookData.map((item, index) => {
              return <BookList key={item.id} item={item} index={index} />;
            })
          ) : (
            <Spinner />
          )}
        </div>
      </Layout>
    </div>
  );
};

export default Home;
