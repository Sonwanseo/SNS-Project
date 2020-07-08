import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./style";
import axios from "axios";

const Login = () => {
  const [loginForm, setLoginForm] = useState({ id: "", pw: "" });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post("http://dsm-sns.ml:8080/api/auth/signIn", {
        userId: loginForm.id,
        password: loginForm.pw,
      });
      console.log(res);
    } catch (err) {
      err && console.error(err);
    }
  };

  const onChange = e => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value,
    });
  };

  const clearInput = () => {
    setLoginForm({ id: "", pw: "" });
  };

  return (
    <S.LoginMainForm onSubmit={onSubmit}>
      <S.LoginPassportContainer>
        <S.LoginPassport
          href="http://www.dsm-sns.ml:8080/api/auth/google"
          target="_blank"
        >
          <S.LoginPassportImg
            src="https://pbs.twimg.com/profile_images/770139154898382848/ndFg-IDH.jpg"
            alt="구글로 로그인"
          />
        </S.LoginPassport>
        <S.LoginPassport
          href="http://www.dsm-sns.ml:8080/api/auth/facebook"
          target="_blank"
        >
          <S.LoginPassportImg
            src="https://www.facebook.com/images/fb_icon_325x325.png"
            alt="페이스북으로 로그인"
          />
        </S.LoginPassport>
        <S.LoginPassport
          href="http://www.dsm-sns.ml:8080/api/auth/github"
          target="_blank"
        >
          <S.LoginPassportImg
            src="https://miro.medium.com/max/318/1*1OKmA2EdGln8O6RCVORgGg.png"
            alt="깃허브로 로그인"
          />
        </S.LoginPassport>
      </S.LoginPassportContainer>
      <S.LoginInputBox
        value={loginForm.id || ""}
        onChange={onChange}
        name="id"
        type="text"
        placeholder="E-mail"
      />
      <S.LoginInputBox
        value={loginForm.pw || ""}
        onChange={onChange}
        name="pw"
        type="password"
        placeholder="Password"
      />
      <S.LoginButton type="submit" onClick={clearInput}>
        로그인
      </S.LoginButton>
      <S.LoginLinkContainer>
        <Link to="/findID" style={{ display: "block", textDecoration: "none" }}>
          E-mail 찾기
        </Link>
        <Link to="/findPW" style={{ display: "block", textDecoration: "none" }}>
          PW 찾기
        </Link>
        <Link
          to="/verifyEmail"
          style={{ display: "block", textDecoration: "none" }}
        >
          회원가입
        </Link>
      </S.LoginLinkContainer>
    </S.LoginMainForm>
  );
};

export default Login;
