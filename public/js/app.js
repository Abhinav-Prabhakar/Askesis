/* ═══════════════════════════════════════════════════════════
   ASKĒSIS — client runtime. Pages are real static HTML; this
   adds behaviour: search, the growing sheet, reading tools,
   notes/recents (localStorage), and scroll reveal.
   ═══════════════════════════════════════════════════════════ */
(function () {
"use strict";

var $ = function (s, r) { return (r || document).querySelector(s); };
var $$ = function (s, r) { return Array.from((r || document).querySelectorAll(s)); };

var BASE = document.body.getAttribute("data-base") || "/";
var VIEW = document.body.getAttribute("data-view") || "explore";
var SLUG = document.body.getAttribute("data-slug") || "";

var stage = $("#stage"), sheet = $("#sheetScroll"), progress = $("#progress"),
    searchBtn = $("#searchBtn"), searchPop = $("#searchPop"),
    searchInput = $("#searchInput"), searchResults = $("#searchResults"),
    panel = $("#sheet");

var toast = $("#toast"), glossTip = $("#glossTip");
var toastT = null;
function say(msg) {
  toast.textContent = msg;
  toast.classList.add("show");
  window.clearTimeout(toastT);
  toastT = window.setTimeout(function () { toast.classList.remove("show"); }, 2200);
}

function readJSON(id, fallback) {
  var el = document.getElementById(id);
  if (!el) return fallback;
  try { return JSON.parse(el.textContent || ""); } catch (e) { return fallback; }
}
var INDEX = readJSON("searchIndex", []).map(function (r) {
  return { type: r.type, slug: r.slug, title: r.title, sub: r.sub, keys: r.keys, to: BASE + r.to.replace(/^\/+/, "") };
});
var ENTRY_ORDER = INDEX.filter(function (r) { return r.type === "entry"; }).map(function (r) { return r.slug; });

/* ── art-board fit (desktop only) ── */
function fitStage() {
  if (window.innerWidth < 900) {
    stage.style.transform = "";
    stage.style.height = "";
    return;
  }
  var w = window.innerWidth, h = window.innerHeight;
  // Fill the full width of the window, then let the board's height follow
  // the available viewport. On very wide screens the board is shorter than
  // 959px in design units, and the sheet adapts to the remaining height.
  var s = w / 1600;
  stage.style.transform = "scale(" + s + ")";
  stage.style.height = (h / s) + "px";
}
window.addEventListener("resize", fitStage);

/* ── recents + notes (localStorage) ── */
function getRecent() {
  try { return JSON.parse(localStorage.getItem("askesis-recent") || "[]"); } catch (e) { return []; }
}
function pushRecent(slug) {
  if (!ENTRY_ORDER.includes(slug)) return;
  var r = [slug].concat(getRecent().filter(function (s) { return s !== slug; })).slice(0, 3);
  try { localStorage.setItem("askesis-recent", JSON.stringify(r)); } catch (e) {}
}

/* ── EXPLORE: daily question, featured, recents, A–Z panel ── */
function initExplore() {
  var home = readJSON("homeData", null);
  if (!home) return;
  var day = Math.floor(Date.now() / 864e5) % home.daily.length;
  var d = home.daily[day];
  var dailyQ = $("#dailyQ"), dailyKicker = $("#dailyKicker"), dailyBtn = $("#dailyBtn");
  if (dailyQ) dailyQ.textContent = d.q;
  if (dailyKicker) dailyKicker.textContent = "TODAY'S QUESTION · " + (day + 1) + "/" + home.daily.length;
  if (dailyBtn) dailyBtn.addEventListener("click", function () { location.href = BASE + d.to.replace(/^\/+/, ""); });

  var week = Math.floor(Date.now() / (7 * 864e5)) % home.featured.length;
  var f = home.featured[week];
  var fq = $("#featuredQuote"), fs = $("#featuredSub"), fc = $("#featuredCard");
  if (fq) fq.textContent = f.text;
  if (fs) fs.textContent = f.sub;
  if (fc) fc.addEventListener("click", function () { location.href = BASE + f.to.replace(/^\/+/, ""); });

  renderRecent(home);
  wireAZ(home);
}
function renderRecent(home) {
  var r = getRecent().map(function (s) { return home.recentMap[s]; }).filter(Boolean);
  var w = $("#recentWrap");
  if (!w) return;
  if (!r.length) { w.hidden = true; return; }
  w.hidden = false;
  $("#recentRow").innerHTML = r.map(function (e) {
    return '<a href="' + BASE + "entry/" + e.slug + '/">' + e.title + "<small>" + e.read + " MIN · " + e.tradition.toUpperCase() + "</small></a>";
  }).join("");
}
function wireAZ(home) {
  var row = $("#azRow");
  if (!row) return;
  var panelEl = $("#azPanel");
  var AZ_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  row.addEventListener("click", function (ev) {
    var b = ev.target && ev.target.closest ? ev.target.closest("button.lit") : null;
    if (!b) return;
    var L = b.getAttribute("data-az");
    var isOpen = !panelEl.hidden && panelEl.getAttribute("data-letter") === L;
    $$("#azRow button.lit").forEach(function (x) { x.classList.remove("on"); x.setAttribute("aria-expanded", "false"); });
    if (isOpen) { panelEl.hidden = true; return; }
    var items = (home.az[L] || []).slice().sort(function (a, c) { return a.title.localeCompare(c.title); });
    panelEl.setAttribute("data-letter", L);
    panelEl.setAttribute("data-count", items.length);
    panelEl.innerHTML = items.map(function (r) {
      return '<a href="' + BASE + r.to.replace(/^\/+/, "") + '">' +
        '<span class="az-call">' + L + '</span>' +
        '<span class="az-t">' + r.title.toUpperCase() + '</span>' +
        '<small><b>' + String(r.type || "").toUpperCase() + '</b> · ' + r.sub + '</small></a>';
    }).join("");
    panelEl.hidden = false;
    b.classList.add("on"); b.setAttribute("aria-expanded", "true");
  });
}

/* ── reading tools (doc pages) ── */
var SIZES = ["", "lg", "xl"];
var sizeI = 0;
function stopSpeak() {
  try { if ("speechSynthesis" in window) speechSynthesis.cancel(); } catch (e) {}
  var b = $("#tListen");
  if (b) b.setAttribute("aria-pressed", "false");
}
function copyText(t) {
  if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(t).catch(function () { fallbackCopy(t); });
  else fallbackCopy(t);
}
function fallbackCopy(t) {
  var ta = document.createElement("textarea");
  ta.value = t; document.body.appendChild(ta); ta.select();
  try { document.execCommand("copy"); } catch (e) {}
  ta.remove();
}
function wireDoc() {
  var ts = $("#tSize");
  if (ts) ts.onclick = function () {
    sizeI = (sizeI + 1) % SIZES.length;
    sheet.classList.remove("lg", "xl");
    if (SIZES[sizeI]) sheet.classList.add(SIZES[sizeI]);
    say(sizeI === 0 ? "Standard text size" : sizeI === 1 ? "Large text" : "Extra large text");
  };
  var li = $("#tListen");
  if (li) li.onclick = function () {
    if (!("speechSynthesis" in window)) { say("Listening isn't supported here"); return; }
    if (li.getAttribute("aria-pressed") === "true") { stopSpeak(); return; }
    var t = (($(".doc-title") || {}).textContent || "") + ". " +
      (($(".doc-hook") || {}).textContent || "") + " " +
      (($(".breath p") || {}).textContent || "");
    var u = new SpeechSynthesisUtterance(t.slice(0, 900));
    u.onend = function () { li.setAttribute("aria-pressed", "false"); };
    speechSynthesis.cancel(); speechSynthesis.speak(u);
    li.setAttribute("aria-pressed", "true");
    say("Reading aloud — tap again to stop");
  };
  var sh = $("#tShare");
  if (sh) sh.onclick = function () {
    var url = location.href, title = document.title;
    if (navigator.share) { navigator.share({ title: title, url: url }).catch(function () {}); }
    else { copyText(url); say("Link copied"); }
  };
  var cq = $("#copyQ");
  if (cq) cq.onclick = function () {
    var bq = $("blockquote", document), ci = $("cite", document);
    copyText("“" + bq.textContent.replace(/[“”]/g, "") + "” — " + ci.textContent);
    say("Quote copied with attribution");
  };
  var sq = $("#shareQ");
  if (sq) sq.onclick = function () {
    if (navigator.share) navigator.share({ title: document.title, url: location.href }).catch(function () {});
    else { copyText(location.href); say("Link copied"); }
  };
  var ca = $("#copyArg");
  if (ca) ca.onclick = function () {
    var rows = $$(".arg-r span:last-child").map(function (s) { return s.textContent.trim(); });
    copyText("P1: " + rows[0] + "\nP2: " + rows[1] + "\n∴ " + rows[2] + "\n— via Askēsis " + location.href);
    say("Argument card copied");
  };
  var entryData = readJSON("entryData", null);
  $$(".cite-tabs button").forEach(function (b) {
    b.onclick = function () {
      $$(".cite-tabs button").forEach(function (x) { x.classList.remove("on"); });
      b.classList.add("on");
      var citeOut = $("#citeOut");
      if (citeOut && entryData && entryData.cite) citeOut.textContent = entryData.cite[b.getAttribute("data-c")] || "";
    };
  });
  var cc = $("#copyCite");
  if (cc) cc.onclick = function () { var o = $("#citeOut"); if (o) copyText(o.textContent); say("Citation copied"); };
  var nb = $("#noteBox");
  if (nb) {
    try { nb.value = localStorage.getItem("askesis-note-" + SLUG) || ""; } catch (e) {}
    nb.addEventListener("input", function () {
      try { localStorage.setItem("askesis-note-" + SLUG, nb.value); } catch (e) {}
      var m = $("#noteMsg");
      if (m) m.textContent = nb.value ? "Saved just now · only on this device." : "Private. Never leaves this browser.";
    });
  }
}

/* ── series pages ── */
function wireSeries() {
  var track = $("#svTrack"); if (!track) return;
  var dots = $$("#svDots .sv-seg");
  var cards = $$(".sv-card", track);
  var count = $("#svCount");
  var prev = $("#svPrev"), next = $("#svNext");
  var calm = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var go = function (i) {
    var w = track.clientWidth;
    track.scrollTo({ left: i * w, behavior: calm ? "auto" : "smooth" });
  };
  var cur = function () { return Math.round(track.scrollLeft / track.clientWidth); };
  var state = function () {
    var c = Math.min(dots.length - 1, Math.max(0, cur()));
    dots.forEach(function (d, i) {
      d.classList.toggle("on", i <= c);
      d.classList.toggle("cur", i === c);
      if (i === c) d.setAttribute("aria-current", "true"); else d.removeAttribute("aria-current");
    });
    if (count) {
      var title = cards[c] ? cards[c].getAttribute("data-title") : "";
      count.textContent = "CARD " + (c + 1 < 10 ? "0" : "") + (c + 1) + " / " + (dots.length < 10 ? "0" : "") + dots.length + (title ? " · " + title.toUpperCase() : "");
    }
    if (prev) prev.disabled = c === 0;
    if (next) next.setAttribute("aria-label", c === dots.length - 1 ? "Read the full entry" : "Next card");
  };
  if (prev) prev.onclick = function () { go(Math.max(0, cur() - 1)); };
  if (next) next.onclick = function () {
    if (cur() >= dots.length - 1) { location.href = next.getAttribute("data-next") || BASE + "entry/sartre-bad-faith/"; return; }
    go(cur() + 1);
  };
  dots.forEach(function (d, i) { d.onclick = function () { go(i); }; });
  track.onscroll = state;
  track.onkeydown = function (ev) {
    if (ev.key === "ArrowRight") { ev.preventDefault(); if (next) next.click(); }
    if (ev.key === "ArrowLeft") { ev.preventDefault(); if (prev) prev.click(); }
  };
  state();
}

/* ── progress hairline + growing sheet (scrubbed to scroll) ── */
var docActive = VIEW === "doc";
var GROW_PX = 240;
var lastGp = null;
var scrollMax = 0;

function applyGrow(v) {
  v = Math.round(v * 1000) / 1000;
  if (v === lastGp) return;
  lastGp = v;
  stage.style.setProperty("--gp", v.toFixed(3));
  var grown = v > 0.5;
  if (panel.classList.contains("is-grown") !== grown) {
    panel.classList.toggle("is-grown", grown);
    stage.classList.toggle("grown", grown);
  }
}

function measure() {
  if (sheet) scrollMax = Math.max(0, sheet.scrollHeight - sheet.clientHeight);
}

function syncScroll() {
  if (!sheet) return;
  var gp = window.innerWidth < 900 ? (docActive ? 1 : 0)
    : (docActive ? 1 : Math.min(Math.max(sheet.scrollTop / GROW_PX, 0), 1));
  if (gp !== lastGp) { applyGrow(gp); measure(); }
  if (progress) progress.style.width = (scrollMax > 0 ? Math.min(1, sheet.scrollTop / scrollMax) * 100 : 0) + "%";
}
if (sheet) sheet.addEventListener("scroll", syncScroll, { passive: true });
window.addEventListener("resize", function () { measure(); syncScroll(); });

/* ── scroll memory: coming back to a page lands where you left it ── */
if ("scrollRestoration" in history) history.scrollRestoration = "manual";
var SCROLL_KEY = "askesis-scroll:" + location.pathname + location.search;
var saveT = null;
function scrollPos() {
  if (window.innerWidth < 900) return window.scrollY || document.documentElement.scrollTop || 0;
  return sheet ? sheet.scrollTop : 0;
}
function saveScroll() {
  try { sessionStorage.setItem(SCROLL_KEY, String(Math.round(scrollPos()))); } catch (e) {}
}
function queueSave() { window.clearTimeout(saveT); saveT = window.setTimeout(saveScroll, 120); }
function restoreScroll() {
  var raw;
  try { raw = sessionStorage.getItem(SCROLL_KEY); } catch (e) { return; }
  if (raw === null) return;
  var y = parseInt(raw, 10) || 0;
  if (y < 1 || scrollPos() >= y - 2) return;
  if (window.innerWidth < 900) {
    window.scrollTo(0, y);
  } else if (sheet) {
    if (y > GROW_PX) applyGrow(1);
    sheet.scrollTop = y;
    measure(); syncScroll();
  }
}
window.addEventListener("scroll", queueSave, { passive: true });
if (sheet) sheet.addEventListener("scroll", queueSave, { passive: true });
window.addEventListener("pagehide", saveScroll);
window.addEventListener("beforeunload", saveScroll);

/* ── scroll reveal ── */
var io = new IntersectionObserver(function (entries) {
  entries.forEach(function (en) {
    if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
  });
}, { threshold: 0.01, rootMargin: "0px 0px -6% 0px" });
function watchRv(root) {
  var groups = new Map();
  $$(".rv", root || document).forEach(function (el) {
    var p = el.parentElement, n = groups.get(p) || 0;
    groups.set(p, n + 1);
    el.style.setProperty("--d", Math.min(n, 5) * 35 + "ms");
    io.observe(el);
  });
}

/* ── surprise ── */
function surprise() {
  closeSearch();
  if (!ENTRY_ORDER.length) return;
  var pick = ENTRY_ORDER[Math.floor(Math.random() * ENTRY_ORDER.length)];
  location.href = BASE + "entry/" + pick + "/";
}
var surpriseBtn = $("#surpriseBtn");
if (surpriseBtn) surpriseBtn.addEventListener("click", surprise);

/* ── search ── */
var filter = "all", focused = -1, lastResults = [];
var SYN = { freedeom: "free will", will: "free will", sarter: "sartre", rawles: "rawls", quala: "qualia", mary: "qualia", veil: "rawls", time: "a-theory", evil: "skeptical", god: "skeptical", justice: "rawls" };
function norm(q) {
  var s = q.trim().toLowerCase();
  for (var k in SYN) if (s.indexOf(k) !== -1) s += " " + SYN[k];
  return s;
}
function search(q) {
  var n = norm(q);
  var pool = INDEX.filter(function (r) { return filter === "all" || r.type === filter || (filter === "entry" && r.type === "soon"); });
  if (!n) return pool.slice(0, 8);
  var words = n.split(/\s+/);
  return pool
    .map(function (r) { return { r: r, score: words.reduce(function (a, w) { return a + (r.keys.indexOf(w) !== -1 ? (r.title.toLowerCase().indexOf(w) !== -1 ? 3 : 1) : 0); }, 0) }; })
    .filter(function (x) { return x.score > 0; })
    .sort(function (a, b) { return b.score - a.score; })
    .map(function (x) { return x.r; })
    .slice(0, 9);
}
function renderSearch() {
  var q = searchInput.value;
  var res = search(q);
  lastResults = res; focused = res.length ? 0 : -1;
  searchResults.innerHTML = "";
  if (!res.length) {
    var d = document.createElement("div");
    d.className = "empty";
    d.innerHTML = "<b>NOTHING FOUND</b>Try “freedom”, “red”, or “fairness” — or start with:";
    var sg = document.createElement("div");
    sg.className = "sugg";
    ["sartre-bad-faith", "qualia", "veil-of-ignorance"].forEach(function (s) {
      var e = INDEX.find(function (r) { return r.slug === s; });
      if (!e) return;
      var b = document.createElement("button");
      b.type = "button"; b.className = "mini-btn"; b.textContent = e.title;
      b.onclick = function () { closeSearch(); location.href = e.to; };
      sg.appendChild(b);
    });
    d.appendChild(sg);
    searchResults.appendChild(d);
    return;
  }
  res.forEach(function (r, i) {
    var b = document.createElement("button");
    b.type = "button"; b.className = "sr" + (i === focused ? " focused" : "");
    b.setAttribute("role", "option");
    b.innerHTML = '<span class="sr-body"><span class="t">' + r.title.toUpperCase() + '</span><small>' + r.sub + '</small></span>';
    b.addEventListener("click", function () { closeSearch(); location.href = r.to; });
    searchResults.appendChild(b);
  });
}
function openSearch() {
  if (!searchPop.hidden) return;
  searchPop.hidden = false;
  searchPop.classList.add("fresh");
  searchBtn.setAttribute("aria-expanded", "true");
  searchInput.value = "";
  renderSearch();
  requestAnimationFrame(function () { searchInput.focus(); });
}
function closeSearch() {
  if (searchPop.hidden) return;
  searchPop.hidden = true;
  searchBtn.setAttribute("aria-expanded", "false");
}
if (searchBtn) searchBtn.addEventListener("click", function (ev) { ev.stopPropagation(); searchPop.hidden ? openSearch() : closeSearch(); });
if (searchInput) searchInput.addEventListener("input", function () { searchPop.classList.remove("fresh"); renderSearch(); });
if (searchInput) searchInput.addEventListener("keydown", function (ev) {
  if (ev.key === "Enter" && lastResults[Math.max(0, focused)]) {
    ev.preventDefault();
    var r = lastResults[Math.max(0, focused)];
    closeSearch(); location.href = r.to; return;
  }
  if (ev.key === "ArrowDown" || ev.key === "ArrowUp") {
    ev.preventDefault();
    focused = ev.key === "ArrowDown"
      ? Math.min(lastResults.length - 1, focused + 1)
      : Math.max(0, focused - 1);
    paintFocus();
  }
});
if (searchPop) searchPop.addEventListener("click", function (ev) { ev.stopPropagation(); });
document.addEventListener("click", function () { if (searchPop && !searchPop.hidden) closeSearch(); });
$$(".chips.filters button").forEach(function (b) {
  b.addEventListener("click", function () {
    $$(".chips.filters button").forEach(function (x) {
      x.classList.remove("on");
      x.setAttribute("aria-pressed", "false");
    });
    b.classList.add("on"); b.setAttribute("aria-pressed", "true");
    filter = b.getAttribute("data-f");
    searchPop.classList.remove("fresh");
    renderSearch(); searchInput.focus();
  });
});
function paintFocus() {
  $$(".sr", searchResults).forEach(function (b, i) { b.classList.toggle("focused", i === focused); });
  var el = $$(".sr", searchResults)[focused];
  if (el) el.scrollIntoView({ block: "nearest" });
}

/* ── whole-page scroll frame: wheel + keys anywhere drive the sheet ── */
if (stage) stage.addEventListener("wheel", function (ev) {
  if (window.innerWidth < 900 || ev.ctrlKey) return;
  var t = ev.target;
  if (t && t.closest && (t.closest("#sheetScroll") || t.closest("#searchPop"))) return;
  var d = ev.deltaY * (ev.deltaMode === 1 ? 16 : ev.deltaMode === 2 ? sheet.clientHeight : 1);
  if (!d) return;
  var before = sheet.scrollTop;
  sheet.scrollTop = before + d;
  if (sheet.scrollTop !== before) ev.preventDefault();
}, { passive: false });

var PAGE_KEYS = new Set(["ArrowDown", "ArrowUp", " ", "PageDown", "PageUp", "Home", "End"]);
document.addEventListener("keydown", function (ev) {
  var t = ev.target;
  var typing = t instanceof HTMLElement && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable);
  if (ev.key === "Escape") {
    if (searchPop && !searchPop.hidden) { ev.preventDefault(); closeSearch(); searchBtn.focus(); return; }
    if (glossTip && !glossTip.hidden) { glossTip.hidden = true; return; }
  }
  if (!typing && window.innerWidth >= 900 && searchPop && searchPop.hidden && !ev.defaultPrevented && PAGE_KEYS.has(ev.key)) {
    var inter = t instanceof HTMLElement && t.closest && t.closest("button, a, #svTrack");
    if (!(inter && ev.key === " ")) {
      ev.preventDefault();
      var H = sheet.clientHeight * 0.9;
      if (ev.key === "ArrowDown") sheet.scrollTop += 72;
      else if (ev.key === "ArrowUp") sheet.scrollTop -= 72;
      else if (ev.key === " " || ev.key === "PageDown") sheet.scrollTop += H;
      else if (ev.key === "PageUp") sheet.scrollTop -= H;
      else if (ev.key === "Home") sheet.scrollTop = 0;
      else if (ev.key === "End") sheet.scrollTop = sheet.scrollHeight;
      return;
    }
  }
  if ((ev.key === "/" || (ev.key.toLowerCase() === "k" && (ev.metaKey || ev.ctrlKey))) && !typing) {
    ev.preventDefault(); openSearch(); return;
  }
  if (searchPop && !searchPop.hidden && !typing) {
    if (ev.key.toLowerCase() === "j" || ev.key === "ArrowDown") {
      ev.preventDefault(); focused = Math.min(lastResults.length - 1, focused + 1); paintFocus(); return;
    }
    if (ev.key.toLowerCase() === "k" || ev.key === "ArrowUp") {
      ev.preventDefault(); focused = Math.max(0, focused - 1); paintFocus(); return;
    }
    if (ev.key === "Enter" && lastResults[focused]) {
      ev.preventDefault(); var r = lastResults[focused]; closeSearch(); location.href = r.to; return;
    }
  }
});

/* ── glossary popover ── */
var GLOSS = readJSON("glossData", null);
document.addEventListener("click", function (ev) {
  var g = ev.target && ev.target.closest ? ev.target.closest(".g") : null;
  if (g) {
    ev.stopPropagation();
    var term = g.getAttribute("data-term");
    var def = GLOSS && GLOSS[term];
    if (!def) return;
    glossTip.innerHTML = "<b>" + term.toUpperCase() + "</b>" + def;
    glossTip.hidden = false;
    var r = g.getBoundingClientRect();
    glossTip.style.left = Math.min(window.innerWidth - 320, Math.max(12, r.left - 40)) + "px";
    glossTip.style.top = Math.min(window.innerHeight - 140, r.bottom + 10) + "px";
    return;
  }
  if (!ev.target.closest || !ev.target.closest("#glossTip")) glossTip.hidden = true;
});

/* ── boot ── */
if (VIEW === "doc" && SLUG) pushRecent(SLUG);
stopSpeak();
initExplore();
wireDoc();
wireSeries();
fitStage();
syncScroll();
restoreScroll();
watchRv(document);
window.addEventListener("load", function () { measure(); restoreScroll(); syncScroll(); });
if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { measure(); restoreScroll(); syncScroll(); });

/* privacy-light: no cookies, no trackers. Local notes + recents only. */
})();
