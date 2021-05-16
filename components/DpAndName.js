import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const DpAndName = ({ image, label, extra_label, ...props }) => (
  <div className="m-4 has-text-centered">
    {image ? (
      <figure className="image is-128x128 is-inline-block">
        <Image src={image} layout="responsive" height={128} width={128} />
      </figure>
    ) : (
      <FontAwesomeIcon size="8x" icon={faUser} />
    )}
    <p>{label}</p>
    {extra_label ? <p className="content">{extra_label}</p> : null}
  </div>
);

export default DpAndName;
