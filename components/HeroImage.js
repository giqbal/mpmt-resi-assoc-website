import Image from 'next/image';
import SbEditable from 'storyblok-react';

const HeroImage = ({blok}) => (
  <SbEditable content={blok} className="hero">
    <figure className="image is-3by1">
      <Image 
        src={blok.image.filename}
        alt={blok.image.alt}
        layout="fill"
      />
    </figure>
  </SbEditable>
)

export default HeroImage
