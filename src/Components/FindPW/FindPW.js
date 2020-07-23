import React, { useState } from "react";
import axios from "axios";
import * as S from "./style";

const FindPW = () => {
  const [findForm, setFindForm] = useState({});

  const onSubmit = async e => {
    e.preventDefault();

    try {
      const res = axios.post("", {
        email: findForm.email,
      });
      console.log(res);
    } catch (err) {
      err && console.error(err);
    }
  };

  const onChange = e => {
    setFindForm({
      ...findForm,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <S.FindPWForm onSubmit={onSubmit}>
      <S.FindPWInput
        value={findForm.email || ""}
        type="email"
        name="email"
        onChange={onChange}
        placeholder="이메일 입력"
      />
      <S.FindPWButton type="submit">비번 찾기</S.FindPWButton>
    </S.FindPWForm>
  );
};

export default FindPW;
