// ==UserScript==
// @name         Kakomondojo
// @namespace    http://tampermonkey.net/
// @version      2024-01-19
// @description  try to take over the world!
// @author       Eisei
// @match        https://www.ap-siken.com/apkakomon.php
// @icon         https://www.ap-siken.com/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    document.addEventListener("keypress",keypress_ivent);function keypress_ivent(a){"Enter"===a.code&&configform.submit();"Space"===a.code&&configform.submit();"Digit1"===a.code&&document.querySelector("#mainCol > div.main.kako.doujou > div.ansbg > ul > li:nth-child(1) > button").click();"Digit2"===a.code&&document.querySelector("#mainCol > div.main.kako.doujou > div.ansbg > ul > li:nth-child(2) > button").click();"Digit3"===a.code&&document.querySelector("#mainCol > div.main.kako.doujou > div.ansbg > ul > li:nth-child(3) > button").click();"Digit4"===a.code&&document.querySelector("#mainCol > div.main.kako.doujou > div.ansbg > ul > li:nth-child(4) > button").click();return!1};
})();
