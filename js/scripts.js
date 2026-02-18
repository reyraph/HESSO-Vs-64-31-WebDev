'use strict';

(function () {

    // ── Inline script demo ────────────────────────────────────────
    var inlineBtn    = document.getElementById('scr-inline-btn');
    var inlineOutput = document.getElementById('scr-inline-output');

    if (inlineBtn && inlineOutput) {
        inlineBtn.addEventListener('click', function () {
            inlineOutput.textContent = 'Script ran at ' + new Date().toLocaleTimeString();
        });
    }

    // ── Module scope demo ─────────────────────────────────────────
    var scopeBtn    = document.getElementById('scr-scope-btn');
    var scopeOutput = document.getElementById('scr-scope-output');

    if (scopeBtn && scopeOutput) {
        scopeBtn.addEventListener('click', function () {
            var lines = [];
            lines.push('window.exposed = "' + (typeof window.exposed !== 'undefined' ? window.exposed : 'undefined') + '"');
            lines.push('window.moduleVar = "' + (typeof window.moduleVar !== 'undefined' ? window.moduleVar : 'undefined (module-scoped)') + '"');
            scopeOutput.textContent = lines.join('\n');
        });
    }

    // ── Timeline animation ────────────────────────────────────────
    var playBtn   = document.getElementById('scr-play-btn');
    var resetBtn  = document.getElementById('scr-reset-btn');
    var allBars   = document.querySelectorAll('.scr-tl-bar');

    /* Total timeline width corresponds to 110 units (data-start + data-dur max) */
    var TOTAL_UNITS = 110;
    /* Animation duration in milliseconds */
    var ANIM_DURATION = 3000;

    function resetTimeline() {
        allBars.forEach(function (bar) {
            bar.style.transition = 'none';
            bar.style.left  = '0';
            bar.style.width = '0';
            bar.style.opacity = '0';
        });
    }

    function playTimeline() {
        allBars.forEach(function (bar) {
            var start = parseFloat(bar.dataset.start || 0);
            var dur   = parseFloat(bar.dataset.dur   || 0);

            var leftPct  = (start / TOTAL_UNITS * 100).toFixed(2) + '%';
            var widthPct = (dur   / TOTAL_UNITS * 100).toFixed(2) + '%';

            /* Delay proportional to start position */
            var delayMs    = (start / TOTAL_UNITS * ANIM_DURATION).toFixed(0);
            var durationMs = (dur   / TOTAL_UNITS * ANIM_DURATION).toFixed(0);

            bar.style.left    = leftPct;
            bar.style.opacity = '1';
            bar.style.width   = '0';

            /* Small timeout so the browser registers the reset before animating */
            setTimeout(function () {
                bar.style.transition = 'width ' + durationMs + 'ms linear ' + delayMs + 'ms';
                bar.style.width = widthPct;
            }, 50);
        });
    }

    if (playBtn) {
        playBtn.addEventListener('click', function () {
            resetTimeline();
            /* Allow the reset to render before starting the animation */
            requestAnimationFrame(function () {
                requestAnimationFrame(playTimeline);
            });
        });
    }

    if (resetBtn) {
        resetBtn.addEventListener('click', resetTimeline);
    }

    /* Initialise bars to their natural positions (no animation) */
    allBars.forEach(function (bar) {
        var start = parseFloat(bar.dataset.start || 0);
        var dur   = parseFloat(bar.dataset.dur   || 0);
        bar.style.left    = (start / TOTAL_UNITS * 100).toFixed(2) + '%';
        bar.style.width   = (dur   / TOTAL_UNITS * 100).toFixed(2) + '%';
        bar.style.opacity = '1';
    });

}());
