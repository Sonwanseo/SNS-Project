import React, { useState } from "react";
import axios from "axios";
import * as S from "./style";

const VerifyEmail = () => {
  const [verifyCode, setVerifyCode] = useState();

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.options("", verifyCode);
      console.log(res);
    } catch (err) {
      err && console.log(err.response);
    }
  };

  const onChange = e => {
    setVerifyCode(e.target.value);
  };

  return (
    <S.VerifyEmailContainer onSubmit={onSubmit}>
      <S.VerifyEmailInput
        value={verifyCode || ""}
        onChange={onChange}
        type="number"
        placeholder="인증번호"
      />
      <S.VerifyEmailButton type="submit">인증번호 보내기</S.VerifyEmailButton>
    </S.VerifyEmailContainer>
  );
};

export default VerifyEmail;
