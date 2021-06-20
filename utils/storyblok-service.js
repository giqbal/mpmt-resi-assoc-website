import StoryblokClient from "storyblok-js-client";

class StoryblokService {
  constructor() {
    this.devMode = process.env.VERCEL ? false : true;
    this.token =
      !this.devMode && process.env.VERCEL_GIT_COMMIT_REF === "main"
        ? process.env.PUBLISH_TOKEN
        : process.env.PREVIEW_TOKEN;
    this.client = new StoryblokClient({
      accessToken: this.token,
      cache: {
        clear: "auto",
        type: "memory",
      },
    });

    this.query = {};
  }

  getCacheVersion() {
    return this.client.cacheVersion;
  }

  // ask Storyblok's Content API for content of story
  get(slug, params) {
    params = params || {};

    if (
      this.devMode ||
      process.env.VERCEL_GIT_COMMIT_REF === "preview" ||
      this.getQuery("_storyblok")
    ) {
      params.version = "draft";
    } else {
      params.version = "published";
    }

    if (
      typeof window !== "undefined" &&
      typeof window.StoryblokCacheVersion !== "undefined"
    ) {
      params.cv = window.StoryblokCacheVersion;
    }

    return this.client.get(slug, params);
  }

  // initialize the connection between Storyblok & Next.js in Visual Editor
  initEditor(reactComponent) {
    if (window.storyblok) {
      window.storyblok.init();

      // reload on Next.js page on save or publish event in Storyblok Visual Editor
      window.storyblok.on(["change", "published"], () => location.reload(true));

      // Update state.story on input in Visual Editor
      // this will alter the state and replaces the current story with a current raw story object and resolve relations
      window.storyblok.on("input", (event) => {
        if (
          event.story.content._uid === reactComponent.state.story.content._uid
        ) {
          event.story.content = window.storyblok.addComments(
            event.story.content,
            event.story.id
          );
          window.storyblok.resolveRelations(
            event.story,
            ["featured-articles.articles"],
            () => {
              reactComponent.setState({
                story: event.story,
              });
            }
          );
        }
      });
    }
  }

  setQuery(query) {
    this.query = query;
  }

  getQuery(param) {
    return this.query[param];
  }

  bridge() {
    if (!this.getQuery("_storyblok") && !this.devMode) {
      return "";
    }
    return (
      <script
        src={"//app.storyblok.com/f/storyblok-latest.js?t=" + this.token}
      ></script>
    );
  }
}

const storyblokInstance = new StoryblokService();

export default storyblokInstance;
