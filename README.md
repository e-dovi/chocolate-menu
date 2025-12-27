# 🍫 Chocolate Menu App

A responsive React Native Web application that displays a list of chocolate‑themed products, complete with images, descriptions, pricing, and add‑to‑cart functionality powered by Redux.

This project is designed to run on **web**, with layouts optimized for smaller screens and flexible image rendering.

---

## 📦 Features

### 🍫 Product Menu  
A scrollable list of chocolate items rendered using `FlatList`, each including:

- Product image  
- Title  
- Description  
- Price  
- Add‑to‑cart button  

### 🛒 Cart Integration  
Items can be added to the cart using Redux:

- `addToCart()` dispatches a new item  
- Each item includes name, price, and quantity  
- Cart state is managed globally via `cartSlice.js`

---

## 🧩 Key Components

### **MenuScreen**
- Imports local images into a lookup object  
- Defines a static `DATA` array of menu items  
- Renders the list using `FlatList`  
- Wraps content in `SafeAreaView` for mobile safety  

### **Item**
Handles the UI for each product:

- Displays the product image  
- Shows name, description, and price  
- Includes a pressable cart icon  
- Dispatches `addToCart()` on press  

---

## 🚀 Running the App

### Install dependencies
From the project root:

```bash
npm install
```

If using Expo:

```bash
npx expo start
```

If using React Native CLI:

```bash
npm start
```

For web:

```bash
npm run web
```

---

## 🛠️ Technologies Used

- **React Native**  
- **React Native Web**  
- **Redux Toolkit**  
- **FlatList** for efficient rendering  
- **Local image bundling** via `require()`  

---

## 📜 License

Copyright (c) 2025 elvis dovi

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


