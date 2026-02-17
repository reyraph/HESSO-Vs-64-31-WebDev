/* ============================================================
   BOX MODEL – Interactive box model sliders
   Used by: boxmodel.html (Section 2 – Playground)
   ============================================================ */

(function () {

    /* ── Slider references ───────────────────────── */
    var w   = document.getElementById('bm-width');
    var h   = document.getElementById('bm-height');
    var pt  = document.getElementById('bm-pt');
    var pr  = document.getElementById('bm-pr');
    var pb  = document.getElementById('bm-pb');
    var pl  = document.getElementById('bm-pl');
    var bw  = document.getElementById('bm-bw');
    var mt  = document.getElementById('bm-mt');
    var mr  = document.getElementById('bm-mr');
    var mb  = document.getElementById('bm-mb');
    var ml  = document.getElementById('bm-ml');
    var bb  = document.getElementById('bm-border-box');

    /* ── Output references ───────────────────────── */
    var wVal  = document.getElementById('bm-width-val');
    var hVal  = document.getElementById('bm-height-val');
    var ptVal = document.getElementById('bm-pt-val');
    var prVal = document.getElementById('bm-pr-val');
    var pbVal = document.getElementById('bm-pb-val');
    var plVal = document.getElementById('bm-pl-val');
    var bwVal = document.getElementById('bm-bw-val');
    var mtVal = document.getElementById('bm-mt-val');
    var mrVal = document.getElementById('bm-mr-val');
    var mbVal = document.getElementById('bm-mb-val');
    var mlVal = document.getElementById('bm-ml-val');

    /* ── Target elements ─────────────────────────── */
    var target      = document.getElementById('bm-target');
    var marginZone  = document.getElementById('bm-margin-zone');
    var readout     = document.getElementById('bm-readout');
    var codeOutput  = document.getElementById('bm-code-output');
    var contentLabel = document.getElementById('bm-content-label');

    /* ── All sliders in one array for event binding ── */
    var sliders = [w, h, pt, pr, pb, pl, bw, mt, mr, mb, ml];

    /* ── Main update function ────────────────────── */
    function update() {
        /* Read values as numbers */
        var vw  = Number(w.value);
        var vh  = Number(h.value);
        var vpt = Number(pt.value);
        var vpr = Number(pr.value);
        var vpb = Number(pb.value);
        var vpl = Number(pl.value);
        var vbw = Number(bw.value);
        var vmt = Number(mt.value);
        var vmr = Number(mr.value);
        var vmb = Number(mb.value);
        var vml = Number(ml.value);
        var isBorderBox = bb.checked;

        /* Update output labels */
        wVal.textContent  = vw  + ' px';
        hVal.textContent  = vh  + ' px';
        ptVal.textContent = vpt + ' px';
        prVal.textContent = vpr + ' px';
        pbVal.textContent = vpb + ' px';
        plVal.textContent = vpl + ' px';
        bwVal.textContent = vbw + ' px';
        mtVal.textContent = vmt + ' px';
        mrVal.textContent = vmr + ' px';
        mbVal.textContent = vmb + ' px';
        mlVal.textContent = vml + ' px';

        /* Apply styles to the target div */
        var boxSizing = isBorderBox ? 'border-box' : 'content-box';
        target.style.boxSizing    = boxSizing;
        target.style.width        = vw  + 'px';
        target.style.height       = vh  + 'px';
        target.style.paddingTop   = vpt + 'px';
        target.style.paddingRight = vpr + 'px';
        target.style.paddingBottom = vpb + 'px';
        target.style.paddingLeft  = vpl + 'px';
        target.style.borderWidth  = vbw + 'px';

        /* Apply margin to the margin-zone wrapper (so the orange shows) */
        marginZone.style.paddingTop    = vmt + 'px';
        marginZone.style.paddingRight  = vmr + 'px';
        marginZone.style.paddingBottom = vmb + 'px';
        marginZone.style.paddingLeft   = vml + 'px';

        /* Compute total rendered size */
        var totalW, totalH;
        if (isBorderBox) {
            /* border-box: declared width includes padding + border */
            totalW = vw;
            totalH = vh;
        } else {
            /* content-box: padding + border are added outside */
            totalW = vw + vpl + vpr + (vbw * 2);
            totalH = vh + vpt + vpb + (vbw * 2);
        }

        /* Compute content area for display */
        var contentW, contentH;
        if (isBorderBox) {
            contentW = Math.max(0, vw - vpl - vpr - (vbw * 2));
            contentH = Math.max(0, vh - vpt - vpb - (vbw * 2));
        } else {
            contentW = vw;
            contentH = vh;
        }

        contentLabel.textContent = contentW + ' x ' + contentH;

        /* Readout */
        readout.textContent =
            'box-sizing: ' + boxSizing +
            '  |  CSS width/height: ' + vw + ' x ' + vh + ' px' +
            '  |  Rendered (border-edge): ' + totalW + ' x ' + totalH + ' px' +
            '  |  Content area: ' + contentW + ' x ' + contentH + ' px';

        /* Live CSS code */
        codeOutput.textContent =
            '.my-element {\n' +
            '    box-sizing: ' + boxSizing + ';\n' +
            '    width: '  + vw  + 'px;\n' +
            '    height: ' + vh  + 'px;\n' +
            '    padding: ' + vpt + 'px ' + vpr + 'px ' + vpb + 'px ' + vpl + 'px;\n' +
            '    border: '  + vbw + 'px solid #333;\n' +
            '    margin: '  + vmt + 'px ' + vmr + 'px ' + vmb + 'px ' + vml + 'px;\n' +
            '}\n' +
            '/* Rendered size (border-edge): ' + totalW + ' x ' + totalH + ' px */\n' +
            '/* Content area: ' + contentW + ' x ' + contentH + ' px */';
    }

    /* ── Event binding ───────────────────────────── */
    sliders.forEach(function (slider) {
        slider.addEventListener('input', update);
    });
    bb.addEventListener('change', update);

    /* ── Initial render ──────────────────────────── */
    update();

})();


