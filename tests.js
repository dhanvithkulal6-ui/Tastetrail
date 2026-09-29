const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = __dirname;
const pageKeys = {
  "index.html": "home",
  "breakfast.html": "breakfast",
  "lunch.html": "lunch",
  "dinner.html": "dinner",
  "snacks.html": "snacks",
  "desserts.html": "desserts",
  "indian.html": "indian",
  "italian.html": "italian",
  "healthy.html": "healthy",
  "recipe-details.html": "details"
};
const app = fs.readFileSync(path.join(root, "app.js"), "utf8");
const recipeBlock = app.match(/const recipes = \[([\s\S]*?)\n\];/);
const guideBlock = app.match(/const recipeGuides = \{([\s\S]*?)\n\};/);

assert.ok(recipeBlock, "recipe catalog should exist");
assert.ok(guideBlock, "recipe preparation guides should exist");
const recipes = vm.runInNewContext(`[${recipeBlock[1]}]`);
const guides = vm.runInNewContext(`({${guideBlock[1]}})`);
const ids = new Set(recipes.map((recipe) => recipe.id));

assert.equal(ids.size, recipes.length, "recipe IDs should be unique");
assert.equal(Object.keys(guides).length, recipes.length, "every recipe should have exactly one preparation guide");
for (const recipe of recipes) {
  for (const field of ["name", "description", "sections", "time", "difficulty", "image"]) {
    assert.ok(recipe[field], `${recipe.id} should have ${field}`);
  }
  assert.match(recipe.image, /^photo-[\w-]+$/, `${recipe.id} should reference a food photo`);
  assert.ok(guides[recipe.id], `${recipe.id} should have a preparation guide`);
  assert.ok(guides[recipe.id].ingredients.length >= 4, `${recipe.id} should list its ingredients`);
  assert.ok(guides[recipe.id].method.length >= 3, `${recipe.id} should have at least three method steps`);
}

for (const id of ["berry-french-toast", "egg-bhurji", "chicken-shawarma-bowl", "greek-orzo-salad", "prawn-biryani", "margherita-pizza", "vegetable-lasagna", "paneer-tikka-bites", "crispy-fish-fingers", "chocolate-mousse"]) {
  assert.ok(ids.has(id), `${id} should be included in the expanded dish collection`);
}

for (const [file, key] of Object.entries(pageKeys)) {
  const html = fs.readFileSync(path.join(root, file), "utf8");
  assert.match(html, new RegExp(`data-page="${key}"`), `${file} should select ${key}`);
  assert.match(html, /href="styles\.css"/, `${file} should load shared styles`);
  assert.match(html, /src="app\.js"/, `${file} should load shared behavior`);
}

for (const collection of ["breakfast", "lunch", "dinner", "snacks", "desserts", "indian", "italian", "healthy"]) {
  const count = recipes.filter((recipe) => recipe.sections.includes(collection)).length;
  assert.ok(count >= 8, `${collection} should contain at least 8 recipes; found ${count}`);
}

const nonVegMinimums = { breakfast: 3, lunch: 5, dinner: 7, snacks: 2, indian: 4, italian: 3, healthy: 5 };
for (const [collection, minimum] of Object.entries(nonVegMinimums)) {
  const count = recipes.filter((recipe) => recipe.sections.includes(collection) && !recipe.vegetarian).length;
  assert.ok(count >= minimum, `${collection} should have at least ${minimum} non-vegetarian recipes; found ${count}`);
}

assert.ok(fs.existsSync(path.join(root, "assets", "brand-mark.svg")), "local brand mark should exist");
assert.match(app, /recipe-details\.html\?id=/, "recipe cards should link to the dynamic details page");
console.log(`TasteTrail checks passed: ${Object.keys(pageKeys).length} pages, ${recipes.length} recipes.`);