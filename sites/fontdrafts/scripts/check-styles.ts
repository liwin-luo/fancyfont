import { stylePages, stylePageLocales } from "../src/lib/style-pages";
for (const page of stylePages.slice(0, 4)) {
  console.log(page.slug, "->", stylePageLocales(page).join(","));
}
console.log("total stylePages:", stylePages.length);
