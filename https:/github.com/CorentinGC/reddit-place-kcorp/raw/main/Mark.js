ines (22 sloc)  1 KB
   
// ==UserScript==
// @name         Reddit Place - Armée de Kameto
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Ne Mutlu Turkum Diyene.
// @grant        none
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
            document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
        (function () {
            const i = document.createElement("img");
            i.src = "https://raw.githubusercontent.com/YavasR01/Turkey/main/overlay%20(1).png";
            i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 2000px;";
            console.log(i);
            return i;
        })())
 
    }, false);
 
}
