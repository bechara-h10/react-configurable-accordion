# React Configurable Accordion

A customizable and animated React accordion component for easily creating toggleable content sections.

## Installation

To install the `react-configurable-accordion` package, use the following npm command:

```bash
npm install react-configurable-accordion
```

## Usage

First import the accordion and its styles

```js
import Accordion from "react-configurable-accordion";
import "react-configurable-accordion/dist/style.css";
```

Then use it in your component

```js
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

## Props

## Props

### `title`

- **Type**: string
- **Description**: The title of the accordion item.

### `icon`

- **Type**: React.ReactNode
- **Description**: The icon to display next to the title.

### `isOpen`

- **Type**: boolean
- **Default**: false
- **Description**: A boolean to control whether the accordion is initially open or closed.

### `contentPosition`

- **Type**: "top" | "bottom"
- **Default**: "bottom"
- **Description**: The position of the content relative to the title.

### `rotateIcon`

- **Type**: boolean
- **Default**: true
- **Description**: A boolean to control whether the icon should rotate when the accordion is opened.

### `animate`

- **Type**: boolean
- **Default**: true
- **Description**: A boolean to control whether the accordion should animate when opened or closed.

### `animationDuration`

- **Type**: string
- **Default**: "0.25s"
- **Description**: The duration of the animation when the accordion item is opened or closed.

### `animationTimingFunction`

- **Type**: string
- **Default**: "ease"
- **Description**: The timing function to use for the animation.

### `accordionStyle`

- **Type**: React.CSSProperties
- **Description**: An object of CSS properties to apply to the accordion.

### `contentStyle`

- **Type**: React.CSSProperties
- **Description**: An object of CSS properties to apply to the content of the accordion item.

### `maxWidth`

- **Type**: string
- **Default**: "300px"
- **Description**: The maximum width of the accordion.

```
Feel free to customize the content as needed and add any additional sections or details that you think would be helpful for users of your component.
```
