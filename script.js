(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- Timeline: fill rail + light up nodes as they scroll into view ---- */
  var rail = document.getElementById("tlRail");
  var fill = document.getElementById("tlFill");

  function updateTimelineFill() {
    if (!rail || !fill) return;
    var railRect = rail.getBoundingClientRect();
    var viewportCenter = window.innerHeight * 0.7;
    var progressPx = viewportCenter - railRect.top;
    progressPx = Math.max(0, Math.min(progressPx, railRect.height));
    var fraction = railRect.height > 0 ? progressPx / railRect.height : 0;
    fill.style.transform = "scaleY(" + fraction + ")";

    var nodes = rail.querySelectorAll(".tl-node");
    nodes.forEach(function (node) {
      var r = node.getBoundingClientRect();
      var nodeTop = r.top - railRect.top;
      if (nodeTop <= progressPx) {
        node.classList.add("active");
      } else {
        node.classList.remove("active");
      }
    });
  }

  if (rail && fill) {
    if (reduceMotion) {
      fill.style.transition = "none";
    }
    // rAF-throttled: scroll can fire far faster than the browser paints,
    // and this reads layout (getBoundingClientRect) on every node -- running
    // it unthrottled reads/writes layout on every scroll tick instead of
    // once per frame.
    var timelineTicking = false;
    function onTimelineScroll() {
      if (timelineTicking) return;
      timelineTicking = true;
      requestAnimationFrame(function () {
        updateTimelineFill();
        timelineTicking = false;
      });
    }
    window.addEventListener("scroll", onTimelineScroll, { passive: true });
    window.addEventListener("resize", onTimelineScroll);
    updateTimelineFill();
  }

  /* ---- Mobile nav: hamburger toggles the link panel ---- */
  var navToggle = document.getElementById("navToggle");
  var navLinks = document.getElementById("navLinks");
  if (navToggle && navLinks) {
    function setNavOpen(open) {
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
      navLinks.classList.toggle("is-open", open);
    }
    navToggle.addEventListener("click", function () {
      setNavOpen(navToggle.getAttribute("aria-expanded") !== "true");
    });
    navLinks.addEventListener("click", function (e) {
      if (e.target.tagName === "A") setNavOpen(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setNavOpen(false);
    });
  }

  /* ---- Terminal-cursor type-in for the nav HUD code label ---- */
  function typeInto(el, text, speed) {
    if (reduceMotion || !el) {
      if (el) el.textContent = text;
      return;
    }
    el.textContent = "";
    var cursor = document.createElement("span");
    cursor.className = "type-cursor";
    el.appendChild(document.createTextNode(""));
    el.appendChild(cursor);
    var i = 0;
    var timer = setInterval(function () {
      if (i >= text.length) {
        clearInterval(timer);
        return;
      }
      cursor.insertAdjacentText("beforebegin", text[i]);
      i++;
    }, speed || 35);
  }

  var navCode = document.querySelector(".nav-code");
  if (navCode) {
    var navCodeText = navCode.textContent.trim();
    navCode.classList.add("type-target");
    setTimeout(function () {
      typeInto(navCode, navCodeText, 45);
    }, 300);
  }

  /* ---- Nav CTA: only shown once the hero's own Enter Mission button
     scrolls out of view, so there's always one reachable on screen. ---- */
  var navCta = document.getElementById("navCta");
  var heroCta = document.querySelector(".hero-cta-row .btn-primary");
  if (navCta && heroCta && "IntersectionObserver" in window) {
    var ctaObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          navCta.classList.toggle("is-visible", !entry.isIntersecting);
        });
      },
      { threshold: 0 }
    );
    ctaObserver.observe(heroCta);
  } else if (navCta) {
    navCta.classList.add("is-visible");
  }
})();
