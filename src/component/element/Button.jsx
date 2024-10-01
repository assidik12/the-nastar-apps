import { Link } from "react-router-dom";
export default function ColorButtons({ ...props }) {
  return (
    <button>
      <Link
        to={props.link}
        className={`${props.className} ${props.bg} ${props.text} ${props.width} ${props.height} ${props.fontSize} ${props.border} ${props.borderRadius} ${props.padding} ${props.margin} ${props.transition} ${props.hover} ${props.hoverColor}`}
      >
        {props.text}
      </Link>
    </button>
  );
}
