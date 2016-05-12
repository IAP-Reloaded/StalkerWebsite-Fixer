// ==UserScript==
// @name         Stalker Website Fixer
// @namespace    simpcraft.com
// @version      0.1
// @description  beautifies Stalker app website
// @author       @IAP-Reloaded / @Usernamer
// @match        http://www.bigpaua.com/stalker/
// @grant        none
// ==/UserScript==

var css = document.createElement("style");
css.type = "text/css";
css.innerHTML = "body { font-family: -apple-system, Helvetica Neue, Arial; }";
document.body.appendChild(css);
var css = document.createElement("style");
css.type = "text/css";
css.innerHTML = "* { background-color: green; }";
document.body.appendChild(css);
