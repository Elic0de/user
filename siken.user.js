// ==UserScript==
// @name         Kakomondojo
// @namespace    http://tampermonkey.net/
// @version      2024-01-19
// @description  try to take over the world!
// @author       Ei
// @match        https://www.ap-siken.com/apkakomon.php
// @match        https://www.fe-siken.com/fekakomon.php
// @icon         https://www.ap-siken.com/favicon.ico
// @updateURL    https://raw.githubusercontent.com/Elic0de/user/main/shiken.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.querySelectorAll("button[class=selectBtn]").forEach((array) => {
    array.addEventListener("click", () => {
      if (array?.id === "") {
        new Audio('https://soundeffect-lab.info/sound/anime/mp3/incorrect1.mp3').play();
        return;
      }
      new Audio('https://soundeffect-lab.info/sound/anime/mp3/correct2.mp3').play();
    });
  });
    // Your code here...
    document.addEventListener("keypress",keypress_ivent);function keypress_ivent(a){"Enter"===a.code&&configform.submit();"Space"===a.code&&configform.submit();"Digit1"===a.code&&document.querySelector("#mainCol > div.main.kako.doujou > div.ansbg > ul > li:nth-child(1) > button").click();"Digit2"===a.code&&document.querySelector("#mainCol > div.main.kako.doujou > div.ansbg > ul > li:nth-child(2) > button").click();"Digit3"===a.code&&document.querySelector("#mainCol > div.main.kako.doujou > div.ansbg > ul > li:nth-child(3) > button").click();"Digit4"===a.code&&document.querySelector("#mainCol > div.main.kako.doujou > div.ansbg > ul > li:nth-child(4) > button").click();return!1};
})();
