import React from "react";
import Timeline from "../../Components/Timeline/Timeline";
import { useEffect } from "react";

const HomeContainer = props => {
  useEffect(() => {
    // 토큰이 유효한건지 검사해주는 서버의 api가 있어야 됨
    if (!window.localStorage.getItem("accessToken")) {
      window.history.back();
    }
  }, []);

  return <Timeline />;
};

export default HomeContainer;
