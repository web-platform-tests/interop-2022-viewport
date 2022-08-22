# Interop 2022: Viewport

Work on the [viewport investigation project](https://github.com/web-platform-tests/interop-2022/issues/41) for Interop 2022.

> To sort out any confusion about what “viewport” means, and what browsers _(especially on mobile devices)_ should be doing with various viewport measurements & sizing. To make recommendations for what should change to improve interoperability.

## Definitions and Findings

In this effort we are looking at various viewport-related aspects. Their definitions and initial findings are collected in the [./explainers](./explainers) folder:

- [Layout Viewport](./explainers/layout-viewport.md)
- [Initial Containing Block (ICB)](./explainers/icb.md)
- [Visual Viewport](./explainers/visual-viewport.md)
- [Virtual Keyboard](./explainers/virtual-keyboard.md)
- [Virtual Keyboard API](./explainers/virtual-keyboard-api.md)
- [Viewport Units](./explainers/viewport-units.md)

## Demos

There are a bunch of demos available to visualize, debug, and test the behavior of certain viewport-related aspects in browsers.

These demos are published at [https://interop-2022-viewport.netlify.app/](https://interop-2022-viewport.netlify.app/)
The results of some tests ran against these demos can be reviewed at [https://goo.gle/interop-2022-viewport-testresults](https://goo.gle/interop-2022-viewport-testresults)

Included tests:

- [Initial Containing Block (ICB)](https://interop-2022-viewport.netlify.app/individual/icb/)
- [Layout Viewport](https://interop-2022-viewport.netlify.app/individual/layout-viewport/)
- [Visual Viewport](https://interop-2022-viewport.netlify.app/individual/visual-viewport/)
- [Virtual Keyboard API](https://interop-2022-viewport.netlify.app/individual/virtual-keyboard/)
- [Viewport Units + window.innerHeight](https://interop-2022-viewport.netlify.app/combined/viewport-units/)
- [Viewport Units + -webkit-fill-available](https://devinrousso.com/demo/WebKit/css/viewport-units.html) _(external)_
- [ICB + Fixed Viewport + Visual Viewport + Event Debugger](https://interop-2022-viewport.netlify.app/combined/icb-fixed-visual/)

The source of the non-external demos is [included in this repository’s `demos` folder](./demos).

## Recommendations

- TODO