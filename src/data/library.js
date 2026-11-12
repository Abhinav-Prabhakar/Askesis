/* Askēsis library content — single source of truth. */
export const ENTRIES = [
  {
    slug: "sartre-bad-faith", num: 1, title: "Sartre's Bad Faith",
    tradition: "Existentialism", era: "Modern", read: 2,
    hero: { bg: "pink", k: "EXISTENTIALISM · MODERN", big: "You are free — even when you pretend not to be.", sub: "The waiter, the date, the delay. Three scenes of self-deception." },
    hook: "You always have a choice — bad faith is pretending you don't.",
    breath: "Sartre says we lie to ourselves to dodge our freedom. The waiter plays at being a waiter; the woman on a date pretends she can't see what's happening. In each case the person knows, and doesn't know, at the same time.",
    tension: ["Freedom is absolute, yet life feels constrained. We have jobs, pasts, other people's expectations. Sartre's tension: you are shaped by all of this, and still the next move is yours. Bad faith is the trick of treating yourself as an object — a role, a victim, a thing with no choice — so the weight lifts for a moment."],
    positions: [
      { who: "S", name: "Sartre", tag: "FREEDOM IS TOTAL", text: "Consciousness is never identical with itself, so self-deception is always possible — and always your responsibility." },
      { who: "B", name: "Beauvoir", tag: "FREEDOM IS SHARED", text: "Bad faith is social too. Oppression trains people to see themselves as objects; freedom must be taken back together." },
      { who: "C", name: "Critics", tag: "ONE MIND CAN'T HIDE", text: "Can one mind really deceive itself? The paradox of self-deception pushes some toward unconscious motives instead." }
    ],
    argument: {
      p1: "If you are conscious, you stand apart from every role and fact about yourself — you can always imagine otherwise.",
      p2: "To treat yourself as fixed by a role ('I had no choice, I'm just the waiter') denies what consciousness is.",
      c: "Therefore bad faith — denying your own freedom to yourself — is the fundamental self-deception."
    },
    objection: "The strongest objection is the paradox itself: the deceiver and the deceived are the same person, so someone must know the truth all along. Sartre answers that consciousness is slippery — it can hold the truth and look away at once.",
    quote: { text: "Man is condemned to be free.", by: "Jean-Paul Sartre · Being and Nothingness, 1943" },
    reply: "Slippery isn't broken — consciousness can hold the truth and look away at once. The paradox describes the mechanism; it doesn't refute it.",
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
      { who: "H", name: "Hard determinists", tag: "IT WAS ALWAYS FIXED", text: "Every choice has sufficient prior causes. Freedom is an illusion — but punishment still works as a cause." },
      { who: "C", name: "Compatibilists", tag: "YOURS IF UNFORCED", text: "Freedom is acting on your own desires without coercion, even in a determined world. Hume, Frankfurt, Dennett." },
      { who: "K", name: "Libertarians", tag: "THE FUTURE IS OPEN", text: "Some events — including choices — are genuinely undetermined. Agent-causation starts new chains." }
    ],
    argument: {
      p1: "A free act is one you control — one where you, not a chip, a drug, or a gun, are the source.",
      p2: "Control needs your reasons to make the difference, not a break in physics.",
      c: "Therefore responsibility survives even if determinism is true. (The compatibilist case.)"
    },
    objection: "The consequence argument: if the past and the laws fix everything, your reasons were fixed too — so 'your' control is borrowed. Compatibilists answer with Frankfurt cases, where no alternative exists yet the act is still yours.",
    quote: { text: "Man can do what he wills but he cannot will what he wills.", by: "Arthur Schopenhauer · On the Freedom of the Will, 1839" },
    reply: "Frankfurt cases: the chip stands ready but never fires, and the act is still yours. Control doesn't need open alternatives — it needs your reasons doing the work.",
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
      { who: "J", name: "Jackson / Nagel", tag: "RED EXCEEDS PHYSICS", text: "Qualia are real and irreducible. No objective description captures what red looks like from the inside." },
      { who: "D", name: "Dennett", tag: "NOTHING EXTRA THERE", text: "Qualia are a bad intuition. There is no extra 'redness' beyond discriminations and reactions." },
      { who: "C", name: "Chalmers", tag: "THE GAP IS REAL", text: "Consciousness is the hard problem. Even a complete brain map leaves 'why feeling?' unanswered." }
    ],
    argument: {
      p1: "Mary knows every physical fact about colour while inside the room.",
      p2: "On leaving, she learns something new: what red looks like.",
      c: "Therefore not all facts are physical facts. Qualia exist."
    },
    objection: "The ability reply: Mary gains no new facts, only a new ability — to recognise, imagine, remember red. Knowledge-how, not knowledge-that. Jackson himself later accepted a version of this.",
    quote: { text: "What is it like to be a bat?", by: "Thomas Nagel · 1974" },
    reply: "Abilities come apart from facts: Mary could already track every wavelength, yet seeing red teaches her what it is like — and that was exactly the disputed fact.",
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
      { who: "R", name: "Rawls", tag: "INSURE THE WORST-OFF", text: "Justice as fairness: equal liberties first, inequalities allowed only if they help the least advantaged." },
      { who: "N", name: "Nozick", tag: "HISTORY MATTERS", text: "The veil ignores history. If holdings were justly acquired, taxation for redistribution is forced labour." },
      { who: "S", name: "Sen", tag: "COMPARE REAL LIVES", text: "Don't idealise institutions — compare real lives. Capabilities, not primary goods, are what matter." }
    ],
    argument: {
      p1: "A fair agreement is one no one could reasonably reject from an impartial position.",
      p2: "The veil of ignorance is the impartial position: it removes bargaining advantages.",
      c: "Therefore principles chosen behind the veil — liberty plus the difference principle — are just."
    },
    objection: "Harsanyi's objection: rational agents behind the veil would maximise average welfare, not protect the worst-off — they'd gamble. Rawls replies that justice isn't a gamble when your whole life is the stake.",
    quote: { text: "Justice is the first virtue of social institutions.", by: "John Rawls · A Theory of Justice, 1971" },
    reply: "The parties aren't gambling with chips but choosing a whole life with no exit. Maximin isn't timidity here — it is refusing to stake your life on odds.",
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
      { who: "R", name: "Rowe", tag: "HORROR NEEDS REASON", text: "Pointless evil exists — the fawn, the child. A good God would stop it. So no such God exists." },
      { who: "W", name: "Wykstra", tag: "BEYOND OUR KEN", text: "CORNEA: we should expect God's reasons to be beyond our ken, the way a parent's reasons escape a toddler." },
      { who: "D", name: "Draper", tag: "NATURE EXPECTS THIS", text: "Pain and pleasure look exactly as we'd expect with no God — and surprising with one. Biology, not theodicy." }
    ],
    argument: {
      p1: "If God had a justifying reason for horrific evil, we have no reason to expect we would grasp it.",
      p2: "We cannot grasp any such reason for cases like the burning fawn.",
      c: "Therefore our inability to see a reason is not evidence there is none. (The skeptical-theist block.)"
    },
    objection: "Skepticism spreads: if our moral vision is that dim, we lose ordinary moral knowledge too — and theism itself. This is the Pandora's box objection, and skeptical theists spend most effort containing it.",
    quote: { text: "My ways are not your ways.", by: "Isaiah 55:8 · often cited in the debate" },
    reply: "Cornea cuts both ways: if our ken is that small, the nose for gratuitousness is equally uncalibrated. The block stands.",
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
      { who: "P", name: "Presentists", tag: "ONLY NOW EXISTS", text: "Only the present exists. The past was, the future will be — 'was' and 'will be' do all the work." },
      { who: "G", name: "Growing block", tag: "REALITY KEEPS GROWING", text: "Past and present exist; the future doesn't yet. Reality grows as the now advances." },
      { who: "E", name: "Eternalists", tag: "ALL TIMES ARE REAL", text: "All times are equally real. Passage is perspectival, like 'here' — real to you, not to the world." }
    ],
    argument: {
      p1: "We experience genuine passage: events become present, then recede.",
      p2: "The best explanation of a universal, vivid experience is that it is veridical.",
      c: "Therefore tensed facts are real. The A-theory is true."
    },
    objection: "Relativity's relativity of simultaneity: there is no single cosmic now. Presentists reply with a privileged foliation, or retreat to a tensed metaphysics without a global present — at a cost.",
    quote: { text: "Time is what keeps everything from happening at once.", by: "Ray Cummings, 1921 · quoted by physicists ever since" },
    reply: "Relativity kills a cosmic now, not a tensed one. Passage survives without a privileged global slice — physics constrains its shape, not its fact.",
    related: ["free-will", "qualia", "skeptical-theism"],
    keys: "a-theory b-theory time presentism eternalism growing block passage mctaggart now relativity",
    cite: { apa: "Prior, A. N. (1967). Past, present and future. Oxford: Clarendon.", mla: "Prior, A. N. Past, Present and Future. Clarendon, 1967.", bib: "@book{prior1967past,\n  author = {Prior, A. N.},\n  title = {Past, Present and Future},\n  year = {1967}\n}" }
  },
  {
    slug: "descartes-cogito", num: 7, title: "Descartes' Cogito",
    tradition: "Mind", era: "Modern", read: 3,
    hero: { bg: "pink", k: "MODERN PHILOSOPHY · FIRST CERTAINTY", big: "Doubt everything. One thing survives: the doubter.", sub: "The furnace of methodic doubt — and the one sentence that won't burn." },
    hook: "I think, therefore I am — the one sentence that survives doubt.",
    breath: "Descartes burns down every belief that can burn: senses deceive, dreams deceive, perhaps a demon deceives. One thing resists the fire — that doubting is happening. From that spark he rebuilds God, the world, and you.",
    tension: ["Certainty seems impossible — every source of belief can mislead. Yet here is one thing that cannot be false while it is thought. The tension: the cogito is bedrock, but bedrock an inch wide. Everything Descartes builds on it must cross back over the very doubt it escaped."],
    positions: [
      { who: "D", name: "Descartes", tag: "DOUBT PROVES THE I", text: "The cogito is the Archimedean point: indubitable even under the demon's spell, and the foundation for God and science." },
      { who: "H", name: "Hume", tag: "NO SELF INSIDE", text: "Look inside and you find no self — only a bundle of perceptions succeeding one another. The 'I' is a fiction of memory." },
      { who: "W", name: "Wittgenstein", tag: "GRAMMAR MISLEADS", text: "'I' does not name an inner object the way 'table' names one. The grammar of the first person misleads metaphysics." }
    ],
    argument: {
      p1: "I can doubt everything I seem to perceive — my hands, the sky, mathematics itself.",
      p2: "But doubting is thinking, and thinking must be happening for doubt to happen.",
      c: "Therefore I exist — at least as a thinking thing — whenever I doubt."
    },
    objection: "Lichtenberg's thinness objection: the argument proves that thinking is going on, not a lasting I. The cogito gives a momentary subject — a spark, not a soul — and Descartes smuggles in far more than the spark contains.",
    quote: { text: "I think, therefore I am.", by: "René Descartes · Meditations on First Philosophy, 1641" },
    reply: "Thin is enough: the cogito never promised a soul, only a starting point. An inch of bedrock still beats the swamp.",
    related: ["qualia", "sartre-bad-faith", "skeptical-theism"],
    keys: "descartes cogito meditations doubt evil demon dualism modern i think therefore i am first philosophy certainty self",
    cite: { apa: "Descartes, R. (1641). Meditations on first philosophy. Paris: Michel Soly.", mla: "Descartes, René. Meditations on First Philosophy. 1641.", bib: "@book{descartes1641meditations,\n  author = {Descartes, Ren{\\'e}},\n  title = {Meditations on First Philosophy},\n  year = {1641}\n}" }
  },
  {
    slug: "stoic-dichotomy", num: 8, title: "The Stoic Dichotomy",
    tradition: "Stoicism", era: "Ancient", read: 2,
    hero: { bg: "purple", k: "ANCIENT STOICISM · THE HANDBOOK", big: "Some things are up to us. Everything else isn't.", sub: "Epictetus's sorting task — the whole school in one cut." },
    hook: "Control what you can. Release the rest.",
    breath: "Epictetus opens the Handbook with a line: some things are up to us — opinion, impulse, desire — and everything else is not. The Dichotomy is a sorting task for a whole life: put each trouble in the right pile, then act only where your hands reach.",
    tension: ["The cut looks clean until you test it: health, reputation, other people — all partly up to us. The trichotomy critics say the world is mostly half-measures. The tension: a philosophy of total sorting must survive a world of partial control."],
    positions: [
      { who: "E", name: "Epictetus", tag: "SORT, THEN RELEASE", text: "Up to us: opinion, impulse, desire, aversion. Not up to us: body, property, reputation, office. Want only your own pile to change, and nothing can block you." },
      { who: "T", name: "The trichotomy", tag: "CONTROL IS A DIAL", text: "Most things are partly up to us — health, skill, friendship. Control is a dial, not a switch, and the Handbook's two piles need a middle shelf." },
      { who: "M", name: "Modern Stoics", tag: "USE BEATS PROOF", text: "Irvine, Holiday, the therapists: the Dichotomy works as practice — circle of control, premeditation, evening review. The use matters more than the metaphysics." }
    ],
    argument: {
      p1: "Distress comes from demanding that externals obey our will.",
      p2: "Externals are not up to us; only our judgments are.",
      c: "Therefore freedom from distress is sorting correctly — and willing only the pile that is yours."
    },
    objection: "The pile problem: grief, illness and injustice arrive uninvited and unassorted. Telling the bereaved 'that is not up to you' sounds less like wisdom than coldness — and sorting itself needs judgment, exactly what crisis impairs.",
    reply: "The Stoics never said don't grieve — they said grieve without the extra demand that the world obey. Sorting is triage, not anesthesia; even a shaky hand can sort one thing at a time.",
    quote: { text: "It's not things that upset us, but our judgments about them.", by: "Epictetus · Handbook, §5" },
    related: ["free-will", "sartre-bad-faith", "skeptical-theism"],
    keys: "stoic dichotomy epictetus control enchiridion handbook trichotomy stoicism ancient up to us",
    cite: { apa: "Epictetus. (c. 125). The handbook (Enchiridion). Nicopolis.", mla: "Epictetus. The Handbook. c. 125.", bib: "@book{epictetus125handbook,\\n  author = {Epictetus},\\n  title = {The Handbook (Enchiridion)},\\n  year = {c. 125}\\n}" }
  },
  {
    slug: "anselm-ontological", num: 9, title: "Anselm's Ontological Argument",
    tradition: "Scholasticism", era: "Medieval", read: 2,
    hero: { bg: "cream", k: "MEDIEVAL SCHOLASTICISM · FAITH SEEKING UNDERSTANDING", big: "Define the greatest thing. Watch it exist.", sub: "Anselm's armchair proof — and the island that sank it." },
    hook: "Can you define God into existence?",
    breath: "Anselm tries to prove God without leaving the armchair: define God as the greatest thing thinkable, notice that a real greatest thing beats a merely imagined one, and conclude God must be real. Gaunilo mocked it with a perfect island; Kant said existence is not a property. Nine centuries on, nobody agrees where the trick is.",
    tension: ["Reason alone seems too thin to summon a being — yet the proof looks valid, and the flaw refuses to sit still. The tension: if defining can create, thought is magic; if the proof fails, the failure should be obvious. It isn't."],
    positions: [
      { who: "A", name: "Anselm", tag: "EXISTENCE INCLUDED", text: "God is that than which nothing greater can be conceived. A greatest thing existing only in thought is less great than one existing in reality too — so God exists in reality." },
      { who: "G", name: "Gaunilo", tag: "THE ISLAND STRIKES BACK", text: "Run the same proof on the greatest island and it 'exists' too. A form that proves everything proves nothing — the argument proves too much." },
      { who: "K", name: "Kant", tag: "EXISTENCE ISN'T A FEATURE", text: "'Exists' adds no concept to a thing: a hundred real thalers contain no more coins than a hundred imagined ones. Existence is not a predicate." }
    ],
    argument: {
      p1: "God is, by definition, that than which nothing greater can be conceived.",
      p2: "A greatest conceivable being existing only in thought is less great than one existing in reality as well.",
      c: "Therefore God exists in reality — denying it contradicts the very definition."
    },
    objection: "Gaunilo's island plus Kant's predicate point: the proof smuggles existence into a definition, then 'discovers' it inside. Concepts don't come with reality attached — and if they did, every superlative would exist.",
    reply: "Anselm's heirs narrow the claim from islands to necessary being. Plantinga's modal version: if maximal greatness is even possible, it holds in every possible world — including this one.",
    quote: { text: "God is that than which nothing greater can be thought.", by: "Anselm · Proslogion, 1078" },
    related: ["skeptical-theism", "descartes-cogito", "a-theory-of-time"],
    keys: "anselm ontological argument god proslogion gaunilo island existence predicate kant plantinga necessary being medieval scholasticism faith",
    cite: { apa: "Anselm. (1078). Proslogion. Bec.", mla: "Anselm. Proslogion. 1078.", bib: "@book{anselm1078proslogion,\\n  author = {Anselm},\\n  title = {Proslogion},\\n  year = {1078}\\n}" }
  },
  {
    slug: "kant-categorical", num: 10, title: "Kant's Categorical Imperative",
    tradition: "Deontology", era: "Modern", read: 3,
    hero: { bg: "pink", k: "MODERN DEONTOLOGY · THE MORAL LAW", big: "Act only as everyone could act.", sub: "Kant's universalizability test — morality without exceptions." },
    hook: "What if everyone did that?",
    breath: "Kant says morality is not about outcomes — it is about the shape of your reason. Act only on a rule you could will everyone to follow: no lying, no freeloading, no exceptions for yourself. Hegel called the test empty; modern Kantians say the humanity formula fills it. Three centuries of ethics run through this one question.",
    tension: ["Duty says never lie — not even to the murderer at the door. Common sense says: surely, this once. The tension: a moral law with exceptions is just advice, but a law without them can sound cruel. Kant bites the bullet; almost everyone else looks for a door."],
    positions: [
      { who: "K", name: "Kant", tag: "UNIVERSALIZE OR QUIT", text: "Act only on maxims you can will as universal law. A rule that breaks when everyone follows it — lying promises, free riding — was never moral." },
      { who: "H", name: "Hegel", tag: "EMPTY FORMALISM", text: "Universalizability is an empty frame: with clever wording, anything universalizes — even tyranny. The test runs on content it pretends not to need." },
      { who: "K", name: "Korsgaard", tag: "CONSTRUCTED FROM WITHIN", text: "Modern Kantians rebuild the content: as agents we must value our own humanity, and consistency forces us to value everyone's. The law is constructed, not empty." }
    ],
    argument: {
      p1: "A moral rule must bind every rational being equally — otherwise it is special pleading.",
      p2: "Only maxims that survive universalization without contradiction meet that bar.",
      c: "Therefore act only on maxims you can at the same time will as universal law."
    },
    objection: "Two charges: emptiness — Hegel's worry that consistent wording can launder any content, even evil regimes; and rigorism — Constant's murderer at the door, where never lying looks like fanaticism rather than morality.",
    reply: "The formulas work as a team: humanity as an end rules out maxims that use people as mere tools — no regime of murder passes that gate. And Kant's own casuistry permits misleading without lying; the rigor is narrower than the legend.",
    quote: { text: "Act only according to that maxim whereby you can at the same time will that it should become a universal law.", by: "Immanuel Kant · Groundwork, 1785" },
    related: ["veil-of-ignorance", "free-will", "stoic-dichotomy"],
    keys: "kant categorical imperative universalizability deontology duty maxims humanity formula groundwork murderer lying rigorism hegel korsgaard constant modern",
    cite: { apa: "Kant, I. (1785). Groundwork of the metaphysics of morals. Riga: Hartknoch.", mla: "Kant, Immanuel. Groundwork of the Metaphysics of Morals. 1785.", bib: "@book{kant1785groundwork,\\n  author = {Kant, Immanuel},\\n  title = {Groundwork of the Metaphysics of Morals},\\n  year = {1785}\\n}" }
  },
  {
    slug: "nietzsche-will", num: 11, title: "Nietzsche's Will to Power",
    tradition: "Ethics", era: "Modern", read: 3,
    hero: { bg: "purple", k: "MODERN ETHICS · MASTERS AND SLAVES", big: "Morality has a bloodline.", sub: "Nietzsche's genealogy — where values really come from." },
    hook: "Not survival — expansion. Life wants more life.",
    breath: "Nietzsche says our values are not discoveries — they are weapons. Master moralities praise strength; slave moralities rename weakness as virtue and call it good. Genealogy traces each 'thou shalt' to the mouth that spoke it. Then comes the hard part: amor fati — love it all, or lie about it.",
    tension: ["Morality feels timeless — good and evil just are. Genealogy says every value was invented by someone, for something. The tension: if values have bloodlines instead of foundations, what stops 'good' from meaning whatever the strong prefer? Nietzsche's answer: nothing — except the values you create yourself."],
    positions: [
      { who: "N", name: "Nietzsche", tag: "LIFE WANTS MORE LIFE", text: "Not preservation but expansion: the will to power drives every act, and moralities are symptoms of ascending or declining life. The rest is commentary." },
      { who: "A", name: "Anscombe", tag: "OUGHT NEEDS A LAWGIVER", text: "'Ought' made sense under divine law; modern ethics kept the word and dropped the lawgiver. Nietzsche is right about the bankruptcy — virtue is the way back." },
      { who: "B", name: "Blackburn", tag: "PROJECT, DON'T DISCOVER", text: "Values are our projections onto a neutral world — quasi-real, true enough to live by. Nietzsche's bloodlines don't kill value; they explain it." }
    ],
    argument: {
      p1: "Moral concepts like 'good' and 'evil' have traceable historical origins in power relations.",
      p2: "Their authority claims timelessness — independence from any such origin.",
      c: "Therefore the authority is borrowed: unmask the origin and the spell breaks — unless new values are created."
    },
    objection: "The genetic-fallacy charge: origins don't settle truth — astronomy came from astrology, yet the stars are real. And Nietzsche's own values (strength, creation, amor fati) arrive with the same rhetorical force he unmasks in others.",
    reply: "Genealogy doesn't refute by origin; it shifts the burden — once the pedigree is shown, the believer must produce reasons, not vibes. And Nietzsche owns the charge: his values are confessed creations, not discovered tablets.",
    quote: { text: "There are no moral phenomena at all, but only a moral interpretation of phenomena.", by: "Friedrich Nietzsche · Beyond Good and Evil, 1886" },
    related: ["sartre-bad-faith", "veil-of-ignorance", "kant-categorical"],
    keys: "nietzsche will to power genealogy morals master slave amor fati ubermensch beyond good evil anscombe blackburn quasi-realism modern",
    cite: { apa: "Nietzsche, F. (1886). Beyond good and evil. Leipzig: Naumann.", mla: "Nietzsche, Friedrich. Beyond Good and Evil. 1886.", bib: "@book{nietzsche1886beyond,\\n  author = {Nietzsche, Friedrich},\\n  title = {Beyond Good and Evil},\\n  year = {1886}\\n}" }
  },
  {
    slug: "wittgenstein-beetle", num: 12, title: "Wittgenstein's Beetle",
    tradition: "Mind", era: "Contemporary", read: 2,
    hero: { bg: "cream", k: "CONTEMPORARY MIND · PRIVATE LANGUAGE", big: "Everyone has a box. No one can compare.", sub: "Wittgenstein's beetle — the argument against inner museums." },
    hook: "A pain only you can see is not a thing you can name.",
    breath: "Wittgenstein asks you to imagine everyone carrying a box with a 'beetle' inside — but nobody can ever look in another's box. The word still works fine, because its meaning is the shared game, not the hidden object. Now apply that to pain, memory, seeing red: if meaning needs public checkability, the inner museum is empty.",
    tension: ["Pain feels private — yours and yours alone. Yet you learned the word 'pain' in public, with public criteria. The tension: either sensation-talk names inner objects no one can verify, or 'private' does not mean what we thought it meant."],
    positions: [
      { who: "W", name: "Wittgenstein", tag: "MEANING IS USE", text: "A word for something only the speaker can see has no rule for correct use — and without rules, no meaning. The beetle drops out of the game." },
      { who: "K", name: "Kripke", tag: "NO FACT FIXES THE RULE", text: "Nothing in your past — no mental fact — determines you meant plus rather than quus. Rule-following rests on community practice, not inner rails." },
      { who: "S", name: "Strawson", tag: "SOME PRIVACY IS REAL", text: "Pains and afterimages have owner-only features no public game captures. Wittgenstein shows the limits of naming, not the absence of the named." }
    ],
    argument: {
      p1: "A meaningful word needs public criteria for correct versus incorrect use.",
      p2: "Sensations offer no such criteria — only the speaker can 'check' the inner object.",
      c: "Therefore sensation-words cannot get meaning by naming inner objects; their meaning is the public practice around them."
    },
    objection: "The privacy intuition will not die: my pain's hurtfulness seems real whether or not anyone can check it. Verifiability is not meaning — and the felt fact stands exactly where it was.",
    reply: "The beetle denies no pain — it relocates it. Hurt is real; what drops out is the picture of words as labels on hidden things. Keep the pain, lose the museum.",
    quote: { text: "The thing in the box has no place in the language-game at all; not even as a something.", by: "Ludwig Wittgenstein · Philosophical Investigations, 1953" },
    related: ["qualia", "free-will", "descartes-cogito"],
    keys: "wittgenstein beetle private language investigations pain meaning use rule following kripke strawson contemporary mind",
    cite: { apa: "Wittgenstein, L. (1953). Philosophical investigations. Oxford: Blackwell.", mla: "Wittgenstein, Ludwig. Philosophical Investigations. 1953.", bib: "@book{wittgenstein1953investigations,\\n  author = {Wittgenstein, Ludwig},\\n  title = {Philosophical Investigations},\\n  year = {1953}\\n}" }
  }
];

