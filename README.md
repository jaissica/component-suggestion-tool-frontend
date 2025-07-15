# **Component Suggestion Tool - Utilizing Visa Design System Components**

## **Overview**

This project leverages the **Visa Product Design System** (VPDS) to create a web app where developers can input descriptions of UI components, and the app will provide:

- **Suggested components** from the VPDS that fit the description.
- **Auto-generated code snippets** that assemble these components.

### **Core Requirements**
- **Input**: A free-form text field where developers can describe the UI they want to build.
- **Output**: 
  - A list of relevant Visa Product Design System components.
  - An auto-generated code snippet that demonstrates how to use those components together.
- **User Experience**: The tool is designed to be intuitive and simple, enabling developers to copy or use the generated code with ease.

---

## **Tech Stack**

- **Frontend**: React (for the web app).
- **Design System**: Visa Product Design System (Nova Styles).
- **CSS**: Nova Styles theming features for aesthetic customizations.
- **AI Tools Used**: GitHub Copilot, ChatGPT for debugging, commenting.

---

## **Installation Instructions**

### Prerequisites
- Node.js (version 14 or higher).
- npm (Node Package Manager) or yarn.

### Setup
1. Clone this repository:
   ```bash
   git clone <repository_url>
   cd <project_directory>

   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
  ```bash
   npm start
   ```
4. The app will now be running at http://localhost:5173/.

## **Folder Structure**
## Folder Structure

- **/src**
  - **/assets**  
    Static files like images
  - **/components**  
    Reusable UI components
  - **/pages**  
    App pages
  - **/services**  
    Services to fetch component data
  - **/styles**  
    Custom CSS and theme styles
  - **/utils**  
    Utility functions
  - **/constants**  
    Static configurations like component metadata
  - **App.jsx**  
    Main app component
  - **index.css**  
    Global styles
  - **main.jsx**  
    App entry point




## **Component Suggestion Tool - Utilizing Visa Design System Components**

The **Component Suggestion Tool** is the main feature of this app. It allows developers to input a free-form description of the UI they wish to build. The app then suggests relevant components from the **Visa Product Design System** and generates the corresponding code snippet.

### **How It Works**
1. **Input**: Developers type a description of the UI they want to create, e.g., "Responsive login form with remember me.", "button", "tool"
2. **Output**: 
   - The app displays a list of **Visa Product Design System** components that match the description.
   - It also generates a **code snippet** that shows how to use those components together.
3. **User Experience**: Simple and intuitive, with easy-to-copy code for integration.

---

## **Page Descriptions**

### **App.jsx**
This is the main container of the app, rendering the structure and routing logic. It loads other pages, such as the component suggestion tool, and is responsible for managing global states, such as user input and component suggestions.

### **Component Suggestion Tool Page**
This page is where the core functionality happens. It provides the input field for developers to describe their desired UI. The app then displays a list of relevant components from the **Visa Product Design System** and an auto-generated code snippet showcasing how to use those components.

### **Services Page**
This page contains the logic to fetch data or metadata from the persitent database. It handles the connection to the backend, which is used to provide the components’ data, ensuring the suggestion tool works dynamically. (refer to the backedn README for logic related to fetching suggestions)

### **Components Page**
This page provides a reusable UI structure for displaying individual components, like buttons, checkboxes, forms, etc., using the **Visa Product Design System** components. It includes multiple examples and code snippets for each component, showing different use cases and variations.

### **Styles Page**
The **styles page** contains global CSS and custom styling for the app. It utilizes the **Visa Nova UI's theming features** to apply consistent design and aesthetic features across the app, ensuring that it aligns with the **Visa Product Design System**.

---

## **Usage Instructions**

1. **Type a description** in the input field (e.g., "Simple navigation bar with a dropdown").
2. The app will **suggest relevant components** from the Visa Product Design System.
3. **View the generated code snippet** that shows how to use these components together.
4. **Copy or use** the code directly in your project.

---

## **Accessibility Considerations**

- The tool ensures that the generated UI components follow **WCAG** (Web Content Accessibility Guidelines) to provide a smooth experience for all users.

---

## **Deployment**

The project is deployed using **Vercel/Netlify**. Here’s the [link](<deployment_link>) to the live app.