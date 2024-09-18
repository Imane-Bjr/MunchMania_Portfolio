# 🍔 MunchMania: Delight in Every Bite

Welcome to **MunchMania**! This project involves building a fully functional restaurant website using the **MERN Stack** (MongoDB, Express.js, React.js, Node.js). MunchMania is designed to offer a modern, feature-rich web application tailored for the restaurant industry, enabling a seamless experience for both customers and administrators.

<p align="center">
  <img src="https://github.com/Imane-Bjr/MunchMania_Portfolio/blob/main/MunchMania_Logo.png" alt="MunchMania Logo" width="200"/>
</p>

## 🚀 Project Overview

MunchMania is a dynamic and responsive restaurant website that provides key features such as user authentication, online food ordering, payment processing, and an admin panel for managing restaurant data. This project utilizes:

- **React.js** for creating a dynamic and user-friendly frontend.
- **Tailwind CSS** for modern and responsive UI design.
- **MongoDB** for efficient data storage and management.
- **Express.js** and **Node.js** for backend development and API creation.
- **Firebase Authentication** and **JWT tokens** for secure user login and role-based access control.

## ✨ Key Features

### 🔐 Robust User Authentication
Protect user data with cutting-edge security measures, including Firebase-powered authentication that ensures only verified users gain access to their accounts.

### 🔒 Smart Session Management
Employ JWT tokens to seamlessly manage user sessions, allowing personalized user experiences with access control based on user roles.

### 🛠️ Command Central: The Admin Panel
Take full control of your restaurant’s digital presence with an intuitive admin dashboard—add or update menu items, track orders, and generate insightful reports with ease.

### 👨‍💻 Streamlined Admin Panel
Take charge with a comprehensive admin panel that puts you in control of everything from menu management to order processing, making business operations a breeze.

### 🍽️ Simple and Intuitive Food Ordering
Delight your customers with a user-friendly ordering system that lets them browse the menu, add items to their cart, and place orders effortlessly.

### 💳 Hassle-Free Payment Processing
Say goodbye to payment woes with our seamless integration of a payment gateway (like Stripe). Enjoy a variety of payment options with top-notch security.

### User Authentication & Forms
- **Firebase Authentication:** Secure login and signup processes.
- **Login & Signup Pages:** Easy-to-use interfaces for user access.
- **React Hook Forms:** Efficient form handling and validation.

### Frontend Development
- **React Router DOM:** Smooth navigation across your site.
- **Navbar:** A sleek and responsive navigation bar.
- **Banner & Categories:** Highlight special dishes with eye-catching banners.
- **React Slick Carousel:** Display featured dishes or promotions in a carousel.
- **Testimonials & Services:** Share customer reviews and restaurant services.

### Backend Development
- **Express.js Server:** Handles all your API requests.
- **MongoDB Integration:** Manages restaurant data with ease.
- **Cart Functionality:** A cart page with pricing and state management.
- **Admin Dashboard:** A feature-rich dashboard for managing operations.
- **Product Upload & Management:** Easily upload, edit, or delete menu items.
- **Backend Operations:** Handles all inventory tasks efficiently.
- **Stripe Integration:** Secure and easy payment processing.
- **Credit/Debit Card Payments:** Accept transactions with credit and debit cards.
- **Order History:** Track and display order history for users.

### Security
- **JWT Authentication:** Secure sensitive routes with token-based access.
- **Unauthorized Access Handling:** Controls to manage access attempts.

## 🛠️ Technologies Used

- **Frontend:** React.js, Tailwind CSS, React Router DOM, React Hook Forms, Firebase Authentication
- **Backend:** Node.js, Express.js, MongoDB, JWT
- **Payment Gateway:** Stripe
- **Deployment:** On Going

## 📦 Installation & Setup

To get the project running locally, follow these steps:

### Prerequisites

