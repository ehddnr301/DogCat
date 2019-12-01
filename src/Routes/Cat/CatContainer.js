import React, { useState, useEffect } from "react";
import CatPresenter from "./CatPresenter";
import { catApi } from "../../api";
import { useInfiniteScroll } from "../../Components/useInfiniteScroll";

const CatContainer = () => {
  const [catImage, setCatImage] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const page = useInfiniteScroll();

  async function fetchMore() {
    try {
      const { data: newCat } = await catApi.catImage(page);
      const newCats = [...catImage, ...newCat];
      setCatImage(newCats);
    } catch (e) {
      console.log(e);
    }
  }

  async function fetchInitial() {
    try {
      const { data: catImage } = await catApi.catImage(page);
      setCatImage(catImage);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchInitial();
  }, []);
  useEffect(() => {
    fetchMore();
  }, [page]);

  return <CatPresenter catImage={catImage} error={error} loading={loading} />;
};

export default CatContainer;