export const THINKERS = [
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
    entries: ["kant-categorical", "veil-of-ignorance", "free-will"] },
  { slug: "nietzsche", name: "Nietzsche", years: "1844–1900", school: "Genealogy",
    line: "Values have a history — and a price.",
    entries: ["nietzsche-will", "sartre-bad-faith", "skeptical-theism"] },
  { slug: "wittgenstein", name: "Wittgenstein", years: "1889–1951", school: "Analytic",
    line: "Meaning is use — the beetle drops out.",
    entries: ["wittgenstein-beetle", "descartes-cogito"] },
  { slug: "epictetus", name: "Epictetus", years: "c. 50–135", school: "Stoicism",
    line: "Some things are up to us — the rest is weather.",
    entries: ["stoic-dichotomy"] },
  { slug: "anselm", name: "Anselm", years: "1033–1109", school: "Scholasticism",
    line: "Faith seeking understanding — even for God's existence.",
    entries: ["anselm-ontological"] }
];

export const TRADITIONS = [
  { slug: "existentialism", name: "Existentialism", color: "p",
    line: "Existence before essence. You arrive without a script — then you must write one.",
    entries: ["sartre-bad-faith", "nietzsche-will", "free-will"] },
  { slug: "stoicism", name: "Stoicism", color: "",
    line: "Control what you can: judgments, impulses, assent. Release the rest.",
    entries: ["stoic-dichotomy", "free-will", "skeptical-theism"] },
  { slug: "skepticism", name: "Skepticism", color: "",
    line: "Suspend judgment. Ask what our limits hide before claiming what is.",
    entries: ["skeptical-theism", "qualia"] },
  { slug: "scholasticism", name: "Scholasticism", color: "",
    line: "Faith seeking understanding. Define carefully, then see what follows.",
    entries: ["anselm-ontological", "skeptical-theism", "descartes-cogito"] },
  { slug: "absurdism", name: "Absurdism", color: "u",
    line: "We crave meaning; the world offers none. Live the tension.",
    entries: ["sartre-bad-faith", "a-theory-of-time"] },
  { slug: "deontology", name: "Deontology", color: "p",
    line: "Duty before outcomes. Act only as everyone could act.",
    entries: ["kant-categorical", "veil-of-ignorance"] }
];

