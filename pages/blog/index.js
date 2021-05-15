import React from "react";
import Image from "next/image";
import Layout from "../../components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import StoryblokService from "../../utils/storyblok-service";
import { DateTime } from "luxon";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: props.res.data.stories,
    };
  }

  static async getInitialProps({ query }) {
    StoryblokService.setQuery(query);

    const res = await StoryblokService.get("cdn/stories", {
      starts_with: "blog/",
    });

    return {
      res,
    };
  }

  componentDidMount() {
    StoryblokService.initEditor(this);
  }

  render() {
    const posts = this.state.stories;

    return (
      <Layout>
        <main className="section is-medium">
          <h1 className="title is-1 has-text-centered">Blog Posts</h1>
          {!posts.length ? (
            <div className="container mt-6">
              <p className="has-text-centered is-size-4 is-italic">
                Check back later for new blog posts
              </p>
            </div>
          ) : (
            <ul className="container mt-6">
              {posts.map((post) => (
                <li key={post.uuid} className="columns">
                  <div className="column is-one-fifth">
                    <figure className="image is-128by128">
                      {post.content.image ? (
                        <Image
                          src={post.content.image.filename}
                          layout="responsive"
                          width={128}
                          height={128}
                        />
                      ) : (
                        <FontAwesomeIcon size="8x" icon={faImage} />
                      )}
                    </figure>
                  </div>
                  <div className="column">
                    <div>
                      <a className="title is-3" href={`/${post.full_slug}`}>
                        {post.content.title}
                      </a>
                      <p className="is-size-7 mt-3">
                        {DateTime.fromISO(post.created_at, {
                          locale: "gb",
                        }).toLocaleString()}
                      </p>
                      <p className="subtitle is-5 mt-5">{post.content.intro}</p>
                    </div>
                    <div className="my-4">
                      <a href={`/${post.full_slug}`}>Read more</a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </main>
      </Layout>
    );
  }
}
