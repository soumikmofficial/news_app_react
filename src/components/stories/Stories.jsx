import React from "react";
import "./stories.scss";
import { useGlobalContext } from "../../context";

function Stories() {
  const { loading } = useGlobalContext();
  console.log(loading);
  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  return <div>stories component</div>;
}

export default Stories;
