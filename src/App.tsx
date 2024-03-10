import "./App.css";
import { Accordion } from ".";
import chevronIcon from "./assets/chevron-top-svgrepo-com.svg";

function App() {
  return (
    <>
      <Accordion
        title="Toggle"
        icon={<img src={chevronIcon} alt="accordion-toggle-icon" />}
        accordionStyle={{ borderRadius: "8px" }}
        contentStyle={{ paddingLeft: "0.75rem", paddingRight: "0.75rem" }}
        animationDuration="0.2s"
        animationTimingFunction="ease-in-out"
      >
        {/* The content can be anything */}
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam sed
          illum quod. Neque tempore repudiandae a eligendi ipsam commodi ipsum?
        </p>
      </Accordion>
    </>
  );
}

export default App;
