import React from "react";
import { Timeline } from "react-twitter-widgets";

const TwitterFeed = ({ profile }) => {
  return (
    <Timeline
      dataSource={{
        sourceType: "profile",
        screenName: profile,
      }}
      options={{
        height: "1000",
      }}
      renderError={(_err) => <p>Could not load timeline</p>}
    />
  );
};

export default TwitterFeed;
