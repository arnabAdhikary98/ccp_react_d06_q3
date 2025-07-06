# Product Store React App

This project is a simple product store built with React and Vite. It fetches product data from the [DummyJSON API](https://dummyjson.com/products) and allows users to:

- Browse a list of products with images and prices
- Filter products by category
- Sort products by price (low to high, high to low)
- View detailed information for each product

## Features

- **Modern UI:** Clean, responsive, and interactive design
- **Routing:** Uses React Router for navigation between home and product detail pages
- **API Integration:** Fetches real product data from a public API

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Run the app locally:**
   ```sh
   npm run dev
   ```
3. **Open in browser:**
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal)

## Project Structure

- `src/` - Main source code
  - `pages/` - Home and ProductDetail components
  - `App.jsx` - Main app with routing
  - `App.css` - App-wide styles

## API Reference

Data is fetched from [https://dummyjson.com/products](https://dummyjson.com/products).

## License

This project is for educational/demo purposes.