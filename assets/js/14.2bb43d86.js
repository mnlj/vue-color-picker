(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{287:function(e,t,o){"use strict";o.r(t);var a=o(17),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"first-asked-questions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#first-asked-questions"}},[e._v("#")]),e._v(" First Asked Questions")]),e._v(" "),o("h2",{attrs:{id:"what-s-the-browser-support"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#what-s-the-browser-support"}},[e._v("#")]),e._v(" What's the browser support?")]),e._v(" "),o("p",[e._v("The "),o("strong",[e._v("last two versions of major browsers")]),e._v(" (Chrome, Safari, Firefox, Edge) are supported though it will probably work in other browsers, webviews and runtimes as well.")]),e._v(" "),o("h2",{attrs:{id:"how-to-select-other-shades-of-the-solid-colors"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-to-select-other-shades-of-the-solid-colors"}},[e._v("#")]),e._v(" How to select other shades of the solid colors?")]),e._v(" "),o("p",[e._v("The saturation, luminosity and alpha props are "),o("strong",[e._v("display-only")]),e._v(" values - you can only change the hue through the picker. We suggest to add a custom slider for saturation and luminosity or use "),o("code",[e._v('<input type="range">')]),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"why-hsl"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#why-hsl"}},[e._v("#")]),e._v(" Why HSL?")]),e._v(" "),o("p",[e._v("Regular HEX color format is limitting (no alpha channel) and browser support for HSLA is great. It's also sometimes more intuitive to work with HSLA notation since hue and angles map 1:1. Primary red color is at 0º, primary green is at 120º and gold for example sits somewhere in between. When a user rotates the wheel the hue is updated respectively.")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("Setting The Value of input of type color")]),e._v(" "),o("p",[e._v("The value of an "),o("code",[e._v("<input>")]),e._v(" element of type "),o("code",[e._v('"color"')]),e._v(" is a 7-character string specifying an RGB color in hexadecimal format. In addition, colors with an alpha channel are not supported; specifying a color in 9-character hexadecimal notation (e.g. "),o("code",[e._v("#009900aa")]),e._v(") will also result in the color being set to "),o("code",[e._v('"#000000"')]),e._v(".")])]),e._v(" "),o("p",[o("em",[o("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color#Value",target:"_blank",rel:"noopener noreferrer"}},[e._v("Source"),o("OutboundLink")],1)])]),e._v(" "),o("h2",{attrs:{id:"why-exactly-input-change-events"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#why-exactly-input-change-events"}},[e._v("#")]),e._v(" Why exactly "),o("code",[e._v("input")]),e._v("/"),o("code",[e._v("change")]),e._v(" events?")]),e._v(" "),o("p",[e._v("Event names are based on the HTML "),o("code",[e._v('<input type="color">')])]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("Tracking color change of input of type color")]),e._v(" "),o("p",[e._v("As is the case with other "),o("code",[e._v("<input>")]),e._v(" types, there are two events that can be used to detect changes to the color value: input and change. input is fired on the "),o("code",[e._v("<input>")]),e._v(" element every time the color changes. The change event is fired when the user dismisses the color picker.")])]),e._v(" "),o("p",[o("em",[o("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color#Tracking_color_changes",target:"_blank",rel:"noopener noreferrer"}},[e._v("Source"),o("OutboundLink")],1)])]),e._v(" "),o("h2",{attrs:{id:"why-is-the-scroll-to-rotate-functionality-not-turned-on-by-default"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#why-is-the-scroll-to-rotate-functionality-not-turned-on-by-default"}},[e._v("#")]),e._v(" Why is the scroll-to-rotate functionality not turned on by default?")]),e._v(" "),o("p",[e._v("It's another non-passive event that could potentially introduce jank on scroll. To rotate the color knob, but stay on the same scrolling position the "),o("code",[e._v("wheel")]),e._v(" event is blocked with "),o("code",[e._v("preventDefault()")]),e._v(". Thus, if you really want this feature for your users you'll have to explicitly add "),o("code",[e._v(':mouse-scroll="true"')]),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"why-am-i-getting-a-warning-event-in-the-console"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#why-am-i-getting-a-warning-event-in-the-console"}},[e._v("#")]),e._v(" Why am I getting a warning event in the console?")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("[Violation] Added non-passive event listener to a scroll-blocking 'touchmove' event.")]),e._v(" warning may appear in Google Chrome DevTools console.")]),e._v(" "),o("p",[o("code",[e._v("touchmove")]),e._v(" is used with "),o("code",[e._v("preventDefault()")]),e._v(" to block scrolling on mobile while rotating the color knob. Even the "),o("a",{attrs:{href:"https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#removing-the-need-to-cancel-events",target:"_blank",rel:"noopener noreferrer"}},[e._v("Web Incubator Community Group"),o("OutboundLink")],1),e._v(" acknowledges that in some cases a passive event listener can't be used.")])])}),[],!1,null,null,null);t.default=s.exports}}]);