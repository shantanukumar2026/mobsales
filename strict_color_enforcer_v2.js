const fs = require('fs');
const path = require('path');

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
    c = c.replace(/#F5F5F5/gi, '#F0F6FC');
    c = c.replace(/#c4d7e9/gi, '#1E3BA1');
    c = c.replace(/#555\b/gi, '#1E3BA1');
    c = c.replace(/#444\b/gi, '#0004AD');
    c = c.replace(/#D9DDE0/gi, '#F0F6FC');
    c = c.replace(/#050a12/gi, '#0004AD');
    c = c.replace(/#1a6fb0/gi, '#0085F4');
    c = c.replace(/#F0F7FF/gi, '#F8FAFC');
    c = c.replace(/#94a3b8/gi, '#1E3BA1');
    c = c.replace(/#cbd5e1/gi, '#F0F6FC');
    c = c.replace(/#64748b/gi, '#1E3BA1');
    c = c.replace(/#10b981/gi, '#00BBFF');
    c = c.replace(/#4ade80/gi, '#00BBFF');
    c = c.replace(/#A0AEC0/gi, '#1E3BA1');
    c = c.replace(/#8892B0/gi, '#1E3BA1');
    c = c.replace(/#0056ff/gi, '#004AAD');
    c = c.replace(/#1a4a8f/gi, '#004AAD');

    // RGBA replacements
    // rgba(0,0,0,...) -> rgba(0, 4, 173, ...)
    c = c.replace(/rgba\(0,\s*0,\s*0,\s*([0-9.]+)\)/g, 'rgba(0, 4, 173, $1)');
    // rgba(9, 72, 150, ...) -> rgba(0, 4, 173, ...) or rgba(0, 133, 244, ...)
    c = c.replace(/rgba\(9,\s*72,\s*150,\s*([0-9.]+)\)/g, 'rgba(0, 4, 173, $1)');
    // rgba(0, 85, 255, ...) -> #0055ff is not allowed, use #0085F4 (0, 133, 244)
    c = c.replace(/rgba\(0,\s*85,\s*255,\s*([0-9.]+)\)/g, 'rgba(0, 133, 244, $1)');
    // rgba(0, 75, 135, ...) -> #004AAD (0, 74, 173)
    c = c.replace(/rgba\(0,\s*75,\s*135,\s*([0-9.]+)\)/g, 'rgba(0, 74, 173, $1)');
    // rgba(250,250,247,...) -> rgba(248, 250, 252,...)
    c = c.replace(/rgba\(250,\s*250,\s*247,\s*([0-9.]+)\)/g, 'rgba(248, 250, 252, $1)');
    // rgba(212,167,0,...) and rgba(244,196,0,...) -> yellow to cyan
    c = c.replace(/rgba\(212,\s*167,\s*0,\s*([0-9.]+)\)/g, 'rgba(0, 187, 255, $1)');
    c = c.replace(/rgba\(244,\s*196,\s*0,\s*([0-9.]+)\)/g, 'rgba(0, 187, 255, $1)');

    // Text replacements for spelling errors
    c = c.replace(/lorem ipsum/gi, 'precast concrete solutions');
    c = c.replace(/lorem/gi, 'precast');

    if (c !== o) {
        fs.writeFileSync(file, c);
        console.log('Fixed:', file);
    }
});
