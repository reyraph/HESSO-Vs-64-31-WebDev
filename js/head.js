'use strict';

(function () {

    // ── Tab title live preview ────────────────────────────────────
    var titleInput = document.getElementById('hd-title-input');
    var tabTitle   = document.getElementById('hd-tab-title');
    var titleCount = document.getElementById('hd-title-count');

    if (titleInput && tabTitle) {
        titleInput.addEventListener('input', function () {
            var val = titleInput.value;
            tabTitle.textContent = val || 'Untitled';
            if (titleCount) {
                var remaining = 60 - val.length;
                titleCount.textContent = remaining + ' character' + (remaining !== 1 ? 's' : '') + ' remaining';
                titleCount.style.color = remaining < 10
                    ? 'var(--color-error)'
                    : 'var(--color-text-muted)';
            }
        });
    }

    // ── Open Graph card live preview ─────────────────────────────
    var ogTitle    = document.getElementById('hd-og-title');
    var ogDesc     = document.getElementById('hd-og-desc');
    var ogSite     = document.getElementById('hd-og-site');
    var ogTitlePv  = document.getElementById('hd-og-title-preview');
    var ogDescPv   = document.getElementById('hd-og-desc-preview');
    var ogSitePv   = document.getElementById('hd-og-site-preview');

    function updateOGPreview() {
        if (ogTitle  && ogTitlePv)  { ogTitlePv.textContent  = ogTitle.value  || 'Page Title'; }
        if (ogDesc   && ogDescPv)   { ogDescPv.textContent   = ogDesc.value   || 'Description'; }
        if (ogSite   && ogSitePv)   { ogSitePv.textContent   = (ogSite.value  || 'Site Name').toUpperCase(); }
    }

    if (ogTitle)  { ogTitle.addEventListener('input',  updateOGPreview); }
    if (ogDesc)   { ogDesc.addEventListener('input',   updateOGPreview); }
    if (ogSite)   { ogSite.addEventListener('input',   updateOGPreview); }

}());
