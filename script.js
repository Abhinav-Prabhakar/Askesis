/* ═══════════════════════════════════════════════════════════
   ASKĒSIS v1 — library logic. Zero-build: data lives here,
   every route is a hash, the cream sheet is the only surface.
   ═══════════════════════════════════════════════════════════ */
(function () {
"use strict";

/* ── data ─────────────────────────────────────────────── */

const ENTRIES = [
  {
    slug: "sartre-bad-faith", num: 1, title: "Sartre's Bad Faith",
    tradition: "Existentialism", era: "Modern", read: 2,
    hero: { bg: "pink", k: "EXISTENTIALISM · MODERN", big: "You are free — even when you pretend not to be.", sub: "The waiter, the date, the delay. Three scenes of self-deception." },
    hook: "You always have a choice — bad faith is pretending you don't.",
    breath: "Sartre says we lie to ourselves to dodge our freedom. The waiter plays at being a waiter; the woman on a date pretends she can't see what's happening. In each case the person knows, and doesn't know, at the same time.",
    tension: ["Freedom is absolute, yet life feels constrained. We have jobs, pasts, other people's expectations. Sartre's tension: you are shaped by all of this, and still the next move is yours. Bad faith is the trick of treating yourself as an object — a role, a victim, a thing with no choice — so the weight lifts for a moment."],
    positions: [
      { who: "S", name: "Sartre", text: "Consciousness is never identical with itself, so self-deception is always possible — and always your responsibility." },
      { who: "B", name: "Beauvoir", text: "Bad faith is social too. Oppression trains people to see themselves as objects; freedom must be taken back together." },
      { who: "C", name: "Critics", text: "Can one mind really deceive itself? The paradox of self-deception pushes some toward unconscious motives instead." }
    ],
    argument: {
      p1: "If you are conscious, you stand apart from every role and fact about yourself — you can always imagine otherwise.",
      p2: "To treat yourself as fixed by a role ('I had no choice, I'm just the waiter') denies what consciousness is.",
      c: "Therefore bad faith — denying your own freedom to yourself — is the fundamental self-deception."
    },
    objection: "The strongest objection is the paradox itself: the deceiver and the deceived are the same person, so someone must know the truth all along. Sartre answers that consciousness is slippery — it can hold the truth and look away at once.",
    quote: { text: "Man is condemned to be free.", by: "Jean-Paul Sartre · Being and Nothingness, 1943" },
    related: ["free-will", "veil-of-ignorance", "qualia"],
    keys: "sartre bad faith freedom existentialism waiter being and nothingness self deception lying to yourself",
    cite: { apa: "Sartre, J.-P. (1943). Being and nothingness. Paris: Gallimard.", mla: "Sartre, Jean-Paul. Being and Nothingness. Gallimard, 1943.", bib: "@book{sartre1943being,\n  author = {Sartre, Jean-Paul},\n  title = {Being and Nothingness},\n  year = {1943}\n}" }
  },
  {
    slug: "free-will", num: 2, title: "On Free Will",
    tradition: "Metaphysics", era: "Contemporary", read: 3,
    hero: { bg: "purple", k: "METAPHYSICS · THE BIG FORK", big: "Could you really have done otherwise?", sub: "Three answers: yes, no, and — wrong question." },
    hook: "Physics says causes. Morality says blame. Both can't be half-right.",
    breath: "If every event has a cause, your next decision was fixed at the Big Bang. Compatibilists reply that freedom isn't escaping causes — it's acting from your own reasons. Libertarians insist the future is genuinely open; hard determinists say it only feels that way.",
    tension: ["Praise and blame assume you could have done otherwise. Neuroscience and physics suggest a chain of causes with no gaps. The tension is practical: we can't live without holding each other responsible, and we can't think without taking causes seriously."],
    positions: [
      { who: "H", name: "Hard determinists", text: "Every choice has sufficient prior causes. Freedom is an illusion — but punishment still works as a cause." },
      { who: "C", name: "Compatibilists", text: "Freedom is acting on your own desires without coercion, even in a determined world. Hume, Frankfurt, Dennett." },
      { who: "K", name: "Libertarians", text: "Some events — including choices — are genuinely undetermined. Agent-causation starts new chains." }
    ],
    argument: {
      p1: "A free act is one you control — one where you, not a chip, a drug, or a gun, are the source.",
      p2: "Control needs your reasons to make the difference, not a break in physics.",
      c: "Therefore responsibility survives even if determinism is true. (The compatibilist case.)"
    },
    objection: "The consequence argument: if the past and the laws fix everything, your reasons were fixed too — so 'your' control is borrowed. Compatibilists answer with Frankfurt cases, where no alternative exists yet the act is still yours.",
    quote: { text: "Man can do what he wills but he cannot will what he wills.", by: "Arthur Schopenhauer · On the Freedom of the Will, 1839" },
    related: ["sartre-bad-faith", "a-theory-of-time", "skeptical-theism"],
    keys: "free will determinism compatibilism libertarian frankfurt hume moral responsibility could have done otherwise",
    cite: { apa: "Frankfurt, H. G. (1971). Freedom of the will and the concept of a person. Journal of Philosophy.", mla: "Frankfurt, Harry. “Freedom of the Will and the Concept of a Person.” 1971.", bib: "@article{frankfurt1971freedom,\n  author = {Frankfurt, Harry G.},\n  title = {Freedom of the will and the concept of a person},\n  year = {1971}\n}" }
  },
  {
    slug: "qualia", num: 3, title: "Qualia in Consciousness",
    tradition: "Mind", era: "Contemporary", read: 2,
    hero: { bg: "cream", k: "PHILOSOPHY OF MIND · THE RED ROOM", big: "What is it like to see red?", sub: "Physics describes light. Nothing describes the redness." },
    hook: "Mary knows everything about colour — in a black-and-white room.",
    breath: "Jackson's Mary knows all the physics of colour vision but has never seen red. When she leaves the room, does she learn something new? If yes, then facts about experience — qualia — escape the physical story.",
    tension: ["Brains are objects with mass and charge. Experiences are subjective: there is something it is like to taste coffee. The tension is the explanatory gap — why should any firing of neurons feel like anything at all?"],
    positions: [
      { who: "J", name: "Jackson / Nagel", text: "Qualia are real and irreducible. No objective description captures what red looks like from the inside." },
      { who: "D", name: "Dennett", text: "Qualia are a bad intuition. There is no extra 'redness' beyond discriminations and reactions." },
      { who: "C", name: "Chalmers", text: "Consciousness is the hard problem. Even a complete brain map leaves 'why feeling?' unanswered." }
    ],
    argument: {
      p1: "Mary knows every physical fact about colour while inside the room.",
      p2: "On leaving, she learns something new: what red looks like.",
      c: "Therefore not all facts are physical facts. Qualia exist."
    },
    objection: "The ability reply: Mary gains no new facts, only a new ability — to recognise, imagine, remember red. Knowledge-how, not knowledge-that. Jackson himself later accepted a version of this.",
    quote: { text: "What is it like to be a bat?", by: "Thomas Nagel · 1974" },
    related: ["free-will", "sartre-bad-faith", "a-theory-of-time"],
    keys: "qualia consciousness mary's room mary jackson nagel bat hard problem what is it like red experience",
    cite: { apa: "Jackson, F. (1982). Epiphenomenal qualia. Philosophical Quarterly.", mla: "Jackson, Frank. “Epiphenomenal Qualia.” 1982.", bib: "@article{jackson1982epiphenomenal,\n  author = {Jackson, Frank},\n  title = {Epiphenomenal qualia},\n  year = {1982}\n}" }
  },
  {
    slug: "veil-of-ignorance", num: 4, title: "Rawls' Veil of Ignorance",
    tradition: "Ethics", era: "Modern", read: 3,
    hero: { bg: "purple", k: "POLITICAL PHILOSOPHY · FAIRNESS", big: "Design society without knowing who you'll be.", sub: "Rich or poor, healthy or sick — you must bet blind." },
    hook: "Fair rules are the ones you'd pick before knowing your place.",
    breath: "Imagine choosing the laws of society without knowing your class, talent, sex, or beliefs. Rawls says whatever you'd accept from behind that veil — especially protections for the worst-off — is justice.",
    tension: ["We want both liberty and equality, merit and need. Behind the veil, self-interest becomes fairness: you insure against being at the bottom because you might be. Critics ask whether real people could ever reason that impartially — or whether they should."],
    positions: [
      { who: "R", name: "Rawls", text: "Justice as fairness: equal liberties first, inequalities allowed only if they help the least advantaged." },
      { who: "N", name: "Nozick", text: "The veil ignores history. If holdings were justly acquired, taxation for redistribution is forced labour." },
      { who: "S", name: "Sen", text: "Don't idealise institutions — compare real lives. Capabilities, not primary goods, are what matter." }
    ],
    argument: {
      p1: "A fair agreement is one no one could reasonably reject from an impartial position.",
      p2: "The veil of ignorance is the impartial position: it removes bargaining advantages.",
      c: "Therefore principles chosen behind the veil — liberty plus the difference principle — are just."
    },
    objection: "Harsanyi's objection: rational agents behind the veil would maximise average welfare, not protect the worst-off — they'd gamble. Rawls replies that justice isn't a gamble when your whole life is the stake.",
    quote: { text: "Justice is the first virtue of social institutions.", by: "John Rawls · A Theory of Justice, 1971" },
    related: ["sartre-bad-faith", "skeptical-theism", "free-will"],
    keys: "rawls veil of ignorance justice fairness theory of justice difference principle nozick political philosophy",
    cite: { apa: "Rawls, J. (1971). A theory of justice. Harvard University Press.", mla: "Rawls, John. A Theory of Justice. Harvard UP, 1971.", bib: "@book{rawls1971theory,\n  author = {Rawls, John},\n  title = {A Theory of Justice},\n  year = {1971}\n}" }
  },
  {
    slug: "skeptical-theism", num: 5, title: "Skeptical Theism and Evil",
    tradition: "Religion", era: "Contemporary", read: 2,
    hero: { bg: "cream", k: "PHILOSOPHY OF RELIGION · GRIEF", big: "Horror doesn't look like a greater good.", sub: "The sceptic's reply: it wouldn't look like one to us anyway." },
    hook: "Evil is evidence against God — unless our ignorance is the evidence.",
    breath: "Rowe points to a fawn burning in a forest fire: pointless suffering, no soul-making in sight. Skeptical theists reply that our grasp of goods is tiny next to God's; absence of a visible reason isn't absence of a reason.",
    tension: ["Suffering feels gratuitous, and a good God would prevent gratuitous suffering. But 'looks gratuitous to us' is a claim about us, not about the universe. The debate turns on how much weight human ignorance should carry."],
    positions: [
      { who: "R", name: "Rowe", text: "Pointless evil exists — the fawn, the child. A good God would stop it. So no such God exists." },
      { who: "W", name: "Wykstra", text: "CORNEA: we should expect God's reasons to be beyond our ken, the way a parent's reasons escape a toddler." },
      { who: "D", name: "Draper", text: "Pain and pleasure look exactly as we'd expect with no God — and surprising with one. Biology, not theodicy." }
    ],
    argument: {
      p1: "If God had a justifying reason for horrific evil, we have no reason to expect we would grasp it.",
      p2: "We cannot grasp any such reason for cases like the burning fawn.",
      c: "Therefore our inability to see a reason is not evidence there is none. (The skeptical-theist block.)"
    },
    objection: "Skepticism spreads: if our moral vision is that dim, we lose ordinary moral knowledge too — and theism itself. This is the Pandora's box objection, and skeptical theists spend most effort containing it.",
    quote: { text: "My ways are not your ways.", by: "Isaiah 55:8 · often cited in the debate" },
    related: ["veil-of-ignorance", "a-theory-of-time", "free-will"],
    keys: "skeptical theism evil problem of evil rowe wykstra suffering god religion theodicy",
    cite: { apa: "Wykstra, S. J. (1984). The Humean obstacle to evidential arguments. Philosophy of Religion.", mla: "Wykstra, Stephen. “The Humean Obstacle.” 1984.", bib: "@article{wykstra1984humean,\n  author = {Wykstra, Stephen J.},\n  title = {The Humean obstacle},\n  year = {1984}\n}" }
  },
  {
    slug: "a-theory-of-time", num: 6, title: "A-Theory of Time",
    tradition: "Metaphysics", era: "Contemporary", read: 2,
    hero: { bg: "pink", k: "METAPHYSICS · PAST / NOW / FUTURE", big: "Only now is real. The past is gone; the future isn't yet.", sub: "Against the block universe, where all times sit side by side." },
    hook: "Time flows. Physics says: no, it doesn't. One of them is wrong.",
    breath: "The A-theory says tensed facts are fundamental — now moves, the future is open, the past is fixed. The B-theory says only earlier/later relations are real: all moments exist like pages in a book, and flow is an illusion.",
    tension: ["We feel time passing, dread the future, regret the past. Relativity treats time like a fourth dimension with no privileged now. The fight is between lived time and physics time — and neither side will concede."],
    positions: [
      { who: "P", name: "Presentists", text: "Only the present exists. The past was, the future will be — 'was' and 'will be' do all the work." },
      { who: "G", name: "Growing block", text: "Past and present exist; the future doesn't yet. Reality grows as the now advances." },
      { who: "E", name: "Eternalists", text: "All times are equally real. Passage is perspectival, like 'here' — real to you, not to the world." }
    ],
    argument: {
      p1: "We experience genuine passage: events become present, then recede.",
      p2: "The best explanation of a universal, vivid experience is that it is veridical.",
      c: "Therefore tensed facts are real. The A-theory is true."
    },
    objection: "Relativity's relativity of simultaneity: there is no single cosmic now. Presentists reply with a privileged foliation, or retreat to a tensed metaphysics without a global present — at a cost.",
    quote: { text: "Time is what keeps everything from happening at once.", by: "Ray Cummings, 1921 · quoted by physicists ever since" },
    related: ["free-will", "qualia", "skeptical-theism"],
    keys: "a-theory b-theory time presentism eternalism growing block passage mctaggart now relativity",
    cite: { apa: "Prior, A. N. (1967). Past, present and future. Oxford: Clarendon.", mla: "Prior, A. N. Past, Present and Future. Clarendon, 1967.", bib: "@book{prior1967past,\n  author = {Prior, A. N.},\n  title = {Past, Present and Future},\n  year = {1967}\n}" }
  }
];

const THINKERS = [
  { slug: "sartre", name: "Sartre", years: "1905–1980", school: "Existentialism",
    line: "Freedom first. You are what you do — excuses are bad faith.",
    entries: ["sartre-bad-faith", "free-will"] },
  { slug: "rawls", name: "Rawls", years: "1921–2002", school: "Liberalism",
    line: "Fairness is what we'd agree to blindfolded.",
    entries: ["veil-of-ignorance"] },
  { slug: "nagel", name: "Nagel", years: "1937–", school: "Philosophy of mind",
    line: "Some facts only exist from the inside.",
    entries: ["qualia"] },
  { slug: "camus", name: "Camus", years: "1913–1960", school: "Absurdism",
    line: "The world is silent; revolt anyway.",
    entries: ["sartre-bad-faith", "skeptical-theism"] },
  { slug: "kant", name: "Kant", years: "1724–1804", school: "Deontology",
    line: "Act only on rules you'd will for everyone.",
    entries: ["veil-of-ignorance", "free-will"] },
  { slug: "nietzsche", name: "Nietzsche", years: "1844–1900", school: "Genealogy",
    line: "Values have a history — and a price.",
    entries: ["sartre-bad-faith", "skeptical-theism"] }
];

const TRADITIONS = [
  { slug: "existentialism", name: "Existentialism", color: "p",
    line: "Existence before essence. You arrive without a script — then you must write one.",
    entries: ["sartre-bad-faith", "free-will"] },
  { slug: "stoicism", name: "Stoicism", color: "",
    line: "Control what you can: judgments, impulses, assent. Release the rest.",
    entries: ["free-will", "skeptical-theism"] },
  { slug: "skepticism", name: "Skepticism", color: "",
    line: "Suspend judgment. Ask what our limits hide before claiming what is.",
    entries: ["skeptical-theism", "qualia"] },
  { slug: "absurdism", name: "Absurdism", color: "u",
    line: "We crave meaning; the world offers none. Live the tension.",
    entries: ["sartre-bad-faith", "a-theory-of-time"] }
];

const EXPERIMENTS = [
  { slug: "experience-machine", title: "The Experience Machine", by: "Nozick · 1974", read: 1, color: "#feabe3",
    setup: "A tank that gives you any life you want — perfect happiness, zero contact with reality. You forget it's a tank.",
    steps: ["Plug in for two years, pre-programmed triumph.", "Stay out, with real risk and real loss.", "Nozick: almost everyone stays out. So we want more than feeling good — we want to actually do things."],
    link: "free-will" },
  { slug: "marys-room", title: "Mary's Room", by: "Jackson · 1982", read: 1, color: "#fadede",
    setup: "Mary knows all colour physics, raised in a black-and-white room. One day she steps out and sees red.",
    steps: ["List everything physics says about red.", "Open the door. Let her see one poppy.", "If she learns anything, physicalism is incomplete."],
    link: "qualia" },
  { slug: "ship-of-theseus", title: "Ship of Theseus", by: "Plutarch · ~75 AD", read: 1, color: "#d8aafe",
    setup: "Every plank of the ship is replaced over years. Then someone rebuilds a ship from the old planks.",
    steps: ["Sail and repair until no original plank remains.", "Rebuild the 'original' from stored planks.", "Which is the ship? Identity, parts, continuity — pick two."],
    link: "a-theory-of-time" },
  { slug: "veil", title: "Behind the Veil", by: "Rawls · 1971", read: 1, color: "#fff8f4",
    setup: "You must vote on society's rules before knowing if you're rich, poor, sick, or a minority.",
    steps: ["Forget your class, talent, and beliefs.", "Choose tax, health, and liberty rules.", "Whatever you'd risk blind is your theory of justice."],
    link: "veil-of-ignorance" }
];

const SERIES = [
  { slug: "bad-faith-60", title: "Bad Faith in 60 seconds", meta: "5 CARDS · EXISTENTIALISM",
    color: "#d8aafe",
    cards: [
      { t: "The waiter", p: "He moves too precisely, bows too much. He plays at being a waiter the way an actor plays Hamlet — and hopes you won't notice the acting." },
      { t: "The date", p: "She knows exactly what his compliments mean, and pretends not to. Not lying to him — stalling herself, keeping every reading open at once." },
      { t: "The trick", p: "Bad faith needs the truth to hide it. You must know what you're avoiding, or the avoidance wouldn't work." },
      { t: "Why we do it", p: "Freedom is vertigo. A role, a past, an excuse — anything that says 'I had no choice' lightens the load for a second." },
      { t: "The way out", p: "Own it. Say: I chose this, and I can choose again. That sentence is the whole of Sartre's ethics. → Read the entry" }
    ] },
  { slug: "free-will-60", title: "Free Will in 60 seconds", meta: "5 CARDS · METAPHYSICS",
    color: "#feabe3",
    cards: [
      { t: "The worry", p: "Every event has a cause — including the firing of your neurons. So was your breakfast choice fixed at the Big Bang?" },
      { t: "No to freedom", p: "Hard determinists bite the bullet: no free will. Blame is just conditioning; praise is just luck." },
      { t: "Freedom, redefined", p: "Compatibilists: freedom is acting from your own reasons, unforced. A puppet with your desires is still a puppet — you're not one." },
      { t: "The test", p: "Frankfurt's trick: if a chip would have forced you, but didn't need to, are you free? Most say yes. Alternatives aren't everything." },
      { t: "The stakes", p: "Love, regret, responsibility — all assume authorship. Decide which picture lets you keep them. → Read the entry" }
    ] }
];

/* Shelves being written — full entries, holding pages for now. */
const SOON = [
  { slug: "stoic-dichotomy", title: "The Stoic Dichotomy", era: "Ancient",
    hook: "Some things are up to us. Most things aren't. Wisdom is the sorting.",
    points: ["Epictetus's line: control what is up to you — judgments, impulses, assent.", "The trichotomy problem: what about things partly up to us?", "The practice: morning premeditation, evening review."],
    related: ["free-will", "skeptical-theism"],
    keys: "stoic dichotomy epictetus control enchiridion stoicism trichotomy" },
  { slug: "anselm-ontological", title: "Anselm's Ontological Argument", era: "Medieval",
    hook: "God as the greatest thing thinkable — therefore real?",
    points: ["The Proslogion move: a greatest being must exist, or a greater could be thought.", "Gaunilo's island: the perfect parody — a greatest island must exist too?", "Kant's reply: existence is not a predicate."],
    related: ["skeptical-theism", "a-theory-of-time"],
    keys: "anselm ontological argument god proslogion gaunilo island existence predicate medieval" },
  { slug: "descartes-cogito", title: "Descartes' Cogito", era: "Modern",
    hook: "I think, therefore I am — the one sentence that survives doubt.",
    points: ["Methodic doubt: burn everything that can burn.", "The cogito as Archimedean point — indubitable even to a deceiver.", "From 'I am' to God to the world: does the bridge hold?"],
    related: ["qualia", "sartre-bad-faith"],
    keys: "descartes cogito meditations doubt evil demon dualism modern" },
  { slug: "kant-categorical", title: "Kant's Categorical Imperative", era: "Modern",
    hook: "Act only as you would will everyone to act.",
    points: ["Universalizability: the lying-promise test.", "Humanity as an end in itself — never merely a means.", "The price: rigorism, even about white lies."],
    related: ["veil-of-ignorance", "free-will"],
    keys: "kant categorical imperative universalizability deontology humanity means ends modern" },
  { slug: "nietzsche-will", title: "Nietzsche's Will to Power", era: "Modern",
    hook: "Not survival — expansion. Life wants more life.",
    points: ["Master versus slave moralities: where values come from.", "Genealogy: every value has a bloodline.", "Amor fati: love it all, or lie about it."],
    related: ["sartre-bad-faith", "skeptical-theism"],
    keys: "nietzsche will to power genealogy morals master slave amor fati ubermensch" },
  { slug: "wittgenstein-beetle", title: "Wittgenstein's Beetle", era: "Contemporary",
    hook: "Everyone has a box with 'a beetle' inside. No one can see another's.",
    points: ["Private language: can words name what cannot be shown?", "The beetle drops out — pain-talk without inner objects.", "Against the inner museum: meaning is use."],
    related: ["qualia", "free-will"],
    keys: "wittgenstein beetle private language investigations pain meaning use contemporary" }
];

const ERAS = [
  { name: "ANCIENT", span: "c. 700 BC – 500" },
  { name: "MEDIEVAL", span: "c. 500 – 1400" },
  { name: "MODERN", span: "c. 1400 – 1900" },
  { name: "CONTEMPORARY", span: "c. 1900 – NOW" }
];

/* One inline figure per entry: diagram first, caption second. */
const FIGCAP = {
  "sartre-bad-faith": "The loop: deceiver and deceived are one mind.",
  "free-will": "Frankfurt's test: the blocked road was never taken — yet the drive was yours.",
  "qualia": "Mary's room: every physical fact, none of the redness.",
  "veil-of-ignorance": "Choose blind: which rules insure every seat at the table?",
  "skeptical-theism": "The fawn: pointless to us — but how far can we see?",
  "a-theory-of-time": "Flow versus block: the now moves, or only seems to."
};

const GLOSS = {
  "qualia": "The felt quality of experience — what red looks like, what pain feels like, from the inside.",
  "a priori": "Known without looking: true by reason alone, like 2 + 2 = 4.",
  "bad faith": "Sartre's self-deception: treating yourself as an object with no choice, to dodge freedom.",
  "veil of ignorance": "Rawls's blindfold: choose society's rules without knowing your place in it.",
  "determinism": "Every event has sufficient prior causes. Given the past and the laws, only one future is possible.",
  "eternalism": "All times — past, present, future — are equally real, like pages in a book.",
  "skeptical theism": "We shouldn't expect to grasp God's reasons, so unseen reasons may still exist.",
  "absurd": "Camus's clash: our hunger for meaning meets a silent world."
};

const DAILY = [
  { q: "Are you lying to yourself right now?", to: "#/entry/sartre-bad-faith" },
  { q: "Could you have done otherwise today?", to: "#/entry/free-will" },
  { q: "What is red like — in words?", to: "#/entry/qualia" },
  { q: "What rules would you pick blindfolded?", to: "#/entry/veil-of-ignorance" },
  { q: "Does pointless evil disprove God?", to: "#/entry/skeptical-theism" },
  { q: "Is the future already there?", to: "#/entry/a-theory-of-time" },
  { q: "Would you plug into perfect happiness?", to: "#/experiment/experience-machine" }
];

const FEATURED = [
  { text: "\u201CMan is condemned to be free.\u201D", sub: "Sartre · Bad Faith — read in 2 min →", to: "#/entry/sartre-bad-faith" },
  { text: "\u201CWhat is it like to be a bat?\u201D", sub: "Nagel · Qualia — read in 2 min →", to: "#/entry/qualia" },
  { text: "\u201CJustice is the first virtue of institutions.\u201D", sub: "Rawls · Veil — read in 3 min →", to: "#/entry/veil-of-ignorance" },
  { text: "\u201COne must imagine Sisyphus happy.\u201D", sub: "Camus · Absurdism — start here →", to: "#/start-here" }
];

/* ── dom ──────────────────────────────────────────────── */

const $ = (s, r) => (r || document).querySelector(s);
const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
const stage = $("#stage"), sheet = $("#sheetScroll"), docView = $("#view-doc"),
  exploreView = $("#view-explore"), progress = $("#progress"),
  searchBtn = $("#searchBtn"), searchPop = $("#searchPop"),
  searchInput = $("#searchInput"), searchResults = $("#searchResults"),
  panel = $("#sheet"), grip = $("#grip");

const toast = $("#toast"), glossTip = $("#glossTip");
let toastT = null;
function say(msg) {
  toast.textContent = msg;
  toast.classList.add("show");
  window.clearTimeout(toastT);
  toastT = window.setTimeout(() => toast.classList.remove("show"), 2200);
}

const entryBySlug = Object.fromEntries(ENTRIES.map(e => [e.slug, e]));
const ORDER = ENTRIES.map(e => e.slug);

/* ── art-board fit (desktop only; mobile is a real composition) ── */

function fitStage() {
  if (window.innerWidth < 900) {
    stage.style.transform = "";
    stage.style.height = "";
    return;
  }
  const s = window.innerWidth / 1600;
  stage.style.transform = "scale(" + s + ")";
  stage.style.height = Math.max(959, window.innerHeight / s) + "px";
}
window.addEventListener("resize", fitStage);

/* ── svg heroes (bold shapes, flat colour, black keylines) ── */

function heroSVG(slug) {
  const B = 'stroke="#0a0505" stroke-width="7"';
  const T = 'stroke="#0a0505" stroke-width="5" stroke-linecap="round"';
  if (slug === "sartre-bad-faith") return `<svg viewBox="0 0 200 150" role="img" aria-label="Two masks"><ellipse cx="70" cy="75" rx="44" ry="56" fill="#fff8f4" ${B}/><ellipse cx="132" cy="75" rx="44" ry="56" fill="#0a0505"/><circle cx="58" cy="62" r="7" fill="#0a0505"/><circle cx="84" cy="62" r="7" fill="#0a0505"/><path d="M54 102 Q70 92 88 102" fill="none" ${T}/><circle cx="120" cy="62" r="7" fill="#fadede"/><circle cx="146" cy="62" r="7" fill="#fadede"/><path d="M116 102 Q132 112 150 102" fill="none" stroke="#fadede" stroke-width="5" stroke-linecap="round"/></svg>`;
  if (slug === "free-will") return `<svg viewBox="0 0 200 150" role="img" aria-label="Forking paths"><path d="M20 75 H80" fill="none" ${B}/><path d="M80 75 C120 75 120 30 180 30" fill="none" ${B}/><path d="M80 75 C120 75 120 120 180 120" fill="none" ${B}/><circle cx="20" cy="75" r="12" fill="#d8aafe" ${B}/><circle cx="180" cy="30" r="12" fill="#feabe3" ${B}/><circle cx="180" cy="120" r="12" fill="#fff8f4" ${B}/></svg>`;
  if (slug === "qualia") return `<svg viewBox="0 0 200 150" role="img" aria-label="An eye"><ellipse cx="100" cy="75" rx="72" ry="44" fill="#fff8f4" ${B}/><circle cx="100" cy="75" r="26" fill="#d1393c" ${B}/><circle cx="100" cy="75" r="10" fill="#0a0505"/><path d="M40 40 L60 58 M160 40 L140 58" ${T}/></svg>`;
  if (slug === "veil-of-ignorance") return `<svg viewBox="0 0 200 150" role="img" aria-label="A veil"><rect x="40" y="14" width="120" height="14" fill="#0a0505"/><path d="M48 28 V120 M76 28 V120 M104 28 V120 M132 28 V120 M152 28 V120" stroke="#0a0505" stroke-width="9"/><circle cx="100" cy="128" r="10" fill="#feabe3" ${B}/></svg>`;
  if (slug === "skeptical-theism") return `<svg viewBox="0 0 200 150" role="img" aria-label="Scales"><path d="M100 18 V122" ${B}/><path d="M52 44 H148" ${B}/><path d="M52 44 L30 96 H74 Z" fill="#feabe3" ${B}/><path d="M148 44 L126 96 H170 Z" fill="#d8aafe" ${B}/><rect x="88" y="118" width="24" height="12" fill="#0a0505"/></svg>`;
  return `<svg viewBox="0 0 200 150" role="img" aria-label="A clock"><circle cx="100" cy="78" r="54" fill="#fff8f4" ${B}/><path d="M100 78 V44 M100 78 L126 90" ${B}/><circle cx="100" cy="78" r="7" fill="#d1393c" ${B}/><path d="M100 10 v10 M150 78 h10 M50 78 h-10" ${T}/></svg>`;
}
function expArt(e) {
  const B = 'stroke="#0a0505" stroke-width="6"';
  if (e.slug === "experience-machine") return `<svg viewBox="0 0 120 74" aria-hidden="true"><rect x="30" y="10" width="60" height="44" fill="#d8aafe" ${B}/><path d="M46 22 h28 M46 32 h28 M46 42 h18" stroke="#0a0505" stroke-width="4" stroke-linecap="round"/><circle cx="60" cy="64" r="5" fill="#0a0505"/></svg>`;
  if (e.slug === "marys-room") return `<svg viewBox="0 0 120 74" aria-hidden="true"><rect x="14" y="10" width="92" height="54" fill="#fff8f4" ${B}/><rect x="14" y="10" width="46" height="54" fill="#0a0505"/><circle cx="83" cy="37" r="13" fill="#d1393c" stroke="#0a0505" stroke-width="5"/></svg>`;
  if (e.slug === "ship-of-theseus") return `<svg viewBox="0 0 120 74" aria-hidden="true"><path d="M14 30 H106 L92 56 H28 Z" fill="#feabe3" ${B}/><rect x="52" y="12" width="8" height="20" fill="#0a0505"/><path d="M60 12 h22" stroke="#0a0505" stroke-width="6"/></svg>`;
  return `<svg viewBox="0 0 120 74" aria-hidden="true"><path d="M20 8 V58 M100 8 V58" stroke="#0a0505" stroke-width="7"/><rect x="20" y="14" width="80" height="26" fill="#fff8f4" ${B}/><circle cx="60" cy="52" r="7" fill="#0a0505"/></svg>`;
}
function seriesArt(i) {
  const B = 'stroke="#0a0505" stroke-width="6"';
  if (i === 0) return `<svg viewBox="0 0 92 92" aria-hidden="true"><rect width="92" height="92" fill="#fadede"/><ellipse cx="34" cy="46" rx="18" ry="24" fill="#fff8f4" ${B}/><ellipse cx="60" cy="46" rx="18" ry="24" fill="#0a0505"/></svg>`;
  return `<svg viewBox="0 0 92 92" aria-hidden="true"><rect width="92" height="92" fill="#fadede"/><path d="M12 46 H40 M40 46 C58 46 58 22 82 22 M40 46 C58 46 58 70 82 70" fill="none" ${B}/></svg>`;
}

/* Inline figures: flat shapes, black keylines, palette fills only. */
function figureSVG(slug) {
  const B = 'stroke="#0a0505" stroke-width="6"';
  const T = 'font-family="Bebas Neue, Arial Narrow, sans-serif" font-size="17" fill="#0a0505" letter-spacing="1"';
  if (slug === "sartre-bad-faith") return `<svg viewBox="0 0 430 150" role="img" aria-label="A loop from deceiver to deceived"><circle cx="90" cy="75" r="42" fill="#0a0505"/><circle cx="340" cy="75" r="42" fill="#feabe3" ${B}/><path d="M132 60 C200 40 230 40 298 60" fill="none" ${B}/><path d="M298 60 l-14 -2 M298 60 l-4 -13" stroke="#0a0505" stroke-width="6" stroke-linecap="round"/><path d="M298 92 C230 112 200 112 132 92" fill="none" ${B}/><path d="M132 92 l14 2 M132 92 l4 13" stroke="#0a0505" stroke-width="6" stroke-linecap="round"/><text x="90" y="80" text-anchor="middle" ${T} fill="#fadede">ME</text><text x="340" y="80" text-anchor="middle" ${T}>ME</text></svg>`;
  if (slug === "free-will") return `<svg viewBox="0 0 430 150" role="img" aria-label="A fork with one road blocked"><path d="M20 75 H150" fill="none" ${B}/><path d="M150 75 C220 75 220 35 320 35" fill="none" ${B}/><path d="M150 75 C220 75 220 115 320 115" fill="none" ${B}/><path d="M245 20 L275 50 M275 20 L245 50" stroke="#d1393c" stroke-width="10" stroke-linecap="round"/><circle cx="320" cy="115" r="14" fill="#d8aafe" ${B}/><text x="262" y="128" text-anchor="middle" ${T}>BLOCKED</text><text x="320" y="80" text-anchor="middle" ${T}>TAKEN</text></svg>`;
  if (slug === "qualia") return `<svg viewBox="0 0 430 150" role="img" aria-label="A black and white room with a red square outside"><rect x="30" y="15" width="200" height="120" fill="#fff8f4" ${B}/><rect x="30" y="15" width="100" height="120" fill="#0a0505"/><rect x="230" y="15" width="14" height="120" fill="#0a0505"/><circle cx="330" cy="75" r="34" fill="#d1393c" ${B}/><path d="M244 75 H282" ${B}/><path d="M272 65 L284 75 L272 85" fill="none" ${B}/><text x="80" y="82" text-anchor="middle" ${T} fill="#fadede">B / W</text><text x="330" y="140" text-anchor="middle" ${T}>RED</text></svg>`;
  if (slug === "veil-of-ignorance") return `<svg viewBox="0 0 430 150" role="img" aria-label="A two by two grid of unknown outcomes"><rect x="90" y="10" width="250" height="130" fill="#fff8f4" ${B}/><path d="M215 10 V140 M90 75 H340" ${B}/><text x="152" y="62" text-anchor="middle" ${T}>RULE A</text><text x="278" y="62" text-anchor="middle" ${T}>RULE B</text><text x="152" y="120" text-anchor="middle" font-size="34" ${T}>?</text><text x="278" y="120" text-anchor="middle" font-size="34" ${T}>?</text><text x="52" y="80" text-anchor="middle" ${T}>YOU?</text></svg>`;
  if (slug === "skeptical-theism") return `<svg viewBox="0 0 430 150" role="img" aria-label="A flame beside a question mark"><path d="M120 130 C70 100 80 60 110 40 C108 62 122 66 124 50 C150 70 160 100 120 130 Z" fill="#d1393c" ${B}/><ellipse cx="116" cy="105" rx="16" ry="22" fill="#feabe3"/><text x="290" y="115" text-anchor="middle" font-family="Bebas Neue, Arial Narrow, sans-serif" font-size="96" fill="#0a0505">?</text><path d="M210 30 V130" stroke="#0a0505" stroke-width="4" stroke-dasharray="10 8"/></svg>`;
  return `<svg viewBox="0 0 430 150" role="img" aria-label="A timeline with a moving now"><rect x="40" y="30" width="330" height="60" fill="#d8aafe" ${B}/><path d="M40 60 H370" ${B}/><path d="M60 45 V75 M140 45 V75 M220 45 V75 M300 45 V75" stroke="#0a0505" stroke-width="5"/><rect x="196" y="14" width="72" height="34" fill="#d1393c" ${B}/><text x="232" y="39" text-anchor="middle" ${T} fill="#fadede">NOW</text><path d="M232 48 V100" stroke="#0a0505" stroke-width="5"/><text x="232" y="138" text-anchor="middle" ${T}>FLOW, OR ONLY SEEMING?</text></svg>`;
}

function soonArt() {
  const B = 'stroke="#0a0505" stroke-width="6"';
  return `<svg viewBox="0 0 200 150" role="img" aria-label="An unfinished scroll"><rect x="60" y="18" width="80" height="114" fill="#fff8f4" ${B} stroke-dasharray="12 7"/><path d="M78 46 H122 M78 64 H122 M78 82 H104" stroke="#0a0505" stroke-width="6" stroke-linecap="round"/><rect x="48" y="12" width="104" height="12" fill="#0a0505"/><rect x="48" y="126" width="104" height="12" fill="#0a0505"/></svg>`;
}

/* ── explore render ───────────────────────────────────── */

function entryLink(e) { return "#/entry/" + e.slug; }

function renderExplore() {
  $("#topicGrid").innerHTML = ENTRIES.map(e =>
    `<a class="topic rv" href="${entryLink(e)}"><span class="num">${e.num}</span><span class="t"><span class="name">${e.title.toUpperCase()}</span><span class="meta">${e.read} MIN · ${e.tradition.toUpperCase()}</span></span></a>`
  ).join("");

  $("#seriesRow").innerHTML = SERIES.map((s, i) =>
    `<a class="series-card rv" href="#/series/${s.slug}"><span class="series-art">${seriesArt(i)}</span><span><span class="s-t">${s.title.toUpperCase()}</span><span class="s-m">${s.meta}</span><span class="dots" aria-hidden="true"><i class="on"></i><i></i><i></i><i></i><i></i></span></span></a>`
  ).join("");

  $("#expRow").innerHTML = EXPERIMENTS.map(e =>
    `<a class="exp-card rv" href="#/experiment/${e.slug}"><span class="exp-art" style="background:${e.color}">${expArt(e)}</span><span class="e-t">${e.title.toUpperCase()}</span><span class="e-m">${e.by.toUpperCase()} · ${e.read} MIN</span></a>`
  ).join("");

  renderAtlas();
  renderSoon();

  $("#thinkerChips").innerHTML = THINKERS.map(t =>
    `<a href="#/thinker/${t.slug}">${t.name.toUpperCase()}</a>`
  ).join("");
  $("#tradChips").innerHTML = TRADITIONS.map(t =>
    `<a class="alt" href="#/tradition/${t.slug}">${t.name.toUpperCase()}</a>`
  ).join("");

  const day = Math.floor(Date.now() / 864e5) % DAILY.length;
  const d = DAILY[day];
  $("#dailyQ").textContent = d.q;
  $("#dailyKicker").textContent = "TODAY'S QUESTION · " + (day + 1) + "/7";
  $("#dailyBtn").onclick = () => { location.hash = d.to; };

  const week = Math.floor(Date.now() / (7 * 864e5)) % FEATURED.length;
  const f = FEATURED[week];
  $("#featuredQuote").textContent = f.text;
  $("#featuredSub").textContent = f.sub;
  $("#featuredCard").onclick = () => { location.hash = f.to; };

  renderRecent();
}

function renderAtlas() {
  const row = $("#atlasRow");
  if (!row) return;
  row.innerHTML = ERAS.map(er => {
    const items = [
      ...ENTRIES.filter(e => e.era.toUpperCase() === er.name),
      ...SOON.filter(s => s.era.toUpperCase() === er.name)
    ];
    const dots = items.map(it => it.num
      ? `<a class="dot" href="#/entry/${it.slug}" title="${it.title}">${it.num}</a>`
      : `<a class="dot soon" href="#/soon/${it.slug}" title="${it.title} — being written">✎</a>`
    ).join("");
    return `<div class="era"><span class="e-name">${er.name}</span><span class="e-span">${er.span}</span><div class="e-dots">${dots || '<span class="e-span">EMPTY SHELF</span>'}</div></div>`;
  }).join("");
}

function renderSoon() {
  const grid = $("#soonGrid");
  if (!grid) return;
  grid.innerHTML = SOON.map(s =>
    `<a class="ghost rv" href="#/soon/${s.slug}"><span class="tag">BEING WRITTEN</span><b>${s.title.toUpperCase()}</b><small>${s.hook}</small></a>`
  ).join("");
}

function getRecent() {
  try { return JSON.parse(localStorage.getItem("askesis-recent") || "[]"); } catch { return []; }
}
function pushRecent(slug) {
  if (!entryBySlug[slug]) return;
  const r = [slug, ...getRecent().filter(s => s !== slug)].slice(0, 3);
  try { localStorage.setItem("askesis-recent", JSON.stringify(r)); } catch {}
  renderRecent();
}
function renderRecent() {
  const r = getRecent().map(s => entryBySlug[s]).filter(Boolean);
  const w = $("#recentWrap");
  if (!r.length) { w.hidden = true; return; }
  w.hidden = false;
  $("#recentRow").innerHTML = r.map(e =>
    `<a href="${entryLink(e)}">${e.title}<small>${e.read} MIN · ${e.tradition.toUpperCase()}</small></a>`
  ).join("");
}

/* ── doc builders ─────────────────────────────────────── */

function gTerm(word) {
  return `<button class="g" type="button" data-term="${word.toLowerCase()}">${word}</button>`;
}
function glossify(html) {
  return html
    .replace(/bad faith/gi, m => gTerm(m))
    .replace(/veil of ignorance/gi, m => gTerm(m))
    .replace(/qualia/gi, m => gTerm(m))
    .replace(/determinism/g, m => gTerm(m))
    .replace(/eternalism/g, m => gTerm(m))
    .replace(/skeptical theism/gi, m => gTerm(m))
    .replace(/\babsurd\b/g, m => gTerm(m))
    .replace(/\ba priori\b/g, m => gTerm(m));
}

function toolbar(backTo, backLabel) {
  return `<div class="doc-top">
    <a class="back" href="${backTo}" data-back>← ${backLabel}</a>
    <div class="doc-tools" role="group" aria-label="Reading tools">
      <button class="tool" id="tSize" type="button" title="Text size" aria-label="Change text size">Aa</button>
      <button class="tool" id="tListen" type="button" title="Listen" aria-label="Listen to this entry" aria-pressed="false">▶</button>
      <button class="tool" id="tShare" type="button" title="Share" aria-label="Share this page">⤴</button>
    </div>
  </div>`;
}

function entryHTML(e) {
  const idx = ORDER.indexOf(e.slug);
  const prev = entryBySlug[ORDER[idx - 1]], next = entryBySlug[ORDER[idx + 1]];
  const rel = e.related.map(s => entryBySlug[s]).filter(Boolean).slice(0, 3);
  return `${toolbar("#/", "EXPLORE")}
  <nav class="crumbs" aria-label="Breadcrumb">
    ${crumbTrad(e.tradition)}
    <span class="crumb">${e.era.toUpperCase()}</span>
    <span class="readtime">${e.read} MIN READ</span>
  </nav>
  <h1 class="doc-title">${e.title}</h1>
  <p class="doc-hook">${e.hook}</p>
  <div class="hero rv">
    <div class="hero-art ${e.hero.bg}">${heroSVG(e.slug)}</div>
    <div class="hero-cap"><span class="k">${e.hero.k}</span><span class="big">${e.hero.big}</span><span class="s">${e.hero.sub}</span></div>
  </div>
  <div class="breath rv"><div class="k">IN ONE BREATH</div><p>${glossify(e.breath)}</p></div>
  <div class="doc-sec rv"><h2>The tension</h2>${e.tension.map(p => `<p>${glossify(p)}</p>`).join("")}</div>
  <div class="doc-sec rv"><h2>Three positions</h2>
    <div class="positions">${e.positions.map((p, i) =>
      `<div class="position"><div class="avatar" aria-hidden="true">${p.who}</div><div class="p-n">0${i + 1}</div><div class="p-t">${p.name.toUpperCase()}</div><p>${glossify(p.text)}</p></div>`
    ).join("")}</div>
  </div>
  <figure class="fig rv"><div class="fig-art ${e.hero.bg === "cream" ? "" : e.hero.bg}">${figureSVG(e.slug)}</div><figcaption><b>FIG. ${e.num} — </b>${FIGCAP[e.slug] || ""}</figcaption></figure>
  <div class="arg rv" id="argCard">
    <div class="arg-h"><b>THE ARGUMENT, IN THREE LINES</b><button type="button" id="copyArg">COPY</button></div>
    <div class="arg-r"><span class="tag">P1</span><span>${glossify(e.argument.p1)}</span></div>
    <div class="arg-r"><span class="tag">P2</span><span>${glossify(e.argument.p2)}</span></div>
    <div class="arg-r qed"><span class="tag">∴</span><span>${glossify(e.argument.c)}</span></div>
  </div>
  <div class="doc-sec rv"><h2>The strongest objection</h2><p>${glossify(e.objection)}</p></div>
  <div class="quote rv">
    <blockquote>“${e.quote.text.replace(/^“?|”$/g, "")}”</blockquote>
    <cite>${e.quote.by}</cite>
    <div class="q-actions">
      <button class="mini-btn" type="button" id="copyQ">COPY QUOTE</button>
      <button class="mini-btn dark" type="button" id="shareQ">SHARE →</button>
    </div>
  </div>
  <div class="readnext rv"><h2>Read next</h2>
    <div class="rel-grid">${rel.map(r => `<a href="${entryLink(r)}"><b>${r.title.toUpperCase()}</b><small>${r.read} MIN · ${r.tradition.toUpperCase()}</small></a>`).join("")}</div>
  </div>
  <div class="prevnext rv">
    ${prev ? `<a href="${entryLink(prev)}"><small>← PREV</small><b>${prev.title.toUpperCase()}</b></a>` : `<a href="#/"><small>←</small><b>BACK TO EXPLORE</b></a>`}
    ${next ? `<a href="${entryLink(next)}"><small>NEXT →</small><b>${next.title.toUpperCase()}</b></a>` : `<a href="#/start-here"><small>NEXT →</small><b>START HERE PATH</b></a>`}
  </div>
  <div class="extras rv">
    <div class="cite">
      <h3>Cite this entry</h3>
      <div class="cite-tabs" role="group" aria-label="Citation style">
        <button type="button" data-c="apa" class="on">APA</button><button type="button" data-c="mla">MLA</button><button type="button" data-c="bib">BibTeX</button>
      </div>
      <pre id="citeOut">${e.cite.apa}</pre>
      <button class="mini-btn" type="button" id="copyCite">COPY CITATION</button>
    </div>
    <div class="notes">
      <h3>Your note <small style="font-family:var(--ui);font-size:12px;color:var(--mut)">· SAVED ON THIS DEVICE</small></h3>
      <textarea id="noteBox" aria-label="Your private note" placeholder="One line you'll actually remember…"></textarea>
      <small id="noteMsg">Private. Never leaves this browser.</small>
    </div>
  </div>`;
}

function tradSlug(name) {
  const t = TRADITIONS.find(t => t.name.toLowerCase() === name.toLowerCase());
  return t ? t.slug : null;
}
function crumbTrad(name) {
  const s = tradSlug(name);
  if (!s) return `<span class="crumb p">${name.toUpperCase()}</span>`;
  return `<a class="crumb p" href="#/tradition/${s}">${name.toUpperCase()}</a>`;
}

const FACE = { sartre: "", rawls: "f-white", nagel: "f-purple", camus: "f-cream", kant: "f-white", nietzsche: "f-purple" };

function thinkerHTML(t) {
  return `${toolbar("#/", "EXPLORE")}
  <nav class="crumbs"><span class="crumb p">THINKER</span><span class="crumb">${t.school.toUpperCase()}</span></nav>
  <div class="person rv"><div class="face ${FACE[t.slug] || ""}" aria-hidden="true">${t.name[0]}</div>
    <div><h3>${t.name.toUpperCase()}</h3><p>${t.years} · ${t.school} — ${t.line}</p></div></div>
  <div class="doc-sec rv"><h2>Start with</h2>
    <div class="rel-grid">${t.entries.map(s => entryBySlug[s]).filter(Boolean).map(e =>
      `<a href="${entryLink(e)}"><b>${e.title.toUpperCase()}</b><small>${e.read} MIN READ →</small></a>`).join("")}</div></div>
  <div class="prevnext rv"><a href="#/"><small>←</small><b>BACK TO EXPLORE</b></a><a href="#/start-here"><small>NEXT →</small><b>THE START-HERE PATH</b></a></div>`;
}

function traditionHTML(t) {
  const mark = t.color === "u" ? "u" : t.color === "p" ? "" : "c";
  return `${toolbar("#/", "EXPLORE")}
  <nav class="crumbs"><span class="crumb ${t.color || ""}">SCHOOL</span><span class="readtime">${t.entries.length} ENTRIES</span></nav>
  <h1 class="doc-title">${t.name}</h1>
  <p class="doc-hook">${t.line}</p>
  <div class="school rv"><div class="mark ${mark}" aria-hidden="true">${t.name[0]}</div>
    <div><h3>THE SHORT VERSION</h3><p>Every school answers one question first: what should a mind do? Endure, doubt, choose, or revolt? Carry that question into the entries below — notice where you resist. That friction is the lesson.</p></div></div>
  <div class="doc-sec rv"><h2>Read the orientation in 30 seconds</h2>
  <div class="howto"><ol><li>Ask what the school thinks a good mind does — endure, doubt, choose, or revolt?</li><li>Read one entry below with that question in hand.</li><li>Notice where you resist. That friction is the lesson.</li></ol></div></div>
  <div class="readnext rv"><h2>Entries in ${t.name.toLowerCase()}</h2>
    <div class="rel-grid">${t.entries.map(s => entryBySlug[s]).filter(Boolean).map(e =>
      `<a href="${entryLink(e)}"><b>${e.title.toUpperCase()}</b><small>${e.read} MIN READ →</small></a>`).join("")}</div></div>
  <div class="prevnext rv"><a href="#/"><small>←</small><b>BACK TO EXPLORE</b></a><a href="#/experiment/ship-of-theseus"><small>NEXT →</small><b>TRY A THOUGHT EXPERIMENT</b></a></div>`;
}

function experimentHTML(x) {
  return `${toolbar("#/", "EXPLORE")}
  <nav class="crumbs"><span class="crumb u">PUZZLE</span><span class="crumb">${x.by.toUpperCase()}</span><span class="readtime">${x.read} MIN</span></nav>
  <h1 class="doc-title">${x.title}</h1>
  <p class="doc-hook">${x.setup}</p>
  <div class="hero rv"><div class="hero-art cream">${expArt(x)}</div>
    <div class="hero-cap"><span class="k">HOW TO RUN IT</span><span class="big">Three steps, in your head.</span><span class="s">No equipment. No wrong answers — only sharper questions.</span></div></div>
  <div class="howto rv"><ol>${x.steps.map(s => `<li>${s}</li>`).join("")}</ol></div>
  <div class="readnext rv"><h2>Go deeper</h2>
    <div class="rel-grid"><a href="${entryLink(entryBySlug[x.link])}"><b>${entryBySlug[x.link].title.toUpperCase()}</b><small>FULL ENTRY →</small></a>
    <a href="#/series/bad-faith-60"><b>60-SECOND SERIES</b><small>SWIPE IT →</small></a>
    <a href="#/"><b>BACK TO EXPLORE</b><small>ALL PUZZLES →</small></a></div></div>`;
}

function seriesHTML(s) {
  return `${toolbar("#/", "EXPLORE")}
  <nav class="crumbs"><span class="crumb u">MINI SCROLL SERIES</span><span class="crumb">${s.meta}</span></nav>
  <h1 class="doc-title">${s.title}</h1>
  <p class="doc-stand rv">Swipe or use ← →. Five cards, about a minute. No account, no autoplay, no noise.</p>
  <div class="series-view rv">
    <div class="sv-track" id="svTrack" tabindex="0" aria-label="${s.title} cards">${s.cards.map((c, i) =>
      `<div class="sv-card" data-n="${i + 1}"><span class="n">CARD ${i + 1} / 5</span><span class="t">${c.t.toUpperCase()}</span><p>${c.p}</p></div>`).join("")}</div>
    <div class="sv-bar"><button type="button" id="svPrev" aria-label="Previous card">←</button>
      <div class="sv-dots" id="svDots" aria-hidden="true">${s.cards.map((_, i) => `<i class="${i === 0 ? "on" : ""}"></i>`).join("")}</div>
      <button type="button" id="svNext" aria-label="Next card">→</button></div>
  </div>
  <div class="prevnext"><a href="#/"><small>←</small><b>BACK TO EXPLORE</b></a><a href="#/entry/sartre-bad-faith"><small>NEXT →</small><b>READ THE FULL ENTRY</b></a></div>`;
}

function startHTML() {
  const steps = [
    { s: "sartre-bad-faith", why: "Freedom you already feel." },
    { s: "free-will", why: "Whether 'you' are in charge." },
    { s: "qualia", why: "What science leaves out." },
    { s: "veil-of-ignorance", why: "What fairness demands." },
    { s: "a-theory-of-time", why: "Whether the future exists." }
  ];
  return `${toolbar("#/", "EXPLORE")}
  <nav class="crumbs"><span class="crumb p">A PATH</span><span class="readtime">10 MINUTES · 5 STEPS</span></nav>
  <h1 class="doc-title">Start here</h1>
  <p class="doc-hook">Never read philosophy? Read these five in order. Each hands you the question the next one answers.</p>
  <div class="path rv">${steps.map((st, i) => { const e = entryBySlug[st.s]; return `<a href="${entryLink(e)}"><span class="step-n">${i + 1}</span><span><b>${e.title.toUpperCase()}</b><small>${st.why}</small></span><span class="mins">${e.read} MIN</span></a>`; }).join("")}</div>
  <div class="prevnext rv"><a href="#/"><small>←</small><b>BACK TO EXPLORE</b></a><a href="${entryLink(entryBySlug["sartre-bad-faith"])}"><small>BEGIN →</small><b>STEP 1 · BAD FAITH</b></a></div>`;
}

function soonHTML(s) {
  return `${toolbar("#/", "EXPLORE")}
  <nav class="crumbs"><span class="crumb">SHELF</span><span class="crumb">${s.era.toUpperCase()}</span><span class="readtime">BEING WRITTEN</span></nav>
  <h1 class="doc-title">${s.title}</h1>
  <p class="doc-hook">${s.hook}</p>
  <div class="hero rv"><div class="hero-art cream">${soonArt()}</div>
    <div class="hero-cap"><span class="k">WHAT THIS SHELF WILL HOLD</span><span class="big">Three questions, one shelf.</span><span class="s">The entry is being edited. The shape below is already fixed.</span></div></div>
  <div class="howto rv"><ol>${s.points.map(p => `<li>${p}</li>`).join("")}</ol></div>
  <div class="readnext rv"><h2>Read while you wait</h2>
    <div class="rel-grid">${s.related.map(r => entryBySlug[r]).filter(Boolean).map(e =>
      `<a href="${entryLink(e)}"><b>${e.title.toUpperCase()}</b><small>${e.read} MIN READ →</small></a>`).join("")}<a href="#/"><b>BACK TO EXPLORE</b><small>ALL SHELVES →</small></a></div></div>`;
}

function notFoundHTML(path) {
  const B = 'stroke="#0a0505" stroke-width="6"';
  return `<div class="doc-top"><a class="back" href="#/">← EXPLORE</a></div>
  <div class="nf"><div class="nf-art" aria-hidden="true"><svg viewBox="0 0 140 120"><rect x="30" y="10" width="80" height="16" fill="#0a0505"/><rect x="38" y="32" width="64" height="26" fill="#feabe3" ${B}/><path d="M38 62 L56 72 L46 82 L64 92" fill="none" ${B}/><rect x="38" y="94" width="64" height="12" fill="#d8aafe" ${B}/><rect x="28" y="108" width="84" height="10" fill="#0a0505"/></svg></div>
  <p class="big">LOST PAGE</p>
  <p class="doc-hook">Nothing at <b>${path}</b> — even the skeptics agree on that much.</p>
  <div class="rel-grid" style="margin-top:18px">
    <a href="#/entry/sartre-bad-faith"><b>READ BAD FAITH</b><small>2 MIN →</small></a>
    <a href="#/start-here"><b>START HERE</b><small>THE PATH →</small></a>
    <a href="#/"><b>BACK TO EXPLORE</b><small>ALL ENTRIES →</small></a>
  </div></div>`;
}

/* ── router ───────────────────────────────────────────── */

const TITLES = { explore: "Askēsis — Philosophy, Reframed" };
function setMeta(title, desc) {
  document.title = title;
  let m = document.querySelector('meta[name="description"]');
  if (m) m.setAttribute("content", desc);
}

function showExplore() {
  exploreView.classList.add("is-active");
  docView.classList.remove("is-active");
  docView.innerHTML = "";
  docActive = false; forceGrow = false;
  stopSpeak();
  setMeta(TITLES.explore, "A pocket library of philosophy. Short entries, argument cards, thought experiments and 60-second series.");
  sheet.scrollTop = 0;
  updateProgress();
  updateGrow();
}
function showDoc(html) {
  exploreView.classList.remove("is-active");
  docView.classList.add("is-active");
  docView.innerHTML = html;
  docActive = true;
  sheet.scrollTop = 0;
  updateProgress();
  wireDoc();
  watchRv(docView);
  updateGrow();
  const h = docView.querySelector(".doc-title, .nf .big");
  if (h) { h.setAttribute("tabindex", "-1"); }
  sheet.focus({ preventScroll: true });
}

function route() {
  const h = location.hash || "#/";
  const parts = h.replace(/^#\/?/, "").split("/").filter(Boolean);
  if (!parts.length) { showExplore(); return; }
  const [kind, slug] = parts;
  if (kind === "entry" && entryBySlug[slug]) {
    const e = entryBySlug[slug];
    showDoc(entryHTML(e));
    setMeta(e.title + " — Askēsis", e.hook);
    pushRecent(slug);
    return;
  }
  if (kind === "thinker") {
    const t = THINKERS.find(t => t.slug === slug);
    if (t) { showDoc(thinkerHTML(t)); setMeta(t.name + " — Askēsis", t.line); return; }
  }
  if (kind === "tradition") {
    const t = TRADITIONS.find(t => t.slug === slug);
    if (t) { showDoc(traditionHTML(t)); setMeta(t.name + " — Askēsis", t.line); return; }
  }
  if (kind === "experiment") {
    const x = EXPERIMENTS.find(x => x.slug === slug);
    if (x) { showDoc(experimentHTML(x)); setMeta(x.title + " — Askēsis", x.setup); return; }
  }
  if (kind === "series") {
    const s = SERIES.find(s => s.slug === slug);
    if (s) { showDoc(seriesHTML(s)); setMeta(s.title + " — Askēsis", "One idea in 5 cards."); wireSeries(); return; }
  }
  if (kind === "soon") {
    const s = SOON.find(s => s.slug === slug);
    if (s) { showDoc(soonHTML(s)); setMeta(s.title + " (coming soon) — Askēsis", s.hook); return; }
  }
  if (kind === "start-here" || h === "#/start-here") {
    showDoc(startHTML()); setMeta("Start here — Askēsis", "Five entries for first-time readers."); return;
  }
  showDoc(notFoundHTML(h));
  setMeta("Lost page — Askēsis", "Nothing here.");
}
window.addEventListener("hashchange", route);

/* ── doc wiring: tools, cite, notes, copy, share, series ── */

const SIZES = ["", "lg", "xl"];
let sizeI = 0;
function stopSpeak() {
  try { if ("speechSynthesis" in window) speechSynthesis.cancel(); } catch {}
  const b = $("#tListen");
  if (b) b.setAttribute("aria-pressed", "false");
}
function wireDoc() {
  const ts = $("#tSize");
  if (ts) ts.onclick = () => {
    sizeI = (sizeI + 1) % SIZES.length;
    sheet.classList.remove("lg", "xl");
    if (SIZES[sizeI]) sheet.classList.add(SIZES[sizeI]);
    say(sizeI === 0 ? "Standard text size" : sizeI === 1 ? "Large text" : "Extra large text");
  };
  const li = $("#tListen");
  if (li) li.onclick = () => {
    if (!("speechSynthesis" in window)) { say("Listening isn't supported here"); return; }
    if (li.getAttribute("aria-pressed") === "true") { stopSpeak(); return; }
    const txt = (($(".doc-title") || {}).textContent || "") + ". " +
      (($(".doc-hook") || {}).textContent || "") + " " +
      (($(".breath p") || {}).textContent || "");
    const u = new SpeechSynthesisUtterance(txt.slice(0, 900));
    u.onend = () => li.setAttribute("aria-pressed", "false");
    speechSynthesis.cancel(); speechSynthesis.speak(u);
    li.setAttribute("aria-pressed", "true");
    say("Reading aloud — tap again to stop");
  };
  const sh = $("#tShare");
  if (sh) sh.onclick = async () => {
    const url = location.href, title = document.title;
    if (navigator.share) { try { await navigator.share({ title, url }); } catch {} }
    else { copyText(url); say("Link copied"); }
  };
  const cq = $("#copyQ");
  if (cq) cq.onclick = () => {
    const bq = $("blockquote", docView), ci = $("cite", docView);
    copyText("“" + bq.textContent.replace(/[“”]/g, "") + "” — " + ci.textContent);
    say("Quote copied with attribution");
  };
  const sq = $("#shareQ");
  if (sq) sq.onclick = () => {
    if (navigator.share) navigator.share({ title: document.title, url: location.href }).catch(() => {});
    else { copyText(location.href); say("Link copied"); }
  };
  const ca = $("#copyArg");
  if (ca) ca.onclick = () => {
    const rows = $$(".arg-r span:last-child", docView).map(s => s.textContent.trim());
    copyText("P1: " + rows[0] + "\nP2: " + rows[1] + "\n∴ " + rows[2] + "\n— via Askēsis " + location.href);
    say("Argument card copied");
  };
  $$(".cite-tabs button", docView).forEach(b => b.onclick = () => {
    $$(".cite-tabs button", docView).forEach(x => x.classList.remove("on"));
    b.classList.add("on");
    const slug = (location.hash.split("/")[2] || "").split("?")[0];
    const e = entryBySlug[slug];
    if (e) $("#citeOut").textContent = e.cite[b.dataset.c];
  });
  const cc = $("#copyCite");
  if (cc) cc.onclick = () => { copyText($("#citeOut").textContent); say("Citation copied"); };
  const nb = $("#noteBox");
  if (nb) {
    const slug = (location.hash.split("/")[2] || "");
    try { nb.value = localStorage.getItem("askesis-note-" + slug) || ""; } catch {}
    nb.addEventListener("input", () => {
      try { localStorage.setItem("askesis-note-" + slug, nb.value); } catch {}
      const m = $("#noteMsg");
      if (m) m.textContent = nb.value ? "Saved just now · only on this device." : "Private. Never leaves this browser.";
    });
  }
  // back buttons prefer history
  $$("[data-back]", docView).forEach(a => a.addEventListener("click", ev => {
    if (history.length > 1 && location.hash && location.hash !== "#/") {
      // let hash routing handle it; keep default
    }
  }));
}
function copyText(t) {
  if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(t).catch(() => fallbackCopy(t));
  else fallbackCopy(t);
}
function fallbackCopy(t) {
  const ta = document.createElement("textarea");
  ta.value = t; document.body.appendChild(ta); ta.select();
  try { document.execCommand("copy"); } catch {}
  ta.remove();
}
function wireSeries() {
  const track = $("#svTrack"); if (!track) return;
  const dots = $$("#svDots i");
  const go = i => {
    const w = track.clientWidth;
    track.scrollTo({ left: i * w, behavior: "smooth" });
  };
  const cur = () => Math.round(track.scrollLeft / track.clientWidth);
  $("#svPrev").onclick = () => go(Math.max(0, cur() - 1));
  $("#svNext").onclick = () => {
    if (cur() >= dots.length - 1) { location.hash = "#/entry/sartre-bad-faith"; return; }
    go(cur() + 1);
  };
  track.onscroll = () => {
    const c = Math.min(dots.length - 1, Math.max(0, cur()));
    dots.forEach((d, i) => d.classList.toggle("on", i <= c));
  };
  track.onkeydown = ev => {
    if (ev.key === "ArrowRight") { ev.preventDefault(); $("#svNext").click(); }
    if (ev.key === "ArrowLeft") { ev.preventDefault(); $("#svPrev").click(); }
  };
}

/* ── progress hairline ── */
function updateProgress() {
  const max = sheet.scrollHeight - sheet.clientHeight;
  const p = max > 0 ? (sheet.scrollTop / max) * 100 : 0;
  progress.style.width = p + "%";
}
sheet.addEventListener("scroll", updateProgress, { passive: true });

/* ── growing sheet: scroll and the cream rises to meet you ── */
let forceGrow = false, docActive = false;
function updateGrow() {
  const wide = window.innerWidth >= 900;
  const grown = wide && (docActive || forceGrow || sheet.scrollTop > 24);
  panel.classList.toggle("is-grown", grown);
  stage.classList.toggle("grown", grown);
  if (grown) grip.classList.remove("nag");
  grip.setAttribute("aria-expanded", String(grown));
  grip.setAttribute("aria-label", grown ? "Shrink the sheet" : "Grow the sheet");
}
let growQueued = false;
sheet.addEventListener("scroll", () => {
  if (growQueued) return; growQueued = true;
  window.requestAnimationFrame(() => { growQueued = false; updateGrow(); });
}, { passive: true });
grip.addEventListener("click", () => {
  grip.classList.remove("nag");
  if (docActive) { sheet.scrollTo({ top: 0, behavior: "smooth" }); return; }
  forceGrow = !panel.classList.contains("is-grown");
  updateGrow();
});
window.addEventListener("resize", updateGrow);

/* ── scroll reveal: one observer, stagger by sibling order ── */
const io = new IntersectionObserver(entries => entries.forEach(en => {
  if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
}), { threshold: 0.1 });
function watchRv(root) {
  const groups = new Map();
  $$(".rv", root || document).forEach(el => {
    const p = el.parentElement, n = groups.get(p) || 0;
    groups.set(p, n + 1);
    el.style.setProperty("--d", Math.min(n, 8) * 55 + "ms");
    io.observe(el);
  });
}

/* ── surprise ── */
function surprise() {
  closeSearch();
  const pick = ORDER[Math.floor(Math.random() * ORDER.length)];
  if (("#/entry/" + pick) === location.hash) route();
  else location.hash = "#/entry/" + pick;
}
$("#surpriseBtn").addEventListener("click", surprise);

/* ── search: full-text + filters + keyboard ── */
let filter = "all", focused = -1, lastResults = [];

const INDEX = [
  ...ENTRIES.map(e => ({ type: "entry", slug: e.slug, title: e.title, sub: e.read + " MIN · " + e.tradition.toUpperCase(), keys: (e.title + " " + e.tradition + " " + e.hook + " " + e.keys).toLowerCase(), to: "#/entry/" + e.slug })),
  ...SOON.map(s => ({ type: "soon", slug: s.slug, title: s.title, sub: "BEING WRITTEN · " + s.era.toUpperCase(), keys: (s.title + " " + s.hook + " " + s.keys).toLowerCase(), to: "#/soon/" + s.slug })),
  ...THINKERS.map(t => ({ type: "thinker", slug: t.slug, title: t.name, sub: "THINKER · " + t.school.toUpperCase(), keys: (t.name + " " + t.school + " " + t.line).toLowerCase(), to: "#/thinker/" + t.slug })),
  ...EXPERIMENTS.map(x => ({ type: "experiment", slug: x.slug, title: x.title, sub: "PUZZLE · " + x.by.toUpperCase(), keys: (x.title + " " + x.setup).toLowerCase(), to: "#/experiment/" + x.slug })),
  ...TRADITIONS.map(t => ({ type: "tradition", slug: t.slug, title: t.name, sub: "SCHOOL", keys: (t.name + " " + t.line).toLowerCase(), to: "#/tradition/" + t.slug })),
  ...SERIES.map(s => ({ type: "series", slug: s.slug, title: s.title, sub: s.meta, keys: (s.title + " series").toLowerCase(), to: "#/series/" + s.slug }))
];
const SYN = { freedeom: "free will", will: "free will", sarter: "sartre", rawles: "rawls", quala: "qualia", mary: "qualia", veil: "rawls", time: "a-theory", evil: "skeptical", god: "skeptical", justice: "rawls" };

function norm(q) {
  let s = q.trim().toLowerCase();
  for (const k in SYN) if (s.includes(k)) s += " " + SYN[k];
  return s;
}
function search(q) {
  const n = norm(q);
  let pool = INDEX.filter(r => filter === "all" || r.type === filter || (filter === "entry" && r.type === "soon"));
  if (!n) return pool.slice(0, 8);
  const words = n.split(/\s+/);
  return pool
    .map(r => ({ r, score: words.reduce((a, w) => a + (r.keys.includes(w) ? (r.title.toLowerCase().includes(w) ? 3 : 1) : 0), 0) }))
    .filter(x => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(x => x.r)
    .slice(0, 9);
}
function renderSearch() {
  const q = searchInput.value;
  const res = search(q);
  lastResults = res; focused = res.length ? 0 : -1;
  searchResults.innerHTML = "";
  if (!res.length) {
    const d = document.createElement("div");
    d.className = "empty";
    d.innerHTML = `<b>NOTHING FOUND</b>Try “freedom”, “red”, or “fairness” — or jump straight in:`;
    const sg = document.createElement("div");
    sg.className = "sugg";
    ["sartre-bad-faith", "qualia", "veil-of-ignorance"].forEach(s => {
      const e = entryBySlug[s];
      const b = document.createElement("button");
      b.type = "button"; b.className = "mini-btn"; b.textContent = e.title;
      b.onclick = () => { closeSearch(); location.hash = entryLink(e); };
      sg.appendChild(b);
    });
    d.appendChild(sg);
    searchResults.appendChild(d);
    return;
  }
  res.forEach((r, i) => {
    const b = document.createElement("button");
    b.type = "button"; b.className = "sr" + (i === focused ? " focused" : "");
    b.setAttribute("role", "option");
    b.innerHTML = `<span class="k ${r.type}">${r.type.toUpperCase().slice(0, 6)}</span><span><span class="t">${r.title.toUpperCase()}</span><small>${r.sub}</small></span>`;
    b.addEventListener("click", () => { closeSearch(); location.hash = r.to; });
    searchResults.appendChild(b);
  });
}
function openSearch() {
  if (!searchPop.hidden) return;
  searchPop.hidden = false;
  searchBtn.setAttribute("aria-expanded", "true");
  searchInput.value = "";
  renderSearch();
  requestAnimationFrame(() => searchInput.focus());
}
function closeSearch() {
  if (searchPop.hidden) return;
  searchPop.hidden = true;
  searchBtn.setAttribute("aria-expanded", "false");
}
searchBtn.addEventListener("click", ev => { ev.stopPropagation(); searchPop.hidden ? openSearch() : closeSearch(); });
searchInput.addEventListener("input", renderSearch);
searchPop.addEventListener("click", ev => ev.stopPropagation());
document.addEventListener("click", () => { if (!searchPop.hidden) closeSearch(); });
$$(".chips.filters button").forEach(b => b.addEventListener("click", () => {
  $$(".chips.filters button").forEach(x => x.classList.remove("on"));
  b.classList.add("on"); filter = b.dataset.f; renderSearch(); searchInput.focus();
}));
searchInput.addEventListener("keydown", ev => {
  if (ev.key === "ArrowDown" || ev.key === "j") { /* handled globally */ }
  if (ev.key === "Enter" && lastResults[Math.max(0, focused)]) {
    ev.preventDefault();
    const r = lastResults[Math.max(0, focused)];
    closeSearch(); location.hash = r.to;
  }
});

/* ── global keyboard: / ⌘K · J/K · Enter · R ── */
document.addEventListener("keydown", ev => {
  const t = ev.target;
  const typing = t instanceof HTMLElement && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable);
  if (ev.key === "Escape") {
    if (!searchPop.hidden) { ev.preventDefault(); closeSearch(); searchBtn.focus(); return; }
    if (!glossTip.hidden) { glossTip.hidden = true; return; }
  }
  if ((ev.key === "/" || (ev.key.toLowerCase() === "k" && (ev.metaKey || ev.ctrlKey))) && !typing) {
    ev.preventDefault(); openSearch(); return;
  }
  if (!searchPop.hidden && !typing) {
    if (ev.key.toLowerCase() === "j" || ev.key === "ArrowDown") {
      ev.preventDefault(); focused = Math.min(lastResults.length - 1, focused + 1); paintFocus(); return;
    }
    if (ev.key.toLowerCase() === "k" || ev.key === "ArrowUp") {
      ev.preventDefault(); focused = Math.max(0, focused - 1); paintFocus(); return;
    }
    if (ev.key === "Enter" && lastResults[focused]) {
      ev.preventDefault(); const r = lastResults[focused]; closeSearch(); location.hash = r.to; return;
    }
  }
  if ((ev.key.toLowerCase() === "r") && !typing && searchPop.hidden) { ev.preventDefault(); surprise(); }
});
function paintFocus() {
  $$(".sr", searchResults).forEach((b, i) => b.classList.toggle("focused", i === focused));
  const el = $$(".sr", searchResults)[focused];
  if (el) el.scrollIntoView({ block: "nearest" });
}

/* ── glossary popover ── */
document.addEventListener("click", ev => {
  const g = ev.target.closest ? ev.target.closest(".g") : null;
  if (g) {
    ev.stopPropagation();
    const term = g.dataset.term;
    const def = GLOSS[term];
    if (!def) return;
    glossTip.innerHTML = `<b>${term.toUpperCase()}</b>${def}`;
    glossTip.hidden = false;
    const r = g.getBoundingClientRect();
    glossTip.style.left = Math.min(window.innerWidth - 320, Math.max(12, r.left - 40)) + "px";
    glossTip.style.top = Math.min(window.innerHeight - 140, r.bottom + 10) + "px";
    return;
  }
  if (!ev.target.closest || !ev.target.closest("#glossTip")) glossTip.hidden = true;
});

/* ── boot ── */
renderExplore();
fitStage();
route();
updateProgress();
watchRv(document);
updateGrow();
window.setTimeout(() => { if (!panel.classList.contains("is-grown")) grip.classList.add("nag"); }, 1800);

/* privacy-light: no cookies, no trackers. Local notes + recents only. */

})();