export const EXPERIMENTS = [
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

export const SERIES = [
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
export const SOON = [
];

export const ERAS = [
  { name: "ANCIENT", span: "c. 700 BC – 500" },
  { name: "MEDIEVAL", span: "c. 500 – 1400" },
  { name: "MODERN", span: "c. 1400 – 1900" },
  { name: "CONTEMPORARY", span: "c. 1900 – NOW" }
];

/* One inline figure per entry: diagram first, caption second. */
export const FIGCAP = {
  "sartre-bad-faith": "The loop: deceiver and deceived are one mind.",
  "free-will": "Frankfurt's test: the blocked road was never taken — yet the drive was yours.",
  "qualia": "Mary's room: every physical fact, none of the redness.",
  "veil-of-ignorance": "Choose blind: which rules insure every seat at the table?",
  "stoic-dichotomy": "The cut: your pile, the world's pile — sort everything.",
  "anselm-ontological": "The move: think the greatest thing — now add existence.",
  "kant-categorical": "The test: one liar works — a world of liars breaks.",
  "nietzsche-will": "The bloodline: master tablets, slave tablets — whose values?",
  "wittgenstein-beetle": "The boxes: same word, different contents — or none.",
  "descartes-cogito": "The furnace: everything doubtable burns away — one point will not.",
  "skeptical-theism": "The fawn: pointless to us — but how far can we see?",
  "a-theory-of-time": "Flow versus block: the now moves, or only seems to."
};

export const GLOSS = {
  "qualia": "The felt quality of experience — what red looks like, what pain feels like, from the inside.",
  "a priori": "Known without looking: true by reason alone, like 2 + 2 = 4.",
  "bad faith": "Sartre's self-deception: treating yourself as an object with no choice, to dodge freedom.",
  "veil of ignorance": "Rawls's blindfold: choose society's rules without knowing your place in it.",
  "determinism": "Every event has sufficient prior causes. Given the past and the laws, only one future is possible.",
  "eternalism": "All times — past, present, future — are equally real, like pages in a book.",
  "skeptical theism": "We shouldn't expect to grasp God's reasons, so unseen reasons may still exist.",
  "absurd": "Camus's clash: our hunger for meaning meets a silent world."
};

export const DAILY = [
  { q: "Are you lying to yourself right now?", to: "#/entry/sartre-bad-faith" },
  { q: "Could you have done otherwise today?", to: "#/entry/free-will" },
  { q: "What is red like — in words?", to: "#/entry/qualia" },
  { q: "What rules would you pick blindfolded?", to: "#/entry/veil-of-ignorance" },
  { q: "Does pointless evil disprove God?", to: "#/entry/skeptical-theism" },
  { q: "Is the future already there?", to: "#/entry/a-theory-of-time" },
  { q: "Would you plug into perfect happiness?", to: "#/experiment/experience-machine" },
  { q: "What survives total doubt?", to: "#/entry/descartes-cogito" },
  { q: "Can you define God into existence?", to: "#/entry/anselm-ontological" },
  { q: "What if everyone did that?", to: "#/entry/kant-categorical" },
  { q: "Do your values have a bloodline?", to: "#/entry/nietzsche-will" },
  { q: "Could your beetle differ from mine?", to: "#/entry/wittgenstein-beetle" }
];

export const FEATURED = [
  { text: "\u201CMan is condemned to be free.\u201D", sub: "Sartre · Bad Faith — read in 2 min →", to: "#/entry/sartre-bad-faith" },
  { text: "\u201CWhat is it like to be a bat?\u201D", sub: "Nagel · Qualia — read in 2 min →", to: "#/entry/qualia" },
  { text: "\u201CJustice is the first virtue of institutions.\u201D", sub: "Rawls · Veil — read in 3 min →", to: "#/entry/veil-of-ignorance" },
  { text: "\u201COne must imagine Sisyphus happy.\u201D", sub: "Camus · Absurdism — start here →", to: "#/start-here" }
];

export const ORDER = ENTRIES.map(e => e.slug);
export const entryBySlug = Object.fromEntries(ENTRIES.map(e => [e.slug, e]));
export const thinkerBySlug = Object.fromEntries(THINKERS.map(t => [t.slug, t]));
export const traditionBySlug = Object.fromEntries(TRADITIONS.map(t => [t.slug, t]));
export const experimentBySlug = Object.fromEntries(EXPERIMENTS.map(x => [x.slug, x]));
export const seriesBySlug = Object.fromEntries(SERIES.map(s => [s.slug, s]));
export const soonBySlug = Object.fromEntries(SOON.map(s => [s.slug, s]));

export function tradSlug(name) {
  const t = TRADITIONS.find(t => t.name.toLowerCase() === String(name).toLowerCase());
  return t ? t.slug : null;
}

/* Search index — also serialized to the page for the client. */
export function buildSearchIndex() {
  return [
    ...ENTRIES.map(e => ({ type: "entry", slug: e.slug, title: e.title, sub: e.read + " MIN · " + e.tradition.toUpperCase(), keys: (e.title + " " + e.tradition + " " + e.hook + " " + e.keys).toLowerCase(), to: "/entry/" + e.slug + "/" })),
    ...SOON.map(s => ({ type: "soon", slug: s.slug, title: s.title, sub: "BEING WRITTEN · " + s.era.toUpperCase(), keys: (s.title + " " + s.hook + " " + s.keys).toLowerCase(), to: "/soon/" + s.slug + "/" })),
    ...THINKERS.map(t => ({ type: "thinker", slug: t.slug, title: t.name, sub: "THINKER · " + t.school.toUpperCase(), keys: (t.name + " " + t.school + " " + t.line).toLowerCase(), to: "/thinker/" + t.slug + "/" })),
    ...EXPERIMENTS.map(x => ({ type: "experiment", slug: x.slug, title: x.title, sub: "PUZZLE · " + x.by.toUpperCase(), keys: (x.title + " " + x.setup).toLowerCase(), to: "/experiment/" + x.slug + "/" })),
    ...TRADITIONS.map(t => ({ type: "tradition", slug: t.slug, title: t.name, sub: "SCHOOL", keys: (t.name + " " + t.line).toLowerCase(), to: "/tradition/" + t.slug + "/" })),
    ...SERIES.map(s => ({ type: "series", slug: s.slug, title: s.title, sub: s.meta, keys: (s.title + " series").toLowerCase(), to: "/series/" + s.slug + "/" }))
  ];
}

/* A–Z shelf index, built from the same search index. */
export function azMap() {
  const map = {};
  for (const r of buildSearchIndex()) {
    const L = (r.title.trim()[0] || "").toUpperCase();
    if (!/[A-Z]/.test(L)) continue;
    (map[L] = map[L] || []).push(r);
  }
  return map;
}
