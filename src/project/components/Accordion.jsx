import { useState } from "react";

export default function Accordion({
  title = "",
  description = "",
}) {
  const [expanded, setExpanded] = useState();

  return (
    <div className={`acc ${expanded ? "is-open" : ""}`}>
      <a
        href="#"
        className="acc_header"
        onClick={(e) => { e.preventDefault(); setExpanded((v) => !v); }}
        aria-expanded={expanded}
      >
        <span className="acc_title body-text-5">{title}</span>
        <img
          className="acc_icon"
          src={
            expanded
              ? "/src/project/interface/ui/Acc_Up.svg"
              : "/src/project/interface/ui/Acc_Down.svg"
          }
          alt=""
          aria-hidden="true"
        />
      </a>

      <div className="acc_panel" hidden={!expanded}>
        <p className="acc_text body-text">{description}</p>
      </div>
    </div>
  );
}
