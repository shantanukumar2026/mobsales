const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const colorMap = {
  '#0B203F': '#0004ad',
  '#111827': '#0004ad',
  '#124A91': '#004aad',
  '#004B87': '#004aad',
  '#094896': '#0004ad',
  '#3973A4': '#0085f4',
  '#6B7280': '#0085f4',
  '#4B5563': '#0085f4',
  '#9CA3AF': '#0085f4',
  '#F2C500': '#00bbff',
  '#F4C400': '#00bbff',
  '#D4A700': '#0085f4',
  '#F28C28': '#00bbff',
  '#000000': '#0004ad',
  'rgba(244, 196, 0': 'rgba(0, 187, 255'
};

walkDir('./src', function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.css')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    
    // Case-insensitive replace
    for (const [oldColor, newColor] of Object.entries(colorMap)) {
      const regex = new RegExp(oldColor.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
      content = content.replace(regex, newColor);
    }
    
    if (content !== original) {
      fs.writeFileSync(filePath, content);
      console.log('Updated', filePath);
    }
  }
});
console.log('Color replacement complete!');
