# Scrolling

## Scrollbars

### Overlay Scrollbars

@TODO:
### Classic Scrollbars

@TODO:

## Getting the Scroll Position

- @TODO: `window.scrollX` / `window.scrollY`
- @TODO: `document.scrollLeft` / `document.scrollTop`

## Findings

💡 These findings are a textual representation of the [test results table](https://goo.gle/interop-2022-viewport-testresults).


### Dynamic User-Agent UI Elements

@TODO:
### Overscrolling and Bounce Scroll

Some browsers support overscrolling the scrollport. When doing this with a swipe gestured, they might bounce back. This behavior is available on macOS, iOS _(and maybe Windows, but that is currently untested). Android does not support this.

Note: When overscrolling slowly at the top edge in Mobile Browsers you might trigger a pull-to-refresh. In this part we are focussing on overscrolling while not triggering pull-to-refresh.

Overscrolling is [covered in the “CSS Overscroll Behavior Module Level 1” spec](https://drafts.csswg.org/css-overscroll-1/).