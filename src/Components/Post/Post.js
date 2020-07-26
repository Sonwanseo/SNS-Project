import React from "react";
import * as S from "./style";

const Post = () => {
  return (
    <S.PostContainer>
      <S.PostTopWrapper>
        <S.PostAuthor>Hello</S.PostAuthor>
        <S.PostTextContent></S.PostTextContent>
      </S.PostTopWrapper>
      <S.PostMiddleWrapper>
        <S.PostImg />
        <S.PostLikes>1</S.PostLikes>
        <S.PostWriteComments />
        <S.PostShare />
      </S.PostMiddleWrapper>
      <S.PostBottomWrapper>
        <S.PostReadComments />
      </S.PostBottomWrapper>
    </S.PostContainer>
  );
};

export default Post;
