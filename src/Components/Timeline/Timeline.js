import React, { useState } from "react";
import Post from "../Post/Post";

const Timeline = () => {
  const [postLists, setPostLists] = useState([
    {
      id: 1,
      author: "sonwanseo",
      content: "This is an example.",
      src:
        "https://lh3.googleusercontent.com/proxy/esK8BSjDUOe9X1q4ty9eDMJFYDzxZLeqtav-anFEpPi-Rfg3GlQho31cUASHXaUwxHtSxn5qhd9bq1aitAr_Y8FTsJ0teN9OSm9ceHV0VgIlCKWaVA",
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
  ]);
  let id = 4;
  return (
    <div>
      {postLists.map(post => (
        <Post
          id={post.id}
          author={post.author}
          content={post.content}
          src={post.src || null}
          likes={post.likes}
        />
      ))}
    </div>
  );
};

export default Timeline;
