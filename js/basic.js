'use strict';

(function () {

    // ── Semantic diagram: hover zones to reveal description ──────
    var zones   = document.querySelectorAll('.bsc-zone[data-tag]');
    var tooltip = document.getElementById('bsc-tooltip');

    if (!zones.length || !tooltip) { return; }

    zones.forEach(function (zone) {
        zone.addEventListener('mouseenter', function () {
            var tag  = zone.dataset.tag;
            var desc = zone.dataset.desc;
            tooltip.textContent = '<' + tag + '> — ' + desc;
            tooltip.classList.add('is-visible');
        });

        zone.addEventListener('mouseleave', function () {
            tooltip.classList.remove('is-visible');
        });

        /* Keyboard accessibility: show tooltip on focus too */
        zone.setAttribute('tabindex', '0');
        zone.addEventListener('focus', function () {
            var tag  = zone.dataset.tag;
            var desc = zone.dataset.desc;
            tooltip.textContent = '<' + tag + '> — ' + desc;
            tooltip.classList.add('is-visible');
        });

        zone.addEventListener('blur', function () {
            tooltip.classList.remove('is-visible');
        });
    });

}());
