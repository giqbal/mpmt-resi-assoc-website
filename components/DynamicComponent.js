import Teaser from './Teaser'
import Feature from './Feature'
import Grid from './Grid'
import Placeholder from './Placeholder'
import HeroImage from './HeroImage'
import AboutUs from './AboutUs'

const Components = {
  'teaser': Teaser,
  'grid': Grid,
  'feature': Feature,
  'hero-image': HeroImage,
  'about-us': AboutUs,
}

const DynamicComponent = ({blok}) => {
  if (typeof Components[blok.component] !== 'undefined') {
    const Component = Components[blok.component]
    return <Component blok={blok} />
  }
  return <Placeholder componentName={blok.component}/>
}

export default DynamicComponent
