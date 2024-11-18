// ==UserScript==
// @name         Dogabah Refresh!
// @description  Dogabah's ruffle-rs is too old!
// @author       yanorei32
// @supportURL   https://github.com/yanorei32/dogabah-refresh/issues
// @namespace    https://yr32.net/
// @website      https://github.com/yanorei32/dogabah-refresh
// @updateURL    https://github.com/yanorei32/dogabah-refresh/raw/master/dogabah-refresh.user.js
// @downloadURL  https://github.com/yanorei32/dogabah-refresh/raw/master/dogabah-refresh.user.js
// @include      https://dagobah.net/flash/*
// @version      0.1.1
// @icon         https://www.google.com/s2/favicons?sz=64&domain=dagobah.net
// @grant        none
// @license      BSD-2-Clause
// @run-at       document-end
// ==/UserScript==

(function() {
    const PROTECT_SIGNATURE = 'PROTECT!';

    const e = document.createElement('script');
    e.src = 'https://cdn.jsdelivr.net/npm/@ruffle-rs/ruffle/ruffle.min.js';
    e.id = PROTECT_SIGNATURE;

    document.body.appendChild(e);

    function cleanup() {
        document.querySelectorAll('script')
            .filter(e => e.id != PROTECT_SIGNATURE)
            .forEach(e => e.remove());
    }

    cleanup();
    document.addEventListener('DOMContentLoaded', cleanup);
    document.addEventListener('load', cleanup);
})();
