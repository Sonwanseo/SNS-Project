import React, { useState } from "react";
import axios from "axios";
import * as S from "./style";

const VerifyEmail = ({ history }) => {
  const [verify, setVerify] = useState({});
  const [emailIsTrue, setEmailIsTrue] = useState(false);

  const onSubmit = async e => {
    e.preventDefault();
    if (!emailIsTrue) {
      try {
        const res = await axios.post("http://dsm-sns.ml:8080/api/user", {
          email: verify.email,
        });
        setEmailIsTrue(true);
        if (res.code === verify.code) {
          return res.pw;
        }
      } catch (err) {
        err && console.log(err.response);
      }
    }
  };

  const onChange = e => {
    setVerify({
      ...verify,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <S.VerifyEmailForm onSubmit={onSubmit}>
      <S.VerifyEmailInput
        value={verify.email || ""}
        name="email"
        onChange={onChange}
        type="email"
        placeholder="이메일"
      />
      <S.VerifyEmailButton type="submit">
        이메일
        <br />
        입력
      </S.VerifyEmailButton>
      <S.VerifyEmailCodeForm onSubmit={onSubmit} emailIsTrue={emailIsTrue}>
        <S.VerifyEmailCodeInput
          value={verify.code || ""}
          name="code"
          onChange={onChange}
          type="text"
          placeholder="인증번호"
        />
        <S.VerifyEmailButton type="submit">인증번호 입력</S.VerifyEmailButton>
      </S.VerifyEmailCodeForm>
    </S.VerifyEmailForm>
  );
};

export default VerifyEmail;
