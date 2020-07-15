import React, { useState } from "react";
import * as S from "./style";
import axios from "axios";

const Login = () => {
  const [loginForm, setLoginForm] = useState({ id: "", pw: "" }); // 로그인 id, pw 데이터 받는 객체
  const [isLogined, setIsLogined] = useState(false); // 로그인이 되었는지 검사하는 객체

  const onSubmit = async e => {
    e.preventDefault();

    // 이메일 형식이 gmail이나 naver가 맞는지 검사
    const checkEmailArray = ["gmail.com", "naver.com"];
    const EMAIL_BACK_AT_SIGN = 1;
    const checkAvailableEmail = loginForm.id.split("@");

    if (!checkEmailArray.includes(checkAvailableEmail[EMAIL_BACK_AT_SIGN])) {
      window.alert("올바르지 않은 이메일 형식입니다.");
      clearInput();
      return;
    }

    try {
      // loginForm 데이터를 보내고 요청이 성공했다면 홈 화면으로 이동
      const res = await axios.post(
        "http://www.dsm-sns.ml:8080/api/auth/signIn",
        {
          userId: loginForm.id,
          password: loginForm.pw,
        }
      );
      if (res.status === 200) {
        setIsLogined(true);
        // 타임라인(홈) 경로로 이동하는 코드 작성해야 함
        // 홈에서는 isLogined가 true인지 검사해서 true라면 mount false면 login으로 redirect
      }
    } catch (err) {
      window.alert("에러 발생");
      console.error(err);
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
      <S.PassportContainer>
        <S.PassportItem
          href="http://www.dsm-sns.ml:8080/api/auth/google"
          target="_blank"
        >
          <S.PassportImg
            src="https://pbs.twimg.com/profile_images/770139154898382848/ndFg-IDH.jpg"
            alt="구글로 로그인"
          />
        </S.PassportItem>
        <S.PassportItem
          href="http://www.dsm-sns.ml:8080/api/auth/facebook"
          target="_blank"
        >
          <S.PassportImg
            src="https://www.facebook.com/images/fb_icon_325x325.png"
            alt="페이스북으로 로그인"
          />
        </S.PassportItem>
        <S.PassportItem
          href="http://www.dsm-sns.ml:8080/api/auth/github"
          target="_blank"
        >
          <S.PassportImg
            src="https://miro.medium.com/max/318/1*1OKmA2EdGln8O6RCVORgGg.png"
            alt="깃허브로 로그인"
          />
        </S.PassportItem>
      </S.PassportContainer>
      <S.LoginInputBox
        value={loginForm.id || ""}
        onChange={onChange}
        name="id"
        type="email"
        placeholder="E-mail"
      />
      <S.LoginInputBox
        value={loginForm.pw || ""}
        onChange={onChange}
        name="pw"
        type="password"
        placeholder="Password"
      />
      <S.LoginButton type="submit">로그인</S.LoginButton>
      <S.LoginLinkContainer>
        <S.LoginLink to="/findID">E-mail 찾기</S.LoginLink>
        <S.LoginLink to="/findPW">PW 찾기</S.LoginLink>
        <S.LoginLink to="/verifyEmail">회원가입</S.LoginLink>
      </S.LoginLinkContainer>
    </S.LoginMainForm>
  );
};

export default Login;
