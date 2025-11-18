import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Highlight from "../components/ui/Highlight.jsx";

export default function Highlights() {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Why choose <span className="purple">Library</span>
          </h2>
          <div className="highlight__wrapper">
            <Highlight
              icon={<FontAwesomeIcon icon="bolt" />}
              title="Easy and Quick"
              para="Get access to the book you purchased online instantly"
            />
            <Highlight
              icon={<FontAwesomeIcon icon="book-open" />}
              title="Easy and Quick"
              para="Get access to the book you purchased online instantly"
            />
            <Highlight
              icon={<FontAwesomeIcon icon="tags" />}
              title="Easy and Quick"
              para="Get access to the book you purchased online instantly"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
