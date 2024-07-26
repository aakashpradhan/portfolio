const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

// Ensure the public directory exists
const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const templates = [
  { template: 'index.ejs', output: 'index.html', title: 'Home Page' },
];

templates.forEach(({ template, output, title }) => {
  const templatePath = path.join(__dirname, 'src/views', template);
  const outputPath = path.join(publicDir, output);

  ejs.renderFile(templatePath, { title }, (err, str) => {
    if (err) {
      console.error(`Error rendering ${template}:`, err);
      return;
    }
    fs.writeFileSync(outputPath, str);
    console.log(`Generated ${output}`);
  });
});
