import React from "react";
import Image from "next/image";
import SbEditable from "storyblok-react";
import DpAndName from "./DpAndName";
import { DateTime } from "luxon";
import { render } from "storyblok-rich-text-react-renderer";
import TwitterFeed from "./TwitterFeed";

const BlogPost = ({ blok, createdAt }) => {
  return (
    <SbEditable content={blok} key={blok._uid}>
      <div className="section is-medium">
        <div className="container">
          <h1 className="title is-1 has-text-centered is-spaced">
            {blok.title}
          </h1>
          <div className="mt-6 columns is-vcentered">
            <DpAndName
              className="column is-one-quarter"
              image={blok.author[0].image.filename}
              label={blok.author[0].label}
              extra_label={DateTime.fromISO(createdAt, {
                locale: "gb",
              }).toLocaleString()}
            />
            <p className="subtitle is-size-3 column is-italic">{blok.intro}</p>
          </div>
          <figure className="image is-2by1">
            <Image layout="fill" src={blok.image.filename} />
          </figure>
        </div>
        <div className="container px-5 my-6">
          <div className="content">
            {render(blok.long_text, {
              blokResolvers: {
                ["twitter-feed"]: (props) => <TwitterFeed {...props} />,
              },
              defaultBlokResolver: (name, props) => (
                <div>
                  <code>Missing blok resolver for blok type "{name}".</code>
                  <pre>
                    <code>{JSON.stringify(props, undefined, 2)}</code>
                  </pre>
                </div>
              ),
            })}
          </div>
        </div>
      </div>
    </SbEditable>
  );
};

export default BlogPost;
