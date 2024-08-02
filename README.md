

Property Rental Website
[propertyrentalwebsite.netlify.app](https://propertyrentalwebsite.netlify.app/)

Overview
The Property Rental Website is a comprehensive platform designed to facilitate the listing and renting of properties. This web application allows property owners to list their properties and potential renters to browse and inquire about available properties.

Features
Property Listings: Browse through a variety of properties listed by owners.
Advanced Search: Filter properties by location, price, type, and more.
Property Details: View detailed information about each property, including images, descriptions, and amenities.
User Authentication: Secure login and registration using Firebase.
Responsive Design: Optimized for both desktop and mobile devices.
Tech Stack
Frontend: React.js, Tailwind CSS
Authentication: Firebase
Hosting: Netlify
Installation and Setup
Clone the repository

bash
Copy code
git clone https://github.com/yourusername/property-rental-website.git
cd property-rental-website
Install dependencies

bash
Copy code
npm install
cd client
npm install
cd ..
Set up environment variables

Create a .env file in the root directory and add the following:

env
Copy code
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
Run the application

bash
Copy code
cd client
npm start
The frontend development server will run on http://localhost:5173.

Usage
Register/Login: Create an account or login with existing credentials using Firebase authentication.
Browse Properties: Explore available properties using the search and filter options.
List a Property: As a logged-in user, you can list your property for rent by providing necessary details and images.
Contact Owners: Inquire about a property by contacting the owner through the provided contact options.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
