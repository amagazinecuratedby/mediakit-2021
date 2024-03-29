;(function (root, smoothScroll) {
  "use strict"

  // Support RequireJS and CommonJS/NodeJS module formats.
  // Attach smoothScroll to the `window` when executed as a <script>.

  // RequireJS
  if (typeof define === "function" && define.amd) {
    define(smoothScroll)

    // CommonJS
  } else if (typeof exports === "object" && typeof module === "object") {
    module.exports = smoothScroll()
  } else {
    root.smoothScroll = smoothScroll()
  }
})(this, function () {
  "use strict"

  // Do not initialize smoothScroll when running server side, handle it in client:
  if (typeof window !== "object") return

  // We do not want this script to be applied in browsers that do not support those
  // That means no smoothscroll on IE9 and below.
  if (
    document.querySelectorAll === void 0 ||
    window.pageYOffset === void 0 ||
    history.pushState === void 0
  ) {
    return
  }

  // Get the top position of an element in the document
  const getTop = function (element, start) {
    // return value of html.getBoundingClientRect().top ... IE : 0, other browsers : -pageYOffset
    if (element.nodeName === "HTML") return -start
    return element.getBoundingClientRect().top + start - 75
  }
  // ease in out function thanks to:
  // http://blog.greweb.fr/2012/02/bezier-curve-based-easing-functions-from-concept-to-implementation/
  const easeInOutCubic = function (t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
  }

  // calculate the scroll position we should be in
  // given the start and end point of the scroll
  // the time elapsed from the beginning of the scroll
  // and the total duration of the scroll (default 500ms)
  const position = function (start, end, elapsed, duration) {
    if (elapsed > duration) return end
    return start + (end - start) * easeInOutCubic(elapsed / duration) // <-- you can change the easing funtion there
    // return start + (end - start) * (elapsed / duration); // <-- this would give a linear scroll
  }

  // we use requestAnimationFrame to be called by the browser before every repaint
  // if the first argument is an element then scroll to the top of this element
  // if the first argument is numeric then scroll to this location
  // if the callback exist, it is called when the scrolling is finished
  // if context is set then scroll that element, else scroll window
  const smoothScroll = function (el, duration, callback, context) {
    duration = duration || 500
    context = context || window
    const start = context.scrollTop || window.pageYOffset

    if (typeof el === "number") {
      var end = parseInt(el)
    } else {
      var end = getTop(el, start)
    }

    const clock = Date.now()
    const requestAnimationFrame =
      window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      function (fn) {
        window.setTimeout(fn, 15)
      }

    var step = function () {
      const elapsed = Date.now() - clock
      if (context !== window) {
        context.scrollTop = position(start, end, elapsed, duration)
      } else {
        window.scroll(0, position(start, end, elapsed, duration))
      }

      if (elapsed > duration) {
        if (typeof callback === "function") {
          callback(el)
        }
      } else {
        requestAnimationFrame(step)
      }
    }
    step()
  }

  const linkHandler = function (ev) {
    if (!ev.defaultPrevented) {
      ev.preventDefault()

      if (location.hash !== this.hash)
        window.history.pushState(null, null, this.hash)
      // using the history api to solve issue #1 - back doesn't work
      // most browser don't update :target when the history api is used:
      // THIS IS A BUG FROM THE BROWSERS.
      // change the scrolling duration in this call
      const node = document.getElementById(this.hash.substring(1))
      if (!node) return // Do not scroll to non-existing node

      smoothScroll(node, 500, function (el) {
        location.replace("#" + el.id)
        // this will cause the :target to be activated.
      })
    }
  }

  // We look for all the internal links in the documents and attach the smoothscroll function
  document.addEventListener("DOMContentLoaded", function () {
    const internal = document.querySelectorAll('a[href^="#"]:not([href="#"])')
    let a
    for (let i = internal.length; (a = internal[--i]); ) {
      a.addEventListener("click", linkHandler, false)
    }
  })

  // return smoothscroll API
  return smoothScroll
})
