/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} [arr=[]] arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  const locales = ['ru', 'en'];
  if (param === 'asc') {
    return [...arr].sort((a, b) => a.localeCompare(b, locales, {caseFirst: 'upper'}));
  }
  else if (param === 'desc') {
    return [...arr].slice().sort((a, b) => b.localeCompare(a, locales, {caseFirst: 'upper'}));
  }
}

