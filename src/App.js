import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";
import Container from "@material-ui/core/Container";
import { getNews } from "./helpers/getNews";

function App() {
  const [category, setCategory] = useState("");
  const [news, saveNews] = useState([]);

  const getNewsApi = async (category) => {
    const news = await getNews(category);
    saveNews(news);
  };
  useEffect(() => {
    getNewsApi(category);
  }, [category]);

  return (
    <Fragment>
      <Header />
      <Container fixed>
        <Form setCategory={setCategory} />
        <List news={news} />
      </Container>
    </Fragment>
  );
}

export default App;
