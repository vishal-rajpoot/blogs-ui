import React from "react";
import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";

const Post = ({ id, title, config, created_at }) => {
  console.log(config.image, "uihiusgiusg");
  return (
    <div className="post">
      <div className="image">
        <Link to={`/post/${id}`}>
          <img src={"http://localhost:8088/" + config.image} alt="pic" />
        </Link>
      </div>
      <div className="texts">
        <Link to={`/post/${id}`}>
          <h2>{title}</h2>
        </Link>

        <p className="info">
          <span className="author">author: Vishal Rajput</span>
          <time>{formatISO9075(new Date(created_at))}</time>
        </p>
        <p className="summary">{config.summary}</p>
        <p className="content">{config.content}</p>

      </div>
    </div>
  );
};

export default Post;
