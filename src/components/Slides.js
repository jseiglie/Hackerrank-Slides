import React, { useState } from "react";

const Slide = ({ title, text }) => {
  return (
    <div id="slide" className="card text-center">
      <h1 data-testid="title">{title}</h1>
      <p data-testid="text">{text}</p>
    </div>
  );
};

const Slides = ({ slides }) => {
  const [active, setActive] = useState(0);
  const { title, text } = slides[active];

  return (
    <div>
      <div id="navigation" className="text-center">
        <button
          data-testid="button-restart"
          className="small outlined"
          disabled={active === 0}
          onClick={() => setActive(0)}
        >
          Restart
        </button>
        <button
          data-testid="button-prev"
          className="small"
          disabled={active === 0}
          onClick={() => setActive(active - 1)}
        >
          Prev
        </button>
        <button
          data-testid="button-next"
          className="small"
          disabled={active === slides.length - 1}
          onClick={() => setActive(active + 1)}
        >
          Next
        </button>
        <Slide title={title} text={text} />
      </div>
    </div>
  );
};

export default Slides;
