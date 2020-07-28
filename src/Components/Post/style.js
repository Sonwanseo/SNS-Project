import styled from "styled-components";

export const PostContainer = styled.div`
  width: 40%;
  height: 40%;
  margin: 0 auto;
  border-bottom: 1px solid pink;
`;

export const PostTopWrapper = styled.div`
  width: 100%;
  height: 40%;
`;

export const PostAuthor = styled.h1`
  display: block;
  font-weight: bolder;
  font-size: 30px;
  margin: 0;
`;

export const PostTextContent = styled.p`
  display: inline-block;
  font-size: 18px;
  font-weight: lighter;
  margin: 0;
`;

export const PostMiddleWrapper = styled.div`
  width: 100%;
  height: 60%;
`;

export const PostImg = styled.img`
  display: block;
  width: 40%;
  margin: 0 auto;
`;

export const PostLikes = styled.div`
  display: inline;
  width: 30px;
  font-size: 20px;
  margin-right: 35%;
`;

export const PostLikesImg = styled.img`
  width: 5%;
  cursor: pointer;
`

export const PostWriteComments = styled.img`
  display: inline;
  width: 5%;
  cursor: pointer;
  margin-right: 35%;
`;

export const PostShare = styled.img`
  display: inline;
  width: 8%;
  cursor: pointer;
`;

export const PostBottomWrapper = styled.div``;

export const PostReadComments = styled.div``;
