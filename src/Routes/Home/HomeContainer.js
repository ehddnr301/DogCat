import React, { useState, useEffect } from "react";
import HomePresenter from "./HomePresenter";

const HomeContainer = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const didMount = async () => {
    try {
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    didMount();
  }, []);

  return <HomePresenter loading={loading} error={error} />;
};

export default HomeContainer;
