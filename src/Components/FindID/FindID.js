import React from "react";
import * as S from "./style";

const FindID = () => {
  return (
    <S.FindIDContainer>
      <S.FindIDInput type="text" placeholder="이름 입력" />
      <S.FindIDButton>찾기</S.FindIDButton>
    </S.FindIDContainer>
  );
};

export default FindID;
