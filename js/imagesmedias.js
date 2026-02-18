'use strict';

(function () {

    // ── object-fit explorer ───────────────────────────────────────
    var select  = document.getElementById('im-fit-select');
    var img     = document.getElementById('im-fit-img');
    var codeEl  = document.querySelector('#im-fit-code code');

    if (select && img && codeEl) {
        select.addEventListener('change', function () {
            var value = select.value;
            img.style.objectFit = value;
            codeEl.textContent =
                'img {\n' +
                '  width: 100%;\n' +
                '  height: 200px;\n' +
                '  object-fit: ' + value + ';\n' +
                '}';
        });
    }

}());