/* ============================================================
   CSS POSITION EXPLORER
   Used by: boxmodel.html (Section 3 – Position Explorer)
   ============================================================ */

(function () {

    /* ── References ──────────────────────────────── */
    var posType    = document.getElementById('pos-type');
    var topSlider  = document.getElementById('pos-top');
    var rightSlider = document.getElementById('pos-right');
    var bottomSlider = document.getElementById('pos-bottom');
    var leftSlider  = document.getElementById('pos-left');
    var topVal     = document.getElementById('pos-top-val');
    var rightVal   = document.getElementById('pos-right-val');
    var bottomVal  = document.getElementById('pos-bottom-val');
    var leftVal    = document.getElementById('pos-left-val');
    var target     = document.getElementById('pos-target');
    var container  = document.getElementById('pos-container');
    var originInfo = document.getElementById('pos-origin-info');
    var originMark = document.getElementById('pos-origin-marker');
    var codeOutput = document.getElementById('pos-code-output');
    var noteEl     = document.getElementById('pos-note');
    var filler     = document.getElementById('pos-scroll-filler');

    var sliders = [topSlider, rightSlider, bottomSlider, leftSlider];
    var outputs = [topVal, rightVal, bottomVal, leftVal];

    /* ── Origin messages per position value ──────── */
    var origins = {
        'static':   'Offsets are ignored with position: static.',
        'relative': 'Origin: element\'s own normal position in the document flow.',
        'absolute': 'Origin: the grey container (nearest positioned ancestor with position: relative).',
        'fixed':    'Origin: the browser viewport (element leaves the flow entirely).',
        'sticky':   'Sticks when reaching the offset threshold during scroll inside the container.'
    };

    /* ── Main update function ────────────────────── */
    function updatePosition() {
        var type = posType.value;
        var vt = Number(topSlider.value);
        var vr = Number(rightSlider.value);
        var vb = Number(bottomSlider.value);
        var vl = Number(leftSlider.value);

        /* Update output labels */
        topVal.textContent    = vt + ' px';
        rightVal.textContent  = vr + ' px';
        bottomVal.textContent = vb + ' px';
        leftVal.textContent   = vl + ' px';

        /* Update origin info */
        originInfo.textContent = origins[type] || '';

        /* ── Slider enable/disable logic ─────────── */
        var allDisabled = (type === 'static');
        var stickyMode  = (type === 'sticky');

        sliders.forEach(function (s, i) {
            /* For sticky: only top is useful */
            if (stickyMode) {
                s.disabled = (i !== 0); /* index 0 = top */
            } else {
                s.disabled = allDisabled;
            }
        });

        /* ── Apply position to target ────────────── */
        /* For fixed: use absolute as visual approximation inside container */
        var appliedType = (type === 'fixed') ? 'absolute' : type;
        target.style.position = appliedType;

        if (type === 'static') {
            target.style.top    = 'auto';
            target.style.right  = 'auto';
            target.style.bottom = 'auto';
            target.style.left   = 'auto';
        } else if (type === 'sticky') {
            target.style.top    = vt + 'px';
            target.style.right  = 'auto';
            target.style.bottom = 'auto';
            target.style.left   = 'auto';
        } else {
            target.style.top    = vt + 'px';
            target.style.right  = vr + 'px';
            target.style.bottom = vb + 'px';
            target.style.left   = vl + 'px';
        }

        /* ── Origin marker visibility ────────────── */
        var showMarker = (type === 'absolute' || type === 'fixed');
        originMark.style.display = showMarker ? 'block' : 'none';

        /* ── Scroll filler for sticky demo ───────── */
        if (type === 'sticky') {
            container.style.overflow = 'auto';
            container.style.maxHeight = '350px';
            filler.style.display = 'block';
        } else {
            container.style.overflow = 'visible';
            container.style.maxHeight = 'none';
            filler.style.display = 'none';
        }

        /* ── Note for fixed ──────────────────────── */
        if (type === 'fixed') {
            noteEl.textContent = 'Note: In a real page, position: fixed positions the element relative to the viewport. Here we approximate it with absolute inside the container for demo purposes.';
            noteEl.style.display = 'block';
        } else if (type === 'sticky') {
            noteEl.textContent = 'Tip: Scroll inside the grey container above to see the Target stick at the top offset.';
            noteEl.style.display = 'block';
        } else {
            noteEl.style.display = 'none';
        }

        /* ── Live CSS code ───────────────────────── */
        var code = '.target {\n    position: ' + type + ';';
        if (type !== 'static') {
            if (type === 'sticky') {
                code += '\n    top: ' + vt + 'px;';
            } else {
                code += '\n    top: '    + vt + 'px;';
                code += '\n    right: '  + vr + 'px;';
                code += '\n    bottom: ' + vb + 'px;';
                code += '\n    left: '   + vl + 'px;';
            }
        }
        code += '\n}';

        if (type === 'absolute' || type === 'fixed') {
            code += '\n\n/* The positioned ancestor needs: */\n.container {\n    position: relative;\n}';
        }

        codeOutput.textContent = code;
    }

    /* ── Event binding ───────────────────────────── */
    posType.addEventListener('change', updatePosition);
    sliders.forEach(function (s) {
        s.addEventListener('input', updatePosition);
    });

    /* ── Initial render ──────────────────────────── */
    updatePosition();

})();
