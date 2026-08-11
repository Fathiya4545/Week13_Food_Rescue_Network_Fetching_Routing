// The only file that knows a URL. Components never call fetch directly.
//
// We fetch from DummyJSON's "groceries" category — a free public dummy API that
// returns real food items. It gives us its own shape, so this file also ADAPTS
// each product into the listing shape our app expects.
const API_URL =
  "https://dummyjson.com/products/category/groceries?limit=8&select=title,description,category,stock";

export async function getFoodListings() {
  const response = await fetch(API_URL);
  // fetch does NOT reject on a 404 — check res.ok yourself and throw.
  if (!response.ok) {
    throw new Error(`Could not load listings (${response.status})`);
  }
  const data = await response.json();
  // DummyJSON wraps the list in { products, ... } — pull it out, then map.
  return data.products.map(toListing);
}

// Adapter: one DummyJSON product -> one food listing in our shape.
function toListing(product) {
  return {
    id: String(product.id), // ids are strings
    title: product.title,
    provider: "Community grocer",
    category: humanize(product.category),
    portions: product.stock,
    description: product.description,
    priority: product.stock < 20 ? "Urgent" : "Standard",
  };
}

function humanize(slug) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
