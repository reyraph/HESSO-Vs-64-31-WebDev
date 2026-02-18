/* ============================================================
   NAV.JS — Dropdown navigation behaviour (all pages)
   ============================================================ */
(function () {
    'use strict';

    /* ── Helpers ─────────────────────────────────────────────── */

    function openDropdown(toggle, dropdown) {
        toggle.setAttribute('aria-expanded', 'true');
        dropdown.classList.add('main-nav__dropdown--open');
    }

    function closeDropdown(toggle, dropdown) {
        toggle.setAttribute('aria-expanded', 'false');
        dropdown.classList.remove('main-nav__dropdown--open');
    }

    /* ── Highlight the link matching the current page ─────────── */

    function markActivePage() {
        var current = window.location.pathname.split('/').pop() || 'index.html';

        document.querySelectorAll('.main-nav__dropdown-link').forEach(function (link) {
            if (link.getAttribute('href') === current) {
                link.classList.add('main-nav__dropdown-link--active');
            }
        });

        var homeLink = document.querySelector('.main-nav__link');
        if (homeLink && (current === '' || current === 'index.html')) {
            homeLink.style.fontWeight = '700';
        }
    }

    /* ── Init ─────────────────────────────────────────────────── */

    function init() {
        var toggles = document.querySelectorAll('.main-nav__toggle');

        toggles.forEach(function (toggle) {
            var dropdown = toggle.nextElementSibling;
            if (!dropdown) { return; }

            toggle.addEventListener('click', function (e) {
                e.stopPropagation();
                var isOpen = toggle.getAttribute('aria-expanded') === 'true';

                /* Close all other dropdowns first */
                toggles.forEach(function (t) {
                    if (t !== toggle) { closeDropdown(t, t.nextElementSibling); }
                });

                if (isOpen) {
                    closeDropdown(toggle, dropdown);
                } else {
                    openDropdown(toggle, dropdown);
                }
            });
        });

        /* Close on outside click */
        document.addEventListener('click', function () {
            toggles.forEach(function (toggle) {
                closeDropdown(toggle, toggle.nextElementSibling);
            });
        });

        /* Close on Escape */
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') {
                toggles.forEach(function (toggle) {
                    closeDropdown(toggle, toggle.nextElementSibling);
                });
            }
        });

        markActivePage();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
}());
