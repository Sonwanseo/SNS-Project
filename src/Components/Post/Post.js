import React from "react";
import * as S from "./style";

const commentsImg =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQB2f17TKRAxpv6gWFlFSNRvUQKQ9ScpZdt4A&usqp=CAU";
const likesImg =
  "https://apps.shopifycdn.com/listing_images/406aa0274e90a5a0191603f65aee1ffd/icon/6532874de93b13f5ac71fef1cb68b815.png";

const Post = ({ id, author, content, src, likes, plusLikes }) => {
  return (
    <S.PostContainer>
      <S.PostTopWrapper>
        <S.PostAuthor>{author}</S.PostAuthor>
        <S.PostTextContent>{content}</S.PostTextContent>
      </S.PostTopWrapper>
      <S.PostMiddleWrapper>
        <S.PostImg src={src} />
        <div>
          <S.PostLikes>{likes}</S.PostLikes>
          <S.PostLikesImg
            src={likesImg}
            onClick={() => {
              plusLikes(id);
            }}
          />
        </div>
        <S.PostWriteComments
          src={commentsImg}
          onClick={() => console.log("clicked")}
        />
        <S.PostShare
          src={
            "https://thumbs.dreamstime.com/b/share-button-square-d-push-sign-177298190.jpg"
          }
          onClick={() => console.log("shared")}
        />
      </S.PostMiddleWrapper>
      <S.PostBottomWrapper>
        <S.PostReadComments />
      </S.PostBottomWrapper>
    </S.PostContainer>
  );
};

export default Post;