- Ensure you have **Node.js** installed. You can download it from [nodejs.org](https://nodejs.org/).
- Install **MongoDB** if you're running the database locally or ensure access to a MongoDB cloud service such as MongoDB Atlas.
- You need **npm** or **yarn** as a package manager. Use `npm` by default if unsure.

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/munchmania.git
   ```

2. **Navigate to the server directory and install dependencies:**

   ```bash
   cd munchmania-server
   npm install
   ```

3. **Configure environment variables:**

   - Create a `.env` file in the root directory of the server and add the following environment variables:

     ```bash
     PORT=5000
     MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/your-db-name?retryWrites=true&w=majority
     ```

   Replace `<username>`, `<password>`, and `your-db-name` with the appropriate MongoDB Atlas credentials or your local MongoDB instance.

4. **Start the server:**

   ```bash
   npm start
   ```

   The server will run on `http://localhost:5000`.

5. **Navigate to the client directory and install dependencies:**

   ```bash
   cd munchmania-client
   npm install
   ```

6. **Start the client:**

   ```bash
   npm start
   ```

   The client will run on `http://localhost:5173`.

7. **Connect the server to the MongoDB database:**

   Ensure that MongoDB is running or you're connected to your MongoDB Atlas instance, and the backend will automatically connect and sync data.


## 👨‍💻 Team and Roles

### [BOUJIR IMANE](https://www.linkedin.com/in/imane-boujir-091a351b1/) (Full-Stack Developer)
**Role:** Full-Stack Developer focus on BACKEND and assistance in FRONTEND

**Contribution:**
- Setup of the initial project files, laying the foundation for development.
- Backend development using Node.js, Express.js, JWT, and MongoDB.
- Implementation of API functionalities, including authentication.
- Creation of data models and database architecture.
- Design and creation of the admin panel with CRUD functionality.
- Full-stack development covering both frontend and backend aspects.

### [TASNIME FERSIOUI](https://www.linkedin.com/in/tasnime-7980bb267/) (Full-Stack Developer)
**Role:** Full-Stack Developer focus on FRONTEND

**Contribution:**
- Design and creation of an engaging landing page.
- Development of the user profile and dashboard, prioritizing user experience.
- Implementation of profile settings for enhanced user customization.
- Utilized React.js with Tailwind for the frontend.
- Collaborative work in creating the overall design and visual appeal of the platform.
- Collaborative work in creating a cohesive and integrated system.
- Collaborative work in creating the logo, selected colors, and designed all pages.


## 📜 License

This project is licensed under the MIT License. Feel free to use and modify it for your own projects.

## 🙌 Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.

To contribute:

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-branch
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add some feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature-branch
   ```
5. Open a pull request on GitHub.

Please follow the project's coding style and conventions.

## Project Screenshots

Here are some screenshots from the project:

### Homepage - Banner
![Homepage](https://github.com/Imane-Bjr/MunchMania_Portfolio/blob/main/assests/screen1.png)

### Homepage - Categories
![Categories](https://github.com/Imane-Bjr/MunchMania_Portfolio/blob/main/assests/screen2.png)

### Homepage - Specialities
![Specialities](https://github.com/Imane-Bjr/MunchMania_Portfolio/blob/main/assests/screen3.png)

### Homepage - Testimonials
![Testimonials](https://github.com/Imane-Bjr/MunchMania_Portfolio/blob/main/assests/screen4.png)

### Cart Page
![Cart Page](https://github.com/Imane-Bjr/MunchMania_Portfolio/blob/main/assests/screen5.png)

### Menu Page
![Menu Page](https://github.com/Imane-Bjr/MunchMania_Portfolio/blob/main/assests/screen6.png)

## 📧 Contact

If you have any questions or need further assistance, feel free to reach out:

- **Email:** boujirimane1@gmail.com  //   tasnim.fr2008@gmail.com
- **GitHub:** https://github.com/Imane-Bjr   //  https://github.com/Tasniiime

