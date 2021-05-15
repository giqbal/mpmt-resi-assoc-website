import React from "react";
import Image from "next/image";
import SbEditable from "storyblok-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { render } from "storyblok-rich-text-react-renderer";

const BlogPost = ({ blok }) => {
  return (
    <SbEditable content={blok} key={blok._uid}>
      <div className="section is-medium">
        <div className="container">
          <h1 className="title is-1 has-text-centered is-spaced">
            {blok.title}
          </h1>
          <figure className="image is-2by1">
            <Image layout="fill" src={blok.image.filename} />
          </figure>
          <div className="has-text-centered mt-6">
            <FontAwesomeIcon className="mb-4" size="1x" icon={faQuoteLeft} />
            <p className="subtitle is-3 is-inline mx-1">{blok.intro}</p>
            <FontAwesomeIcon className="mb-4" size="1x" icon={faQuoteRight} />
          </div>
        </div>
      </div>
      <div className="container px-5 mb-6">
        <div className="content">{render(blok.long_text)}</div>
      </div>
    </SbEditable>
  );
};

export default BlogPost;
