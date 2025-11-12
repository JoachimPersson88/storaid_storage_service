import { useState } from "react";

export default function Card({
  created = "",
  title = "",
  description = "",
  imageUrl = ""
}) {
  const [expanded, setExpanded] = useState(false);

  const imgSrc = imageUrl || "/src/project/interface/assets/Card_Img.svg";

  return (
    <div className="card">
      <img className="card_img" src={imgSrc} alt={title} />

      <div className="date">
        <img src="/src/project/interface/ui/Calendar.svg" alt="" />
        <p className="body-text-4">{created}</p>
      </div>

      <h6>{title}</h6>

      <p className={`body-text ${expanded ? "" : "snap"}`}>
        {description}
      </p>

      <a
        className="read_more body-text"
        onClick={(read) => {
          read.preventDefault();
          setExpanded((v) => !v);
        }}
        aria-expanded={expanded}
      >
        {expanded ? "Read less" : "Read more"} →
      </a>
    </div>
  );
}
