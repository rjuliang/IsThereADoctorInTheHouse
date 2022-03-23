//import LANGUAGE_STRINGS from "./languageStrings";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const applicationLanguage = urlParams.get('ln');



document.getElementById('lnTitle').textContent = LANGUAGE_STRINGS.mainTitle[applicationLanguage]

