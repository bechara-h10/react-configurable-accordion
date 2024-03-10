import { PropsWithChildren, useState } from "react";
import "./Accordion.css";

// type StyleType = {
//   border?: string;
//   borderRadius?: string;
//   backgroundColor?: string;
//   fontFamily?: string;
//   fontSize?: string;
//   color?: string;
//   padding?: string;
//   paddingTop?: string;
//   paddingBottom?: string;
//   paddingRight?: string;
//   paddingLeft?: string;
//   margin?: string;
//   marginTop?: string;
//   marginBottom?: string;
//   marginRight?: string;
//   marginLeft?: string;
// };

type AccordionProps = {
  title: string;
  icon?: React.ReactNode;
  isOpen?: boolean;
  accordionStyle?: React.CSSProperties;
  contentStyle?: React.CSSProperties;
  maxWidth?: string;
  rotateIcon?: boolean;
  animate?: boolean;
  animationDuration?: string;
  animationTimingFunction?: string;
  contentPosition?: "top" | "bottom";
} & PropsWithChildren;

function Accordion({
  title,
  icon,
  isOpen = false,
  contentPosition = "bottom",
  rotateIcon = true,
  animate = true,
  animationDuration = "0.25s",
  animationTimingFunction = "ease",
  accordionStyle,
  contentStyle,
  maxWidth = "300px",
  children,
}: AccordionProps) {
  const [open, setOpen] = useState(isOpen);
  const toggleAccordion = () => {
    setOpen((prev) => !prev);
  };
  const accordionToggler = (
    <button className="accordion__toggler" onClick={toggleAccordion}>
      {title}
      {icon && (
        <span
          className={`accordion__icon ${
            contentPosition == "top" ? "invert" : ""
          }`}
          style={{
            transition: animate
              ? `transform ${animationDuration} ${animationTimingFunction}`
              : "none",
            transform:
              rotateIcon && open && contentPosition == "bottom"
                ? "rotate(180deg)"
                : rotateIcon && open && contentPosition == "top"
                ? "rotate(0deg)"
                : contentPosition == "bottom"
                ? "rotate(0deg)"
                : "rotate(180deg)",
          }}
        >
          {icon}
        </span>
      )}
    </button>
  );
  return (
    <div
      className={`accordion ${open ? "open" : ""}`}
      style={{ ...accordionStyle, maxWidth: maxWidth }}
    >
      {contentPosition == "bottom" && accordionToggler}
      <div
        className="accordion__wrapper"
        style={{
          transition: animate
            ? `grid-template-rows ${animationDuration} ${animationTimingFunction}`
            : "none",
        }}
      >
        <div className="accordion__content" style={contentStyle}>
          {children}
        </div>
      </div>
      {contentPosition == "top" && accordionToggler}
    </div>
  );
}

export default Accordion;
