import SbEditable from "storyblok-react";
import DpAndName from "./DpAndName";
import { render } from "storyblok-rich-text-react-renderer";

const AboutUs = ({ blok }) => (
  <SbEditable content={blok} className="section is-medium">
    <div id="aboutus" className="container is-fluid p-6">
      <h1 className="title is-1 has-text-centered">About Us</h1>
      <p className="block content">{render(blok.about_text)}</p>
      <h3 className="title is-3 has-text-centered">Committee Members</h3>
      <div className="columns is-multiline is-centered">
        {blok.image_grid.map((member) => (
          <DpAndName
            className="column is-one-quarter"
            image={member.image.filename}
            label={member.label}
          />
        ))}
      </div>
    </div>
  </SbEditable>
);

export default AboutUs;
