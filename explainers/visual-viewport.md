# The Visual Viewport

## Definition

From [the CSSOM Specification](https://drafts.csswg.org/cssom-view/#visual-viewport)

> The visual viewport is a kind of viewport whose scrolling area is another viewport, called the layout viewport.
> 
> In addition to scrolling, the visual viewport may also apply a scale transform to its layout viewport. This transform is applied to the canvas of the layout viewport and does not affect its internal coordinate space.

From [MDN](https://developer.mozilla.org/en-US/docs/Glossary/Visual_Viewport):

> The portion of the viewport that is currently visible is called the visual viewport
>
> The Visual Viewport can be smaller than the layout viewport, such as when the user has pinched-zoomed

## Visualization

To visualize it, authors can get sizing and positioning info of the Visual Viewport through the [Visual Viewport API](https://drafts.csswg.org/cssom-view/#the-visualviewport-interface)

```js
@TODO: 
```

👉 Try it out: [Visual Viewport](https://interop-2022-viewport.netlify.app/individual/visual-viewport/)

## Measuring the Visual Viewport

As mentioned above, the Visual Viewport API can be used for this. The `width` and `height` properties expose its size.

Note that the size of Visual Viewport will be equal to or less than the [Layout Viewport](./layout-viewport.md)

## Findings

💡 These findings are a textual representation of the [test results table](https://goo.gle/interop-2022-viewport-testresults).

@TODO: iOS vs. Overscrolling