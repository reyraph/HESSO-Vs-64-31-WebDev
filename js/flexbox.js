/* ============================================================
   FLEXBOX – Interactive crop sliders
   Used by: flexbox.html (Demo 7 – Image Cropping)
   ============================================================ */

(function () {
    /* -- Slider references -- */
    var widthSlider  = document.getElementById('crop-width-slider');
    var heightSlider = document.getElementById('crop-height-slider');
    var widthOutput  = document.getElementById('crop-width-value');
    var heightOutput = document.getElementById('crop-height-value');

    /* -- All target images -- */
    var images = document.querySelectorAll('.crop-img');

    /* -- Update helper -- */
    function applySize() {
        var w = widthSlider.value + '%';
        var h = heightSlider.value + '%';

        widthOutput.textContent  = widthSlider.value + ' %';
        heightOutput.textContent = heightSlider.value + ' %';

        images.forEach(function (img) {
            img.style.width  = w;
            img.style.height = h;
        });
    }

    /* -- Event listeners -- */
    widthSlider.addEventListener('input', applySize);
    heightSlider.addEventListener('input', applySize);
})();
