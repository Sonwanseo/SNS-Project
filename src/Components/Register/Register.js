import React, { useState } from "react";
import axios from "axios";
import * as S from "./style";

const Register = ({ history }) => {
  const [registerForm, setRegisterForm] = useState({});

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post("", {
        userId: registerForm.id,
        password: registerForm.pw,
        name: registerForm.name,
      });
      console.log(res);
    } catch (err) {
      err && console.log(err.response);
    }
  };

  const onChange = e => {
    setRegisterForm({
      ...registerForm,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <S.RegsiterContainer>
      <S.RegisterTitle>회원가입</S.RegisterTitle>
      <S.RegisterForm onSubmit={onSubmit}>
        <S.RegisterInput
          value={registerForm.id || ""}
          onChange={onChange}
          name="id"
          type="email"
          placeholder="E-mail"
        />
        <S.RegisterInput
          value={registerForm.pw || ""}
          onChange={onChange}
          name="pw"
          type="password"
          placeholder="PW"
        />
        <S.RegisterInput
          value={registerForm.name || ""}
          onChange={onChange}
          name="name"
          type="text"
          placeholder="이름"
        />
        <S.RegisterButton type="submit">인증받기</S.RegisterButton>
      </S.RegisterForm>
    </S.RegsiterContainer>
  );
};

export default Register;
