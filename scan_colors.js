const fs = require('fs');
const path = require('path');

const allowedColors = [
    '#0004AD', '#004AAD', '#0085F4', '#00BBFF', '#1E3BA1',
    '#FFFFFF', '#F8FAFC', '#F0F6FC'
];

// Normalize a hex color (convert to uppercase, handle 3-digit hex if needed)
function normalizeHex(hex) {
    let normalized = hex.toUpperCase();
    if (normalized.length === 4) { // #abc -> #aabbcc
        normalized = '#' + normalized[1] + normalized[1] + normalized[2] + normalized[2] + normalized[3] + normalized[3];
    }
    return normalized;
}

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else if (file.endsWith('.tsx') || file.endsWith('.css') || file.endsWith('.ts')) {
            results.push(file);
        }
    });
    return results;
}

const files = walk('g:/bens sir team/mobsales/src');
let invalidFound = false;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Find hex colors
    const hexRegex = /#[0-9a-fA-F]{3,6}\b/g;
    let match;
    let lineNum = 1;
    let lastIndex = 0;
    
    while ((match = hexRegex.exec(content)) !== null) {
        // Calculate line number
        const sub = content.substring(lastIndex, match.index);
        lineNum += (sub.match(/\n/g) || []).length;
        lastIndex = match.index;
        
        const hex = normalizeHex(match[0]);
        if (!allowedColors.includes(hex)) {
            console.log(`Invalid Hex in ${file}:${lineNum}: ${match[0]}`);
            invalidFound = true;
        }
    }
    
    // Reset for RGB/RGBA
    const rgbRegex = /rgba?\([^)]+\)/g;
    lastIndex = 0;
    lineNum = 1;
    
    while ((match = rgbRegex.exec(content)) !== null) {
        const sub = content.substring(lastIndex, match.index);
        lineNum += (sub.match(/\n/g) || []).length;
        lastIndex = match.index;
        
        // Simple heuristic: if it's not rgba(0, 4, 173... etc from our allowed ones
        // Allowed approximate RGBA:
        // #0004AD -> 0, 4, 173
        // #004AAD -> 0, 74, 173
        // #0085F4 -> 0, 133, 244
        // #00BBFF -> 0, 187, 255
        // #1E3BA1 -> 30, 59, 161
        // #FFFFFF -> 255, 255, 255
        // #F8FAFC -> 248, 250, 252
        // #F0F6FC -> 240, 246, 252
        const rgbaStr = match[0].replace(/\s+/g, '');
        const isAllowedRgb = 
            rgbaStr.includes('0,4,173') || 
            rgbaStr.includes('0,74,173') || 
            rgbaStr.includes('0,133,244') || 
            rgbaStr.includes('0,187,255') || 
            rgbaStr.includes('30,59,161') || 
            rgbaStr.includes('255,255,255') || 
            rgbaStr.includes('248,250,252') || 
            rgbaStr.includes('240,246,252') ||
            rgbaStr.includes('var('); // variables like rgba(var(--color-bg), 0.5)
            
        if (!isAllowedRgb) {
            console.log(`Invalid RGB in ${file}:${lineNum}: ${match[0]}`);
            invalidFound = true;
        }
    }
});

if (!invalidFound) {
    console.log("No invalid colors found.");
}
