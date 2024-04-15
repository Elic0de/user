// ==UserScript==
// @name         Kakomondojo
// @namespace    http://tampermonkey.net/
// @version      2024-04-15
// @description  try to take over the world!
// @author       Ei
// @match        https://www.ap-siken.com/apkakomon.php
// @match        https://www.fe-siken.com/fekakomon.php
// @icon         https://www.ap-siken.com/favicon.ico
// @updateURL    https://raw.githubusercontent.com/Elic0de/user/main/shiken.user.js
// @grant        none
// ==/UserScript==

'use strict';(function(){document.querySelectorAll("button[class=selectBtn]").forEach(a=>{a.addEventListener("click",()=>{""===a?.id?(new Audio("https://soundeffect-lab.info/sound/anime/mp3/incorrect1.mp3")).play():(new Audio("https://soundeffect-lab.info/sound/anime/mp3/correct2.mp3")).play()})});document.addEventListener("keypress",function(a){"Enter"===a.code&&configform.submit();"Space"===a.code&&configform.submit();"Digit1"===a.code&&document.querySelector("#mainCol > div.main.kako.doujou > div.ansbg > ul > li:nth-child(1) > button").click();
"Digit2"===a.code&&document.querySelector("#mainCol > div.main.kako.doujou > div.ansbg > ul > li:nth-child(2) > button").click();"Digit3"===a.code&&document.querySelector("#mainCol > div.main.kako.doujou > div.ansbg > ul > li:nth-child(3) > button").click();"Digit4"===a.code&&document.querySelector("#mainCol > div.main.kako.doujou > div.ansbg > ul > li:nth-child(4) > button").click();return!1})})();
