# 🍽️ Recipe Finder

> **Discover and explore recipes from around the world.** A beautifully crafted React application with dark mode support, real-time search, and smooth animations — built for food lovers by a food lover.

![React](https://img.shields.io/badge/React-%2361DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-%23646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-%2338B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-%23CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)


## ✨ Features

- 🔍 **Recipe Search** — Search recipes by name, cuisine, or tag from the home page
- 🌙 **Dark / Light Mode** — Switch themes with the navbar toggle; the selected theme is saved locally
- 📱 **Responsive Design** — Recipe cards and layouts adapt to mobile, tablet, and desktop screens
- 🎨 **Glassmorphism UI** — Warm food-focused palette with frosted surfaces, gradients, and hover states
- 🌍 **Cuisine Browsing** — Explore cuisines loaded from the DummyJSON recipe collection
- 🎲 **Random Recipe** — Discover a randomly selected recipe and request another one
- 📖 **Recipe Details** — View ingredients, cooking instructions, nutrition, timing, servings, and difficulty
- 🔎 **404 Page** — Unknown routes are handled by a dedicated not-found page


## 🛠️ Tech Stack

| Technology | Role |
|-----------|------|
| **React 19** | Core UI library |
| **Vite** | Fast build tool and dev server |
| **Tailwind CSS 4** | Utility-first styling |
| **React Router** | Client-side routing |
| **DummyJSON API** | Free mock recipe database |
| **react-icons** | Beautiful icon library |


## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) 18 or newer
- [npm](https://www.npmjs.com/) (included with Node.js)

### 1. Clone the Repository
```bash
git clone https://github.com/Sel049/recipe-finder.git
cd recipe-finder
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Development Server
```bash
npm run dev
```
The app will open at **http://localhost:5173** in your browser.

### 4. Build for Production
```bash
npm run build
```


## 📂 Project Structure

```
Recipe Finder/
├── src/
│   ├── components/
│   │   ├── Catagories.jsx
│   │   ├── CategoryCard.jsx
│   │   ├── ChefTip.jsx
│   │   ├── CookingSteps.jsx
│   │   ├── ExploreCuisines.jsx
│   │   ├── FeaturedRecipes.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── IngredientsList.jsx
│   │   ├── NavBar.jsx
│   │   ├── Nutrition.jsx
│   │   ├── RecipeCard.jsx
│   │   ├── RecipeHero.jsx
│   │   └── RecipeStats.jsx
│   ├── Layouts/
│   │   └── MainLayout.jsx
│   ├── pages/
│   │   ├── CategoriesPage.jsx
│   │   ├── HomePage.jsx
│   │   ├── NotFoundPage.jsx
│   │   ├── RandomRecipe.jsx
│   │   └── RecipeDetails.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── eslint.config.js
├── index.html
├── package.json
├── README.md
└── vite.config.js
```


## 📸 Screenshots

Screenshots can be added to a `screenshots/` directory when available.

### 🏠 Home Page — Light Mode
![Home Page](screenshots/home-light.png)

### 🌙 Home Page — Dark Mode
 ![Dark Mode](screenshots/home-dark.png)

### 🔍 Search Results
![Search](screenshots/search-results.png)

### 📂 Categories Page
![Categories](screenshots/categories.png)

### 🍽️ Recipe Details
![Recipe Details](screenshots/recipe-details.png)



## 🧭 Routing Guide

| Route | Page | Description |
|-------|------|-------------|
| `/` | HomePage | Landing page with search & featured recipes |
| `/categories` | CategoriesPage | Browse recipes by cuisine |
| `/randomrecipe` | RandomRecipe | Generate a random recipe |
| `/recipe/:id` | RecipeDetails | View full recipe by ID |
| `*` | NotFoundPage | 404 error page |


## 🎨 Design Philosophy

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Cream | `#fff8f0` | Light background |
| Charcoal | `#2b2d42` | Text & dark backgrounds |
| Orange | `#ff6b35` | Primary accent (buttons, links) |
| Amber | `#ffd166` | Secondary accent (gradients, highlights) |
| Mint | `#2ec4b6` | Tertiary accent (gradients) |

### Typography

- **Playfair Display** — Used for headings
- **Inter** — Used for body text and interface labels

### Key Effects

- **Glassmorphism** — Frosted surfaces with `backdrop-filter: blur()`
- **Shadow Glass** — Subtle depth for cards and navigation
- **Hover States** — Small scale and elevation changes on interactive elements


## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |


## 🤝 Contributing

Contributions are what make the open source community amazing!

1. **Fork** the project
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request


## 📄 License

This project is licensed under the **MIT License**.


## 🙏 Acknowledgments

- [DummyJSON](https://dummyjson.com/) for recipe data
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [React Icons](https://react-icons.github.io/react-icons/) for interface icons


## 👤 Author

**Selman** — [GitHub Profile](https://github.com/Sel049)


> 💛 *"The best way to predict the future is to invent it." — Built with passion, one recipe at a time.*
