function openUrlInBrowser(url) {
    NSWorkspace.sharedWorkspace().openURL(NSURL.URLWithString(url));
}

function checkProps(layer, base, valid) {
    for(i = 0; i < base.size.length; i++) {
        if(layer.size == base.size[i]) {
            valid.size = true;
            if(layer.lineHeight == base.line[i]) {
                valid.line = true;
            }
            break;
        }
    }
    for(i = 0; i < base.family.length; i++) {
        if(layer.font == base.family[i]) {
            valid.font = true;
            break;
        }
    }
}

function checkPage(sketch, nativeLayers) {
    nativeLayers.forEach(nativelayer => {
        var layer = sketch.fromNative(nativelayer);
        if(layer.type == "Text") {
            var layerArtboard = "No Artboard";
            if(layer.getParentArtboard()) {
                var layerArtboard = layer.getParentArtboard().name;
            }
            var layerStyle = {
                page: layer.getParentPage().name,
                artboard: layerArtboard,
                name: layer.name,
                text: layer.text,
                font: layer.style.fontFamily,
                size: layer.style.fontSize,
                kerning: layer.style.kerning,
                lineHeight: layer.style.lineHeight
            };

            var valid = {
                size: false,
                line: false,
                font: false,
                kerning: false
            };
            checkProps(layerStyle, font, valid);
            writePage(valid, layerStyle);
        }
    });
}

function checkAll(document, sketch) {

    document.pages.forEach(page => {
        const nativeLayers = page.sketchObject.children();
        checkPage(sketch, nativeLayers);
    });
}

function writePage(valid, layerStyle) {
    if(!valid.size || !valid.line || !valid.font) {
        buildPage += "<tr><td>" + layerStyle.page + "</td><td>" + layerStyle.artboard + "</td><td>" + layerStyle.text + "</td>";
        if(!valid.font) {
            buildPage += "<td class=\"error\">" + layerStyle.font + "</td>";
        } else {
            buildPage += "<td>" + layerStyle.font + "</td>";
        }
        if(!valid.size) {
            buildPage += "<td class=\"error\">" + layerStyle.size + "</td>";
        } else {
            buildPage += "<td>" + layerStyle.size + "</td>";
        }
        if(!valid.line) {
            buildPage += "<td class=\"error\">" + layerStyle.lineHeight + "</td>";
        } else {
            buildPage += "<td>" + layerStyle.lineHeight + "</td>";
        }
        buildPage += "</tr>";
    }
}