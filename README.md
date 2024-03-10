# React Accordion Component

A customizable and animated React accordion component for easily creating toggleable content sections.

## Installation

To install the `react-accordion-component` package, use the following npm command:

```bash
npm install react-accordion-component
```

```js
import React from "react";
import Accordion from "react-accordion-component";
import chevronIcon from "./path/to/chevron-icon.svg"; // Replace with the actual path to your icon

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
```

# Props

-title (required)
--Type: string
--Description: The title of the accordion section.

-icon
--Type: React.ReactNode
--Description: An optional icon element to be displayed alongside the title.

-isOpen
--Type: boolean
--Default: false
--Description: Set to true if you want the accordion to be initially open.

-accordionStyle
--Type: React.CSSProperties
Description: Custom styles for the accordion container.

-contentStyle
--Type: React.CSSProperties
--Description: Custom styles for the content within the accordion.

-maxWidth
--Type: string
--Default: "300px"
--Description: The maximum width of the accordion container.

-rotateIcon
--Type: boolean
--Default: true
--Description: Set to false if you want to disable the rotation of the icon on toggle.

-animate
--Type: boolean
--Default: true
--Description: Set to false to disable animation on accordion toggle.

-animationDuration
--Type: string
--Default: "0.25s"
--Description: The duration of the animation.

-animationTimingFunction
--Type: string
--Default: "ease"
--Description: The timing function for the animation.

-contentPosition
--Type: "top" | "bottom"
--Default: "bottom"
--Description: The position of the content relative to the title.

```
Feel free to customize the content as needed and add any additional sections or details that you think would be helpful for users of your component.
```
