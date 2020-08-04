import React, { useState, useEffect } from "react";
import axios from "axios";
import * as S from "./style";
import Post from "../Post/Post";
import Write from "../Write/Write";

const Timeline = () => {
  const [postLists, setPostLists] = useState([
    {
      id: 1,
      author: "sonwanseo",
      content: "This is an example.",
      src:
        "https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/2D9/image/h_9JUWqGXTUGB9ZLyetUmpLpUhk.jpg, https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/2D9/image/h_9JUWqGXTUGB9ZLyetUmpLpUhk.jpg",
      likes: 100,
    },
    {
      id: 2,
      author: "wanseoson",
      content: "This is second example.",
      likes: 500,
    },
    {
      id: 3,
      author: "seosonwan",
      content: "This is third example.",
      likes: 500000,
    },
    {
      id: 4,
      author: "seosoasdf",
      content: "This is third example.",
      likes: 500000,
    },
    {
      id: 5,
      author: "seosqwgweqn",
      content: "This is third example.",
      likes: 500000,
    },
  ]);

  // const [postLists, setPostLists] = useState({});

  const getPostLists = async () => {
    try {
      const res = await axios.get("", {});
      setPostLists(res);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getPostLists();
  }, []);

  const plusLikes = async id => {
    try {
      await axios.post("", {
        id,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <S.TimelineContainer>
      <Write />
      {postLists.map(post => (
        <Post
          key={post.id}
          author={post.author}
          content={post.content}
          src={post.src || null}
          likes={post.likes}
          plusLikes={plusLikes}
        />
      ))}
    </S.TimelineContainer>
  );
};

export default Timeline;
