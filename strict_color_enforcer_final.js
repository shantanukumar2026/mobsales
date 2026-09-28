const fs = require('fs');
const path = require('path');

const allowedHexes = [
    '#0004AD', '#004AAD', '#0085F4', '#00BBFF', '#1E3BA1',
    '#FFFFFF', '#F8FAFC', '#F0F6FC'
];

function normalizeHex(hex) {
    let normalized = hex.toUpperCase();
    if (normalized.length === 4) {
        normalized = '#' + normalized[1] + normalized[1] + normalized[2] + normalized[2] + normalized[3] + normalized[3];
    }
    return normalized;
}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function getClosestColor(hexStr) {
    let hex = normalizeHex(hexStr);
    let target = hexToRgb(hex);
    if (!target) return '#1E3BA1'; // fallback

    let closest = allowedHexes[0];
    let minDistance = Infinity;

    for (let i = 0; i < allowedHexes.length; i++) {
        let current = hexToRgb(allowedHexes[i]);
        let distance = Math.sqrt(
            Math.pow(target.r - current.r, 2) +
            Math.pow(target.g - current.g, 2) +
            Math.pow(target.b - current.b, 2)
        );
        if (distance < minDistance) {
            minDistance = distance;
            closest = allowedHexes[i];
        }
    }
    
    // Manual overrides for certain hues to prevent dark gray turning into dark blue where it should be light, etc.
    // Actually, closest color distance in RGB is usually safe.
    // But for whites/light grays:
    if (target.r > 200 && target.g > 200 && target.b > 200) {
        return '#F0F6FC';
    }
    // For blacks/dark grays:
    if (target.r < 50 && target.g < 50 && target.b < 50) {
        return '#0004AD'; // User said black -> #0004AD
    }
    
    return closest;
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

files.forEach(file => {
    let c = fs.readFileSync(file, 'utf8');
    let o = c;

    // Hex replacements
    c = c.replace(/#[0-9a-fA-F]{3,6}\b/g, (match) => {
        const norm = normalizeHex(match);
        if (allowedHexes.includes(norm)) return match;
        // Don't replace things that look like hashes but aren't colors (like anchors, but usually those aren't 3-6 hex digits exactly)
        return getClosestColor(match);
    });

    // RGBA replacements - aggressively replace any rgba(...) that is not our allowed rgb
    // Because regex replacing inside strings is messy, I'll just map them.
    c = c.replace(/rgba?\(\s*0\s*,\s*0\s*,\s*0\s*,\s*([0-9.]+)\)/g, 'rgba(0, 4, 173, $1)');
    c = c.replace(/rgba?\([^)]+\)/g, (match) => {
        if (match.includes('var(') || match.includes('0, 4, 173') || match.includes('0, 74, 173') || 
            match.includes('0, 133, 244') || match.includes('0, 187, 255') || match.includes('30, 59, 161') || 
            match.includes('255, 255, 255') || match.includes('248, 250, 252') || match.includes('240, 246, 252')) {
            return match;
        }
        // Extract alpha
        const alphaMatch = match.match(/,\s*([0-9.]+)\s*\)$/);
        const alpha = alphaMatch ? alphaMatch[1] : '1';
        
        // If it's a light rgba, make it light
        if (match.includes('255,') || match.includes('250,')) {
            return `rgba(240, 246, 252, ${alpha})`;
        }
        
        // Default to a dark/mid blue
        return `rgba(0, 4, 173, ${alpha})`;
    });
    
    // Spelling
    c = c.replace(/>\s*Lorem ipsum[^<]*</gi, '> Precast concrete solutions <');
    c = c.replace(/>\s*test\s*</gi, '> verify <');
    
    if (c !== o) {
        fs.writeFileSync(file, c);
    }
});
