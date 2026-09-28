const fs = require('fs');
const path = require('path');

const map = {
  '#000000': '#0004AD',
  '#000': '#0004AD',
  '#111': '#0004AD',
  '#333': '#0004AD',
  '#444': '#004AAD',
  '#555': '#004AAD',
  '#666': '#0085F4',
  '#888': '#0085F4',
  '#AAA': '#00BBFF',
  
  // Convert dark/navy backgrounds to vibrant blues
  '#041226': '#004AAD',
  '#050A12': '#004AAD',
  '#092244': '#0085F4',
  '#0A2E5C': '#004AAD',
  '#0B2A55': '#0085F4',
  
  // Slate / Grays
  '#1E293B': '#0004AD',
  '#1E3A8A': '#004AAD',
  '#334155': '#004AAD',
  '#5F6368': '#004AAD',
  '#64748B': '#0085F4',
  '#8892B0': '#0085F4',
  
  // Other Blues
  '#0A66C2': '#004AAD',
  '#0056FF': '#004AAD',
  '#1877F2': '#0085F4',
  '#1A08BEDA': '#00BBFF', // transparent blue to bright cyan
  '#1A4A8F': '#004AAD',
  '#1A6FB0': '#0085F4',
  '#1DA1F2': '#00BBFF',
  
  // Greens/Reds
  '#10B981': '#00BBFF',
  '#137333': '#004AAD',
  '#4ADE80': '#00BBFF',
  '#D32F2F': '#0004AD',

  '#93C5FD': '#00BBFF',
  '#94A3B8': '#00BBFF'
};

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    if (fs.statSync(dirPath).isDirectory()) walkDir(dirPath, callback);
    else callback(dirPath);
  });
}

walkDir('./src', function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.css') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    
    // Replace hex colors ignoring case
    for (const [oldC, newC] of Object.entries(map)) {
      const regex = new RegExp(oldC, 'gi');
      content = content.replace(regex, newC);
    }
    
    if (content !== original) {
      fs.writeFileSync(filePath, content);
      console.log('Updated', filePath);
    }
  }
});
