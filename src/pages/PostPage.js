import { formatISO9075 } from "date-fns";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostPage = () => {
  const [postInfo, setPostInfo] = useState(null);
  const { id } = useParams();
  console.log(postInfo, 'postInfo')

  useEffect(() => {
    fetch(`http://localhost:8088/api/posts/${id}`).then((response) =>
      response.json().then((info) => {
        setPostInfo(info);
      })
    );
  }, [id]);

  if (!postInfo) return "";
  return (
    <div className="post-page">
      <h1>{postInfo.title}</h1>
      <time>{formatISO9075(new Date(postInfo.created_at))}</time>
      <div className="author">by @Vishal Rajput</div>
      
    <div className="image">
      <img src={`http://localhost:8088/${postInfo.config.image}`} alt="pic" />
      </div>

      <div className="summary" dangerouslySetInnerHTML={{__html:postInfo.config.summary}}/>
      <div className="content" dangerouslySetInnerHTML={{__html:postInfo.config.content}}/>
    </div>
  );
};

export default PostPage;
