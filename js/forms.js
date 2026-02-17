/* ============================================================
   FORMS – Live updates for range, color, calculator
   Used by: forms.html
   ============================================================ */

(function () {

    /* ── Range slider ────────────────────────────── */
    var range = document.getElementById('fm-range');
    var rangeVal = document.getElementById('fm-range-val');
    range.addEventListener('input', function () {
        rangeVal.textContent = range.value;
    });

    /* ── Color picker ────────────────────────────── */
    var color = document.getElementById('fm-color');
    var colorPreview = document.getElementById('fm-color-preview');
    color.addEventListener('input', function () {
        colorPreview.textContent = color.value;
        colorPreview.style.backgroundColor = color.value;
        /* Adjust text color for readability */
        var r = parseInt(color.value.slice(1, 3), 16);
        var g = parseInt(color.value.slice(3, 5), 16);
        var b = parseInt(color.value.slice(5, 7), 16);
        var brightness = (r * 299 + g * 587 + b * 114) / 1000;
        colorPreview.style.color = brightness > 128 ? '#333' : '#fff';
    });

    /* ── Calculator (output demo) ────────────────── */
    var calcA = document.getElementById('fm-calc-a');
    var calcB = document.getElementById('fm-calc-b');
    var calcResult = document.getElementById('fm-calc-result');
    function updateCalc() {
        calcResult.textContent = Number(calcA.value) + Number(calcB.value);
    }
    calcA.addEventListener('input', updateCalc);
    calcB.addEventListener('input', updateCalc);

})();
