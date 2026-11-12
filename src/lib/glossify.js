/* Wrap known glossary terms in a toggle button (server-side equivalent of glossify()). */
export function gTerm(word) {
  return `<button class="g" type="button" data-term="${word.toLowerCase()}">${word}</button>`;
}
export function glossify(html) {
  return String(html)
    .replace(/bad faith/gi, m => gTerm(m))
    .replace(/veil of ignorance/gi, m => gTerm(m))
    .replace(/qualia/gi, m => gTerm(m))
    .replace(/determinism/g, m => gTerm(m))
    .replace(/eternalism/g, m => gTerm(m))
    .replace(/skeptical theism/gi, m => gTerm(m))
    .replace(/\babsurd\b/g, m => gTerm(m))
    .replace(/\ba priori\b/g, m => gTerm(m));
}
