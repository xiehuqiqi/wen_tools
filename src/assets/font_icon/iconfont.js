;(window._iconfont_svg_string_4572544 =
  (function (h) {
    var a = (a = document.getElementsByTagName('script'))[a.length - 1],
      l = a.getAttribute('data-injectcss'),
      a = a.getAttribute('data-disable-injectsvg')
    if (!a) {
      var c,
        t,
        p,
        i,
        z,
        M = function (a, l) {
          l.parentNode.insertBefore(a, l)
        }
      if (l && !h.__iconfont__svg__cssinject__) {
        h.__iconfont__svg__cssinject__ = !0
        try {
          document.write(
            '<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>'
          )
        } catch (a) {
          console && console.log(a)
        }
      }
      ;(c = function () {
        var a,
          l = document.createElement('div')
        ;(l.innerHTML = h._iconfont_svg_string_4572544),
          (l = l.getElementsByTagName('svg')[0]) &&
            (l.setAttribute('aria-hidden', 'true'),
            (l.style.position = 'absolute'),
            (l.style.width = 0),
            (l.style.height = 0),
            (l.style.overflow = 'hidden'),
            (l = l),
            (a = document.body).firstChild
              ? M(l, a.firstChild)
              : a.appendChild(l))
      }),
        document.addEventListener
          ? ~['complete', 'loaded', 'interactive'].indexOf(document.readyState)
            ? setTimeout(c, 0)
            : ((t = function () {
                document.removeEventListener('DOMContentLoaded', t, !1), c()
              }),
              document.addEventListener('DOMContentLoaded', t, !1))
          : document.attachEvent &&
            ((p = c),
            (i = h.document),
            (z = !1),
            F(),
            (i.onreadystatechange = function () {
              'complete' == i.readyState && ((i.onreadystatechange = null), v())
            }))
    }
    function v() {
      z || ((z = !0), p())
    }
    function F() {
      try {
        i.documentElement.doScroll('left')
      } catch (a) {
        return void setTimeout(F, 50)
      }
      v()
    }
  })(window)