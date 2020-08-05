import React from "react";
import Timeline from "../../Components/Timeline/Timeline";
import axios from "axios";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const HomeContainer = props => {
  const history = useHistory();

  const validateToken = async () => {
    const res = await axios({
      method: "get",
      url: "http://www.dsm-sns.ml:8080/api/auth/tokenValidation",
      headers: {
        "x-access-token": localStorage.getItem("accessToken"),
      },
    });
    if (res.status === 404) history.goBack();
  };

  useEffect(() => {
    validateToken();
  }, []);

  return <Timeline />;
};

export default HomeContainer;
