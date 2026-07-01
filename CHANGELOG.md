# Changelog - BIOSILIN Website Upgrades

All notable changes to the BIOSILIN project are documented in this file.

## [2026-07-01]

### Added
- **Interactive Skincare Quiz (`src/pages/Quiz.jsx`)**: Created a step-by-step skincare builder diagnostic page that recommendations routines based on user skin concerns and types, and allows adding all recommended products directly to their regimen.
- **Glassmorphic Product Bottles (`src/components/ProductBottle.jsx`)**: Designed a custom CSS/SVG-based component to render highly aesthetic clinical packaging graphics matching the specific categories (dropper bottle for serums, frosted jars for creams, squeeze tubes for sunscreens, and pump bottles for face wash).
- **Auth Enhancements (`src/components/AuthModal.jsx`, `src/context/AuthContext.jsx`)**: Added Full Name and Confirm Password support to the Sign Up form, structured field validations (e.g. password length, match checks), and integrated an error message display banner with brand lock icons.
- **Enhanced Checkout System (`src/pages/Checkout.jsx`)**: Created a premium multi-step checkout workflow featuring:
  - **Horizontal Step Progress Tracker**: Visual progress header showing active step states.
  - **Dynamic Promo Codes**: Supports `WELCOME10` (10% off) and `BIOSILIN` (20% off) calculations.
  - **Delivery Selector**: Toggle between Standard and Express delivery with dynamic price adjustment.
  - **Persisted Shipping Info**: Checkbox to save shipping details to localStorage for faster checkouts.
  - **Clinical Post-Purchase Guide**: Dynamic storage and layering guidelines upon successful order placement.
  - **Printable Invoices**: Native receipt printing via browser trigger on success.



### Changed
- **Navigation & Routing (`src/App.jsx`, `src/components/Navbar.jsx`)**: Added links and routes mapped to `/quiz` and `/checkout`.
- **Checkout Action (`src/components/RegimenDrawer.jsx`)**: Redirects users to the `/checkout` route upon clicking "Proceed to Checkout" if they are logged in, or opens the Auth modal for guests.
- **Advanced Shop Filters (`src/pages/Shop.jsx`, `src/components/Products.jsx`)**: Upgraded the shop catalog to include a responsive sidebar with keyword search, category checkboxes, skin concern checkboxes, and active ingredient checkboxes.
- **Product Details Enhancements (`src/pages/ProductDetail.jsx`)**: Integrated high-fidelity large bottle visualizers, added custom animated SVG progress bars for active ingredient concentrations, and built a clinical layering guide with AM/PM compatibility matrix.
- **Visual diagrams & Image alignment (`src/components/OurStory.jsx`, `src/pages/Story.jsx`, `src/index.css`)**: Replaced raw text placeholders with high-fidelity inline SVGs. Standardized image wrapper containers with a fixed height (`height: 400px`), background padding, and overflow control to ensure diagrams align perfectly with text columns and scale uniformly.
- **Style sheet additions (`src/index.css`)**: Appended all CSS declarations for the quiz steps, shop layout grids, ingredient bars, layering guidelines, animations, and product bottle sizes.
