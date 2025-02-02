! function () {
  if ("undefined" != typeof self && self.Prism && self.document) {
    var l = "line-numbers",
      c = /\n(?!$)/g,
      m = function (e) {
        var t = a(e)["white-space"];
        if ("pre-wrap" === t || "pre-line" === t) {
          var n = e.querySelector("code"),
            r = e.querySelector(".line-numbers-rows"),
            s = e.querySelector(".line-numbers-sizer"),
            i = n.textContent.split(c);
          s || ((s = document.createElement("span")).className = "line-numbers-sizer", n.appendChild(s)), s.style.display = "block", i.forEach(function (e, t) {
            s.textContent = e || "\n";
            var n = s.getBoundingClientRect().height;
            r.children[t].style.height = n + "px"
          }), s.textContent = "", s.style.display = "none"
        }
      },
      a = function (e) {
        return e ? window.getComputedStyle ? getComputedStyle(e) : e.currentStyle || null : null
      };
    window.addEventListener("resize", function () {
      Array.prototype.forEach.call(document.querySelectorAll("pre." + l), m)
    }), Prism.hooks.add("complete", function (e) {
      if (e.code) {
        var t = e.element,
          n = t.parentNode;
        if (n && /pre/i.test(n.nodeName) && !t.querySelector(".line-numbers-rows")) {
          for (var r = !1, s = /(?:^|\s)line-numbers(?:\s|$)/, i = t; i; i = i.parentNode)
            if (s.test(i.className)) {
              r = !0;
              break
            } if (r) {
            t.className = t.className.replace(s, " "), s.test(n.className) || (n.className += " line-numbers");
            var l, a = e.code.match(c),
              o = a ? a.length + 1 : 1,
              u = new Array(o + 1).join("<span></span>");
            (l = document.createElement("span")).setAttribute("aria-hidden", "true"), l.className = "line-numbers-rows", l.innerHTML = u, n.hasAttribute("data-start") && (n.style.counterReset = "linenumber " + (parseInt(n.getAttribute("data-start"), 10) - 1)), e.element.appendChild(l), m(n), Prism.hooks.run("line-numbers", e)
          }
        }
      }
    }), Prism.hooks.add("line-numbers", function (e) {
      e.plugins = e.plugins || {}, e.plugins.lineNumbers = !0
    }), Prism.plugins.lineNumbers = {
      getLine: function (e, t) {
        if ("PRE" === e.tagName && e.classList.contains(l)) {
          var n = e.querySelector(".line-numbers-rows"),
            r = parseInt(e.getAttribute("data-start"), 10) || 1,
            s = r + (n.children.length - 1);
          t < r && (t = r), s < t && (t = s);
          var i = t - r;
          return n.children[i]
        }
      }
    }
  }
}();
