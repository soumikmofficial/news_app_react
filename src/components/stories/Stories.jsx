import React from "react";
import "./stories.scss";
import { useGlobalContext } from "../../context";
import moment from "moment";

function Stories() {
  const { loading, hits, removeStory } = useGlobalContext();
  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <section className="stories">
      {hits.map((story) => {
        const { objectID, author, title, url, num_comments, created_at } =
          story;
        return (
          <article key={objectID} className="story">
            <h2>{title}</h2>
            <p>
              <span>{author}</span> |{" "}
              {moment(created_at).format("MMMM Do, YYYY")}
            </p>
            <a href={url} className="read" target="_blank" rel="noreferrer">
              Read
            </a>
            <button className="remove" onClick={() => removeStory(objectID)}>
              Remove
            </button>
          </article>
        );
      })}
    </section>
  );
}

export default Stories;
