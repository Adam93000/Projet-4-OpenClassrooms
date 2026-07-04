const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\adama\\Documents\\dev\\Cours OpenClassroom\\Projet 4\\Restaurants';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(f => {
  const p = path.join(dir, f);
  let content = fs.readFileSync(p, 'utf8');
  
  content = content.replace(/<div class="menu-item-content">\s*<h4>(.*?)<\/h4>\s*<p>(.*?)<\/p>\s*<\/div>/gs, 
    '<span class="menu-item-content">\n            <strong class="menu-item-title">$1</strong>\n            <span class="menu-item-desc">$2</span>\n          </span>');
    
  content = content.replace(/<div class="menu-item-price">\s*(.*?)\s*<\/div>/gs,
    '<span class="menu-item-price">\n            $1\n          </span>');
    
  fs.writeFileSync(p, content, 'utf8');
});
console.log('Done!');
