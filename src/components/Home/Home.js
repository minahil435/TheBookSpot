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
    <Layout>
      <div
        className="bookGrid"
        style={{ marginTop: bookData.length > 0 ? "66px" : "24px" }}
      >
        {bookData.length > 0 ? (
          bookData.map((item, index) => {
            return <BookList key={item.id} item={item} index={index} />;
          })
        ) : (
          <Spinner />
        )}
      </div>
    </Layout>
  );
};

export default Home;
