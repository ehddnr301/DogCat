import React, { useState, useEffect } from "react";
import DogPresenter from "./DogPresenter";
import { dogApi } from "../../api";
import { useInfiniteScroll } from "../../Components/useInfiniteScroll";

const DogContainer = () => {
  const [dogImage, setDogImage] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const page = useInfiniteScroll();

  async function fetchMore() {
    try {
      const { data: newDog } = await dogApi.dogImage(page);
      const newDogs = [...dogImage, ...newDog];
      setDogImage(newDogs);
    } catch (e) {
      console.log(e);
    }
  }

  async function fetchInitial() {
    try {
      const { data: dogImage } = await dogApi.dogImage(page);
      setDogImage(dogImage);
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

  return <DogPresenter dogImage={dogImage} error={error} loading={loading} />;
};

export default DogContainer;
