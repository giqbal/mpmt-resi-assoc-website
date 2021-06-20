import React from "react";
import Image from "next/image";
import SbEditable from "storyblok-react";
import { render } from "storyblok-rich-text-react-renderer";

const Teaser = ({ blok }) => {
  return (
    <SbEditable content={blok}>
      <section className="hero is-light is-fullheight">
        <div className="hero-body container">
          <div className="columns my-1">
            <div className="column is-two-thirds my-6">
              <h2 className="title">{blok.headline}</h2>
              <h3 className="">{render(blok.contact_us)}</h3>
            </div>
            <div className="column">
              <Image
                src={blok.image.filename}
                alt={blok.image.alt}
                className="block"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>
    </SbEditable>
  );
};

export default Teaser;
