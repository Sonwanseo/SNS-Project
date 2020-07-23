import React, { useState } from "react";
import axios from "axios";
import * as S from "./style";

const FindID = () => {
  const [name, setName] = useState("");

  const onChange = e => {
    setName(e.target.value);
  };

  const onSubmit = async e => {
    e.preventDefault();

    try {
      const res = axios.post("", {});
    } catch (err) {
      err && console.error(err);
    }
  };

  return (
    <S.FindIDForm onSubmit={onSubmit}>
      <S.FindIDInput type="text" placeholder="이름 입력" onChange={onChange} />
      <S.FindIDButton type="submit">찾기</S.FindIDButton>
    </S.FindIDForm>
  );
};

export default FindID;
