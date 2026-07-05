# Currency Converter App

A clean, responsive client-side web application that allows users to convert currency amounts instantly in the browser[cite: 1]. 

## Features
* Dynamic Calculations: Converts between five global currencies: USD, EUR, GBP, JPY, and SAR[cite: 1, 4].
* Input Validation: Error handling built-in to prevent negative numbers or invalid inputs[cite: 1, 4].
* Responsive Design: Optimized layout that seamlessly scales for both desktop and mobile screens[cite: 1, 3].
* Modern UI: Styled with a clean card container, standard typographic hierarchy, and interactive visual elements like hover states[cite: 1, 3].

## Technologies Used
* HTML5: Structures the conversion form, input fields, and output displays[cite: 1, 2].
* CSS3: Handles layout presentation using Flexbox, media queries for responsiveness, and styling components[cite: 1, 3].
* JavaScript (ES6): Manages dynamic state, handles form submission events, validates numbers, and calculates rates via client-side logic[cite: 1, 4].

## Technical Overview
The application establishes base exchange values relative to USD[cite: 1, 4]:
* USD: 1[cite: 1, 4]
* EUR: 0.85[cite: 1, 4]
* GBP: 0.75[cite: 1, 4]
* JPY: 110[cite: 1, 4]
* SAR: 3.75[cite: 1, 4]

When a user submits the form, the script normalizes the source currency to a USD baseline before applying the target exchange multiple to display the exact output[cite: 1, 4].
