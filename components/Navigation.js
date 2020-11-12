import Image from 'next/image';

const Navigation = ({settings}) => (
  <nav className="navbar" role="navigation">
    <div className="navbar-brand">
      <a className="flex" href="/">
        <Image 
          className="h-8 w-auto sm:h-10"
          src="/logo_transparent.png"
          width={200}
          height={66}
          loading="eager"
        />
      </a>
    </div>
  </nav>
)

export default Navigation
