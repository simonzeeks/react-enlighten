<p align="center">
  <img src="./.github/logo.png" width="650" />
</p>

<p align="center">
  Make any react component responsive through context awareness.
</p>

<br/>

[![NPM](https://img.shields.io/npm/v/react-enlighten.svg)](https://www.npmjs.com/package/react-enlighten) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Introduction

Traditional UI design assumes that we have the screens designed upfront. But
that's not the case for modern design. In modern design, components are
expected to work in multiple different scenarios, not just for single screen. This
in turn means that we have to design components to be responsive using
different tools than what is currently being used so far based on screen
designs. We need new tools that works for the modern approach to designs - a
component based approach.

I believe the way forward will be to make components more aware of their
surroundings, as well as changes to those surroundings. Information about the
immediate surroundings is quite straightforward, but informing the
components of changes to these surroundings poses a set of challenges.

However, with extra contextual information, conditional rendering of markup
and styles, made available in both jsx and css, will make responsive design on
a component level more viable. In addition, one might imagine an entirely
new set of opportunities to be introduced with this approach.

## Call for contributions

Calling for contributors - we need help to get this project started and in a working state. Please visit github to see and contribute to the source code.

## Install

```bash
npm install --save react-enlighten
```

## Usage

### HOC

```jsx
import { enlighten } from "react-enlighten";

function WokeAF({ size }) {
  return <div> check the size: {size.width} (thx, react-sizeme) </div>;
}

export default enlighten()(WokeAF);
```

### Render Prop Pattern

```jsx
// work in progress
```

## License

MIT © [simonzeeks](https://github.com/simonzeeks)
