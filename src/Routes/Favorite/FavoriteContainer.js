import React, { useState, useEffect } from "react";
import FavoritePresenter from "./FavoritePresenter";

const FavoriteContainer = () => {
  const [FavoriteImage, setFavoriteImage] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const didMount = async () => {
    try {
      const favorite = localStorage.getItem("favorite");
      const FavoriteImage = favorite
        .substr(1)
        .slice(0, -1)
        .split(",")
        .map(item => item.substr(1).slice(0, -1));
      setFavoriteImage(FavoriteImage);
    } catch {
      setError("Can't find anything");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    didMount();
  }, []);

  return (
    <FavoritePresenter
      FavoriteImage={FavoriteImage}
      error={error}
      loading={loading}
    ></FavoritePresenter>
  );
};

export default FavoriteContainer;
