import React, { useState, useEffect } from "react";
import CatPresenter from "./CatPresenter";
import { catApi } from "../../api";

const CatContainer = () => {
  const [catImage, setCatImage] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const didMount = async () => {
    try {
      const { data: catImage } = await catApi.catImage();
      setCatImage(catImage);
    } catch {
      setError("Can't find Any Cat");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    didMount();
  }, []);

  return <CatPresenter catImage={catImage} error={error} loading={loading} />;
};

export default CatContainer;
