import React from "react";
import "./buttons.scss";
import { useGlobalContext } from "../../context";

function Buttons() {
  const { loading, nbPages, page, handlePage } = useGlobalContext();
  return (
    <section className="buttons">
      <button disabled={loading} onClick={() => handlePage("decrease")}>
        Prev
      </button>
      <p>
        <span>{page + 1}</span> of <span>{nbPages}</span>
      </p>
      <button disabled={loading} onClick={() => handlePage("increase")}>
        Next
      </button>
    </section>
  );
}

export default Buttons;
