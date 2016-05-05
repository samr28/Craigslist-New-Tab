// ==UserScript==
// @name       Craigslist links new tab
// @version    0.0.2
// @description  Open all item links on craigslist in a new tab
// @match      *.craigslist.org/search/*
// @copyright  2016, Sam Roquitte, All rights reserved.
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

$(document).ready(function() {
    $(".content a").attr("target","_blank");
});