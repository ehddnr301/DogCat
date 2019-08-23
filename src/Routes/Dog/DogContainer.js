import React, { useState, useEffect } from "react";
import DogPresenter from "./DogPresenter";
import { dogApi } from "../../api";

const DogContainer = () => {
  const [dogImage, setDogImage] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const didMount = async () => {
    try {
      const { data: dogImage } = await dogApi.dogImage();
      setDogImage(dogImage);
    } catch {
      setError("Can't find Any Dog");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    didMount();
  }, []);

  return <DogPresenter dogImage={dogImage} error={error} loading={loading} />;
};

export default DogContainer;
