import React, { useState } from "react";
import axios from "axios";
import * as S from "./style";

const Register = ({ history }) => {
  const [registerForm, setRegisterForm] = useState({});
  const [emailIsTrue, setEmailIsTrue] = useState(false);

  const onSubmit = async e => {
    e.preventDefault();

    if (registerForm.email === undefined) {
      window.alert("이메일을 입력하세요");
      return;
    }

    // 이메일 형식이 gmail이나 naver가 맞는지 검사
    const checkEmailArray = ["gmail.com", "naver.com"];
    const EMAIL_BACK_AT_SIGN = 1;
    const checkAvailableEmail = registerForm.email.split("@");
    if (!checkEmailArray.includes(checkAvailableEmail[EMAIL_BACK_AT_SIGN])) {
      window.alert("올바르지 않은 이메일 형식입니다.");
      return;
    }

    if (!emailIsTrue) {
      try {
        const res = await axios.post("http://dsm-sns.ml:8080/api/user", {
          email: registerForm.email,
        });
        console.log(res);
        setEmailIsTrue(true);
      } catch (err) {
        err && console.log(err.response);
      }
    }

    if (emailIsTrue) {
      try {
        const res = await axios.post("http://dsm-sns.ml:8080/api/auth/signUp", {
          email: registerForm.email,
          password: registerForm.pw,
          nickName: registerForm.name,
          inputCode: registerForm.code,
        });
        console.log(res);
      } catch (err) {
        err && console.log(err.response);
      }
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
          value={registerForm.email || ""}
          onChange={onChange}
          name="email"
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
        <S.RegisterButton type="submit">인증번호 보내기</S.RegisterButton>
        <S.RegisterCodeForm onSubmit={onSubmit} emailIsTrue={emailIsTrue}>
          <S.RegisterInput
            value={registerForm.code || ""}
            name="code"
            onChange={onChange}
            type="text"
            placeholder="인증번호"
          />
          <S.RegisterButton type="submit">인증받기</S.RegisterButton>
        </S.RegisterCodeForm>
      </S.RegisterForm>
    </S.RegsiterContainer>
  );
};

export default Register;
