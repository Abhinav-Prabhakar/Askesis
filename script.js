/* ------------------------------------------------------------------
   Askēsis — interactions
   The composition is authored at a fixed 1600 × 959 art-board and
   scaled to the viewport width so the layout stays pixel-true.
-------------------------------------------------------------------*/

(function () {
  "use strict";

  const DESIGN_WIDTH = 1600;
  const DESIGN_HEIGHT = 959;

  const stage = document.getElementById("stage");
  const searchBtn = document.getElementById("searchBtn");
  const searchPop = document.getElementById("searchPop");
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");
  const surpriseBtn = document.getElementById("surpriseBtn");
  const featuredCard = document.getElementById("featuredCard");
  const topics = Array.from(document.querySelectorAll(".topic"));

  const TOPICS = [
    { num: "1", title: "SARTRE’S BAD FAITH" },
    { num: "2", title: "ON FREE WILL" },
    { num: "3", title: "QUALIA IN CONSCIOUSNESS" },
    { num: "4", title: "RAWLS’ VEIL OF IGNORANCE" },
    { num: "5", title: "SKEPTICAL THEISM AND EVIL" },
    { num: "6", title: "A-THEORY OF TIME" }
  ];

  /* ------------------------------ fit art-board ------------------------------ */

  function fitStage() {
    const scale = window.innerWidth / DESIGN_WIDTH;
    stage.style.transform = "scale(" + scale + ")";
    stage.style.height = Math.max(DESIGN_HEIGHT, window.innerHeight / scale) + "px";
  }

  window.addEventListener("resize", fitStage);
  fitStage();

  /* ------------------------------ highlight topic ----------------------------- */

  let pickTimer = null;

  function pickTopic(topic) {
    if (!topic) return;

    topics.forEach(function (item) {
      item.classList.remove("is-picked");
    });

    // restart the animation
    void topic.offsetWidth;
    topic.classList.add("is-picked");

    window.clearTimeout(pickTimer);
    pickTimer = window.setTimeout(function () {
      topic.classList.remove("is-picked");
    }, 1000);
  }

  function findTopic(index) {
    return topics[index] || null;
  }

  /* ------------------------------ surprise me ------------------------------ */

  function surpriseMe() {
    const random = Math.floor(Math.random() * topics.length);
    pickTopic(findTopic(random));
  }

  surpriseBtn.addEventListener("click", function () {
    if (!searchPop.hidden) closeSearch();
    surpriseMe();
  });

  featuredCard.addEventListener("click", function () {
    if (!searchPop.hidden) closeSearch();
    surpriseMe();
  });

  topics.forEach(function (topic) {
    topic.addEventListener("click", function () {
      pickTopic(topic);
    });
  });

  /* -------------------------------- search -------------------------------- */

  function topicResults(query) {
    const q = query.trim().toLowerCase();
    if (!q) return TOPICS.map(function (topic, index) {
      return { topic: topic, index: index };
    });
    return TOPICS
      .map(function (topic, index) { return { topic: topic, index: index }; })
      .filter(function (entry) {
        return entry.topic.title.toLowerCase().indexOf(q) !== -1 ||
               entry.topic.num.indexOf(q) !== -1;
      });
  }

  function renderResults(query) {
    const matches = topicResults(query);
    searchResults.innerHTML = "";

    if (!matches.length) {
      const empty = document.createElement("div");
      empty.className = "empty";
      empty.textContent = "No topics found";
      searchResults.appendChild(empty);
      return;
    }

    matches.forEach(function (entry) {
      const button = document.createElement("button");
      button.type = "button";

      const num = document.createElement("span");
      num.className = "r-num";
      num.textContent = entry.topic.num;

      const label = document.createElement("span");
      label.textContent = entry.topic.title;

      button.appendChild(num);
      button.appendChild(label);

      button.addEventListener("click", function () {
        pickTopic(findTopic(entry.index));
        closeSearch();
      });

      searchResults.appendChild(button);
    });
  }

  function openSearch() {
    if (!searchPop.hidden) return;

    searchPop.hidden = false;
    searchBtn.setAttribute("aria-expanded", "true");
    searchInput.value = "";
    renderResults("");
    window.requestAnimationFrame(function () {
      searchInput.focus();
    });
  }

  function closeSearch() {
    if (searchPop.hidden) return;

    searchPop.hidden = true;
    searchBtn.setAttribute("aria-expanded", "false");
    searchBtn.focus({ preventScroll: true });
  }

  searchBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    if (searchPop.hidden) openSearch();
    else closeSearch();
  });

  searchInput.addEventListener("input", function () {
    renderResults(searchInput.value);
  });

  searchPop.addEventListener("click", function (event) {
    event.stopPropagation();
  });

  document.addEventListener("click", function () {
    if (!searchPop.hidden) closeSearch();
  });

  document.addEventListener("keydown", function (event) {
    const target = event.target;
    const typing = target instanceof HTMLElement &&
      (target.tagName === "INPUT" || target.tagName === "TEXTAREA");

    if (event.key === "Escape" && !searchPop.hidden) {
      event.preventDefault();
      closeSearch();
      return;
    }

    if ((event.key === "/" || (event.key === "k" && (event.metaKey || event.ctrlKey))) && !typing) {
      event.preventDefault();
      openSearch();
    }
  });
})();
