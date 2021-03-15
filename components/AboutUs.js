import Image from 'next/image';
import SbEditable from 'storyblok-react';
import { render } from 'storyblok-rich-text-react-renderer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const AboutUs = ({blok}) => (
  <SbEditable content={blok} className="section is-medium">
    <div id="aboutus" className="container is-fluid p-6">
      <h1 className="title is-1 has-text-centered">About Us</h1>
      <p className="block content">{render(blok.about_text)}</p>
      <h3 className="title is-3 has-text-centered">Committee Members</h3>
      <div className="columns is-multiline is-centered">
        {blok.image_grid.map((member) => <DpAndName className="column is-one-quarter" image={member.image.filename} label={member.label} />)}
      </div>
    </div>
  </SbEditable>
)

const DpAndName = ({image, label}) => (
  <div className="m-4 has-text-centered">
    {
      image?
        <figure className="image is-128x128 is-inline-block">
          <Image 
            src={image}
            layout='responsive'
            height={128}
            width={128}
          />
        </figure>
      :
        <FontAwesomeIcon size="8x" icon={faUser} />
    }
    <p className="block content">{label}</p>
  </div>
)

export default AboutUs
