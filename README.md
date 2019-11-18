# Validate text layers

## This is the first version of a plugin to help validate Sketch designs against a design system.

Currently the plugin has hard-coded font family, font size, and line height properties to test. Future release will have an option to import text styles from a file for validation.

This plugin can be great to enable teams to check sketch file consistency and enable agencies that may be working with you to double their sketch files.

### How to use

1. Download or clone the contents, and copy/install DS-Textvalidator.sketchplugin to your Sketch plugins folder
2. From your plugins menu select "⛑Styleguide Validator"
3. Choose if you want to validate Web or Mobile font styles. Below is a table of the font styles this plugin currently compares to.
![alt text](https://github.com/JarOfCookies/Sketch-Design-systems-validator/blob/master/screenshots/web-mobile.png "web or mobile")

4. A popup should appear asking if you want to validate the full document or the page currently selected

![alt text](https://github.com/JarOfCookies/Sketch-Design-systems-validator/blob/master/screenshots/page-document-selection.png "Page or Document")

*Note: Validating the entire document may take a few minutes depending on the size. Your sketch application may lockup until it's completed.*

5. A report will generate and open in your web browser showing you the results, red columns meaning there was an error found with this property.

![alt text](https://github.com/JarOfCookies/Sketch-Design-systems-validator/blob/master/screenshots/report.png "Report")

6. If your font size is invalid, the line height will automatically become highlighted as invalid.
7. If the layer style passes 100%, the layer will not appear in the page. If nothing appears in the report, all your layers pass 💯

## Font and Sizing requirements

#### Font sizes

| Web Font Size | Web Line Height | Mobile Font Size | Mobile Line Height |
|---------------|-----------------|------------------|--------------------|
| 56 | 72 | 24 | 33 |
| 48 | 56 | 16 | 22 |
| 32 | 48 | 14 | 20 |
| 24 | 40 | 12 | 18 |
| 16 | 24 | | |
| 14 | 24 | | |
| 12 | 16 | | |

#### Font Family
| Web Font | Mobile Font |
|----------|-------------|
| Open Sans, Noto Sans TC, Noto Sans SC | Roboto, SF Sans Pro |

## Creators Note

I am not the most proficient in JS, and the Sketch APIs are not the most understandable in the world. If you know of a better algorithm do let me know ✌️
