# 🛒 Supermarket Billing System

## Practical No. 2 — JavaScript Interactive Web Application

### 📌 Overview

The **Supermarket Billing System** is an interactive web application developed using **HTML, CSS, and JavaScript**. It allows users to enter product details, validate the input, automatically calculate product totals, generate a dynamic bill, and display the complete billing data in JSON format.

This practical demonstrates the use of **JavaScript arrays, objects, DOM manipulation, input validation, event handling, calculations, and JSON**.

---

## 🎯 Aim

To design and develop an interactive Supermarket Billing System using HTML, CSS, and JavaScript, using arrays and JSON to store and display product information with proper input validation and dynamic bill calculation.

---

## 🛠️ Technologies Used

* **HTML5** — Structure of the web application
* **CSS3** — Styling, layout, responsiveness, and visual design
* **JavaScript** — Application logic and interactivity
* **JSON** — Representation of billing data

---

## 📁 Project Structure

```text
Practical2/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## ✨ Features

### 1. Add Products

Users can enter:

* Product Name
* Price
* Quantity

and add the product to the bill.

### 2. Input Validation

The application validates the entered information before adding a product.

It checks that:

* Product name is not empty.
* Price is a valid positive number.
* Quantity is a valid positive number.

Appropriate error messages are displayed for invalid input.

### 3. Dynamic Bill Generation

Added products are dynamically displayed in a billing table containing:

* Product
* Price
* Quantity
* Total

### 4. Automatic Calculation

The total price of each product is calculated automatically using:

**Total = Price × Quantity**

The application also calculates the **Grand Total** of all products.

### 5. Array and Objects

Product information is stored using a JavaScript array.

Each product is represented as an object containing:

* Product name
* Price
* Quantity
* Total

### 6. JSON Data

The complete product information can be converted into JSON format and displayed using the **Show Bill Data** button.

### 7. Responsive Design

The interface is designed to work on:

* Desktop
* Tablet
* Mobile devices

---

## 🧠 JavaScript Concepts Used

This practical demonstrates the following JavaScript concepts:

* Variables
* Arrays
* Objects
* Functions
* Conditional statements
* Loops
* `parseFloat()`
* `parseInt()`
* DOM manipulation
* Event handling
* Input validation
* `JSON.stringify()`
* Dynamic HTML generation

---

## 🔄 Application Workflow

```text
Enter Product Details
        ↓
   Click Add Product
        ↓
    Validate Input
     ↙          ↘
 Invalid        Valid
   ↓              ↓
Show Error    Create Product Object
                  ↓
             Add to Array
                  ↓
            Display Bill
                  ↓
        Calculate Grand Total
                  ↓
          Generate JSON Data
```

---

## 🎨 User Interface

The application uses a modern **indigo and dark-blue color scheme** with:

* Rounded cards
* Styled input fields
* Gradient buttons
* Responsive billing table
* Highlighted grand total
* Dark JSON data section
* Hover and focus effects

---

## ▶️ How to Run

1. Download or clone the project.
2. Open the `Practical2` folder.
3. Open `index.html` in any modern web browser.
4. Enter the product name, price, and quantity.
5. Click **Add Product**.
6. The product will appear in the bill.
7. Add multiple products to calculate the grand total.
8. Click **Show Bill Data** to view the product information in JSON format.

---

## 🧪 Example

For example, if the user enters:

| Product   | Price | Quantity |
| --------- | ----: | -------: |
| Rice      |  ₹320 |        1 |
| Milk      |   ₹62 |        2 |
| Chocolate |   ₹50 |        2 |

The system calculates:

**Rice:** ₹320 × 1 = ₹320
**Milk:** ₹62 × 2 = ₹124
**Chocolate:** ₹50 × 2 = ₹100

**Grand Total = ₹544**

---

## 📚 Learning Outcomes

After completing this practical, the following concepts are understood:

* Creating interactive web applications using JavaScript.
* Working with arrays and objects.
* Validating user input.
* Manipulating HTML elements using the DOM.
* Handling user events.
* Performing dynamic calculations.
* Generating and displaying JSON data.
* Creating responsive and user-friendly interfaces.

---

## 👩‍💻 Author

**Bhoomi**
B.Tech — Software Engineering
MIT Academy of Engineering, Pune

---

## 📄 Practical Information

**Practical:** 2
**Topic:** JavaScript Interactive Web Application
**Project:** Supermarket Billing System
**Technologies:** HTML5, CSS3, JavaScript
