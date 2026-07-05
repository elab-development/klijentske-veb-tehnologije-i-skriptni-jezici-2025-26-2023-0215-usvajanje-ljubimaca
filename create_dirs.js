const fs = require('fs');
const path = require('path');

const baseDir = "d:\\Projekti\\Marinko";

const directories = [
  ".github",
  "frontend\\src\\styles",
  "frontend\\src\\types",
  "frontend\\src\\data",
  "frontend\\src\\utils",
  "frontend\\src\\i18n",
  "frontend\\src\\context",
  "frontend\\src\\hooks",
  "frontend\\src\\components\\ui\\PetCard",
  "frontend\\src\\components\\ui\\TagBadge",
  "frontend\\src\\components\\ui\\HeartButton",
  "frontend\\src\\components\\ui\\StatBar",
  "frontend\\src\\components\\layout\\Navbar",
  "frontend\\src\\components\\layout\\LanguageToggle",
  "frontend\\src\\components\\filters\\FilterPanel",
  "frontend\\src\\components\\filters\\SearchBar",
  "frontend\\src\\pages\\Home",
  "frontend\\src\\pages\\Browse",
  "frontend\\src\\pages\\PetDetail",
  "frontend\\src\\pages\\Login",
  "frontend\\src\\pages\\SignUp",
  "frontend\\src\\pages\\Profile",
  "backend\\src\\config",
  "backend\\src\\models",
  "backend\\src\\controllers",
  "backend\\src\\routes",
  "backend\\src\\services",
  "backend\\src\\middleware",
  "db\\seeds"
];

let createdCount = 0;
for (const dir of directories) {
  const fullPath = path.join(baseDir, dir);
  try {
    fs.mkdirSync(fullPath, { recursive: true });
    createdCount++;
  } catch (err) {
    console.error(`Error creating ${dir}: ${err.message}`);
  }
}

console.log(`Created ${createdCount} directories`);

// Verify key directories
console.log("\nVerifying sample directories:");
const checkDirs = [
  ".github",
  "frontend\\src\\styles",
  "backend\\src\\models",
  "db\\seeds"
];

for (const dir of checkDirs) {
  const fullPath = path.join(baseDir, dir);
  try {
    const exists = fs.existsSync(fullPath) && fs.statSync(fullPath).isDirectory();
    const status = exists ? "EXISTS ✓" : "MISSING ✗";
    console.log(`  ${dir} - ${status}`);
  } catch (err) {
    console.log(`  ${dir} - ERROR: ${err.message}`);
  }
}
