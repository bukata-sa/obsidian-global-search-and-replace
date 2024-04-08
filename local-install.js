const fs = require('fs');

let target = "/Users/abukata/Library/Mobile Documents/iCloud~md~obsidian/Documents/Dive/.obsidian/plugins/search-kit";
fs.rmSync(target, { recursive: true, force: true });
fs.mkdir(target, (err) => {
    if (err) throw err;
});
["main.js", "manifest.json", "styles.css"].forEach(function (el) {
    fs.copyFile(el, "/Users/abukata/Library/Mobile Documents/iCloud~md~obsidian/Documents/Dive/.obsidian/plugins/search-kit/"+el, (err) => {
        if (err) throw err;
        console.log(el+' was copied to destination');
    });
});