# Sizing

There are various ways to try and read the size of the viewport/window.

## `window.innerWidth` and `window.innerHeight`

### Definition

`window.innerWidth` and `window.innerHeight` are defined in the [CSSOM View Module](https://drafts.csswg.org/cssom-view/#dom-window-innerwidth):

> The `innerWidth` attribute must return the viewport[^fn1] width including the size of a rendered scroll bar (if any), or zero if there is no viewport.
> 
> The following snippet shows how to obtain the width of the viewport:
> 
> ```js
> var viewportWidth = innerWidth
> ```
> 
> The `innerHeight` attribute must return the viewport[^fn1] height including the size of a rendered scroll bar (if any), or zero if there is no viewport.

[^fn1]: When specs talk about _“the Viewport”_, they mean [the Layout Viewport](./layout-viewport.md).

### Findings

💡 These findings are a textual representation of the [test results table](https://goo.gle/interop-2022-viewport-testresults).

In all browsers the `innerHeight` and `innerWidth` behave as defined/expected.

When pinch-zooming in, WebKit adjusts these values as you pich-zoom in on the page, taking over the `width`/`height` of the [Visual Viewport](./visual-viewport.md)

## `window.outerWidth` and `window.outerHeight`

### Definition

`window.outerWidth` and `window.outerHeight` are defined in the [CSSOM View Module](https://drafts.csswg.org/cssom-view/#dom-window-outerwidth):

> The `outerWidth` attribute must return the width of the client window. If there is no client window this attribute must return zero.
> 
> The `outerHeight` attribute must return the height of the client window. If there is no client window this attribute must return zero.

### Findings

💡 These findings are a textual representation of the [test results table](https://goo.gle/interop-2022-viewport-testresults).

On Desktop all is pretty straigthforward and the `outerHeight` equals the [`innerHeight`](#windowinnerwidth-and-windowinnerheight) + the size of the browser’s top and bottom bars.

On Mobile it’s a different story:

- Only Safari on iOS and Chrome on iOS see the `outerHeight` as the _(unzoomed [^fn1])_ `innerHeight` + size of the browser’s chrome. Essentially this equals the screen’s `height` here, as apps run fullscreen on such devices.
- Most other mobile browsers use the values from `innerHeight` as the value for its `outerHeight`. When the UA UI Toolbars retract, both sizes get adjusted. This seems wrong.
- Firefox on Android does something special where the `outerHeight` is a value somewhere in between the [Small Viewport](./viewport-units.md#the-small-viewport) _(`innerHeight` when UA UI is expanded)_ and [Large Viewport](./viewport-units.md#the-large-viewport) _(`innerHeight` when UA UI is retracted)_.

[^fn1]: “unzoomed” because `innerHeight` resizes in these browsers. See the section covering [`innerHeight`](#windowinnerwidth-and-windowinnerheight)

## `document.documentElement.clientWidth` and `document.documentElement.clientHeight`

`document.documentElement.clientWidth` and `document.documentElement.clientHeight` can be used to measure the [ICB](./icb.md). This due to [an exception in the definition of `clientWidth`/`clientWidth`](https://www.w3.org/TR/cssom-view-1/#dom-element-clientwidth):

> If the element is the root element and the element’s node document is not in quirks mode […] return the viewport width/height excluding the size of a rendered scroll bar (if any).

## `Element.getBoundingClientRect()`

If no other way of getting the dimensions of an element is available, [`Element.getBoundingClientRect()`](https://drafts.csswg.org/cssom-view/#dom-element-getboundingclientrect) can be used.

> The `getBoundingClientRect()` method, when invoked on an element element, must return the result of getting the bounding box for element.

Beware that calling this, causes layout _(citation needed)_