# Sizing

There are various ways to try and read the size of the viewport/window.

## `window.innerWidth` and `window.innerHeight`

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

## `window.outerWidth` and `window.outerHeight`

`window.outerWidth` and `window.outerHeight` are defined in the [CSSOM View Module](https://drafts.csswg.org/cssom-view/#dom-window-outerwidth):

> The `outerWidth` attribute must return the width of the client window. If there is no client window this attribute must return zero.
> 
> The `outerHeight` attribute must return the height of the client window. If there is no client window this attribute must return zero.

## `document.documentElement.clientWidth` and `document.documentElement.clientHeight`

`document.documentElement.clientWidth` and `document.documentElement.clientHeight` can be used to measure the [ICB](./icb.md). This due to [an exception in the definition of `clientWidth`/`clientWidth`](https://www.w3.org/TR/cssom-view-1/#dom-element-clientwidth):

> If the element is the root element and the element’s node document is not in quirks mode […] return the viewport width/height excluding the size of a rendered scroll bar (if any).

## `Element.getBoundingClientRect()`

If no other way of getting the dimensions of an element is available, [`Element.getBoundingClientRect()`](https://drafts.csswg.org/cssom-view/#dom-element-getboundingclientrect) can be used.

> The `getBoundingClientRect()` method, when invoked on an element element, must return the result of getting the bounding box for element.

Beware that calling this, causes layout _(citation needed)_