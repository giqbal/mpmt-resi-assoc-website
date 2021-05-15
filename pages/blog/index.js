import React from "react";
import Layout from "../../components/Layout";
import StoryblokService from "../../utils/storyblok-service";

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
            <ul>
              {posts.map((post) => (
                <li className="max-w-4xl px-10 my-4 py-6 rounded-lg shadow-md bg-white">
                  <div className="flex justify-between items-center">
                    <span className="font-light text-gray-600">
                      {`
                      ${new Date(post.created_at).getDay()}.
                      ${new Date(post.created_at).getMonth()}.
                      ${new Date(post.created_at).getFullYear()}`}
                    </span>
                  </div>
                  <div className="mt-2">
                    <a
                      className="text-2xl text-gray-700 font-bold hover:text-gray-600"
                      href={`/${post.full_slug}`}
                    >
                      {post.content.title}
                    </a>
                    <p className="mt-2 text-gray-600">{post.content.intro}</p>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <a
                      className="text-blue-600 hover:underline"
                      href={`/${post.full_slug}`}
                    >
                      Read more
                    </a>
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
