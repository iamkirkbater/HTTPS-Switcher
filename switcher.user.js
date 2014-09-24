// ==UserScript==
// @name		HTTPS<>HTTP Quickswitch
// @namespace	kirkland
// @version		0.1.1
// @include		*://*rit.edu*
// @description	Using a pre-defined hotkey, quickly switch from HTTPS to HTTP or vice versa.
// ==/UserScript==

var map = [];
onkeydown = onkeyup = function(e){
    e = e || event; // to deal with IE
    map[e.keyCode] = e.type == 'keydown';

    if((map[17] || map[91]) && map[16] && map[83]) { // (CTRL or CMD)+SHIFT+S
        switchIt();
    }

    // This code taken from Stack Overflow:
    // Author: B1KMusic
    // Question: http://stackoverflow.com/questions/5203407/javascript-multiple-keys-pressed-at-once
    // Changes have been made
    // License: CC by-sa 3.0
};

function switchIt()
{
    var targetURL = new String();

    targetURL = window.location.href;

    if (targetURL.indexOf("https") >= 0)
    {
        targetURL = targetURL.replace(/https:\/\//, "http://");
    } else {
        targetURL = targetURL.replace(/http:\/\//, "https://");
    }
    window.location.href = targetURL;
}

