const fs = require('fs-extra');
fs.move('dist/letstalkenglish-2.0/browser', 'dist/letstalkenglish-2.0', (err) => { if (err) { console.error(err); } });