# Week 13 — Food Rescue Network: Fetching & Routing 🥕

This week you'll learn two things: loading data from a **real API** with `useEffect`, and **routing** to
different pages. Most of the app is already built for you — you fill in the two pieces that teach these
skills.

## Setup

1. **Fork** this repository to your own GitHub account (the **Fork** button, top right).
2. **Clone your fork** — use *your* username:

   ```bash
   git clone https://github.com/gabischool/Week12_Food_Rescue_Network_Fetching_Routing.git
   cd THIS-REPO
   ```

3. **Install and run:**

   ```bash
   npm install
   npm run dev
   ```

At first the page is mostly empty — you'll see the navbar and footer, but no board yet. It fills in as
you complete the two steps below.

## What's already built (don't edit these)

- `src/api/foodApi.js` — fetches the listings from the API and returns them. Just call `getFoodListings()`.
- `src/pages/BoardPage.jsx` and `src/pages/ListingDetailPage.jsx` — the two pages, ready to display.
- `src/components/FoodListingCard.jsx` / `FoodListingList.jsx` — the cards (each already links to its page).
- `src/main.jsx` — already wrapped in `<BrowserRouter>`.

## Your task — two files

### 1. Fetch the data — `src/App.jsx`

Write a `useEffect` that runs **once** and calls `getFoodListings()`. On success, save the data with
`setListings(...)` and `setStatus("success")`; on failure, `setStatus("error")`. The guidance is in the
comments in `App.jsx`.

### 2. Routing — `src/App.jsx` and `src/components/Navbar.jsx`

- In **`App.jsx`**, add the `<Routes>` block with two routes: `/` shows the board, and
  `/listings/:listingId` shows a single listing.
- In **`Navbar.jsx`**, add a `<Link>` that takes you to the board (`/`).

When it works: the board loads from the network, the navbar link works, and clicking a listing opens its
own page at `/listings/:id` with no reload.

See the **`completed/`** version for the finished reference.
