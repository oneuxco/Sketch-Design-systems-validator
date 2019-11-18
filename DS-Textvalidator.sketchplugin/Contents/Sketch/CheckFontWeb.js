@import 'pageBuilder.js';
@import 'global.js';

const font = {
    size:    [56, 48, 40, 32, 24, 16, 14, 12],
    line:    [72, 56, 48, 40, 32, 24, 24, 16],
    kerning: [-1, -1, -1, ,-.75, -.5, -.5, -.25, 0],
    family: ["Open Sans", "Noto Sans TC", "Noto Sans SC", "Source Sans Pro"]
}

var onRun = function(context) {
    //reference the Sketch Document
    const sketch = require('sketch');
    const document = sketch.getSelectedDocument();
    const filepath = NSTemporaryDirectory() + "validator.html";
    const file = NSURL.fileURLWithPath(filepath);

    sketch.UI.getInputFromUser("What would you like to check?", {
        type: sketch.UI.INPUT_TYPE.selection,
        possibleValues: ['Entire document', 'Current page']
      }, (err, value) => {
        if (err) {
          // most likely the user canceled the input
          return;
        } else {
            if(value == "Entire document") {
                checkAll(document, sketch);
            } else { 
                const nativeLayers = document.selectedPage.sketchObject.children();
                checkPage(sketch, nativeLayers);
            }
            var htmlContent = NSString.stringWithString_(buildPage);
            htmlContent.dataUsingEncoding_(NSUTF8StringEncoding).writeToFile_atomically_(filepath, true);
            NSWorkspace.sharedWorkspace().openFile(file.path());
        }
      });
};