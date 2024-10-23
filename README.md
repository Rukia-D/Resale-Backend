# ReSale Backend

ReSale is a specialized online marketplace application designed exclusively for the IIITA (Indian Institute of Information Technology, Allahabad) campus community. This repository contains the backend code for ReSale, built with Node.js and Express.js, providing a robust and scalable server environment for handling LDAP-based user authentication, ad management, and more.

## Key Features

1. **Authentication & Access Control**
    - User authentication is integrated with IIITA's LDAP system, allowing students and faculty to log in using their official campus credentials.
    - Implements secure user login and session management using JSON Web Tokens (JWT).
  
2. **Ad Management**
    - Supports CRUD operations for managing advertisements within the platform.
    - Users can create, update, and delete their ads, with ad information stored in **PostgreSQL** using **Prisma ORM** for database management. Images associated with ads are stored in Google Firestore.

3. **Search & Sorting**
    - The backend provides powerful search and sorting functionalities, allowing users to search ads by keywords and sort them based on various criteria like price, category, and recency.

4. **Profile Management**
    - Enables users to manage their profiles, update personal information, and view their activity history, such as previously posted ads.

5. **Persistent Authentication**
    - Once authenticated via LDAP, the system issues JWT tokens for session management, which are stored on the client side, allowing seamless access to the platform without repeated logins.

## Technologies Used

- **Node.js & Express.js**: The core framework for building scalable backend services.
- **PostgreSQL**: Relational database used for structured data storage, managed using **Prisma ORM**.
- **Google Firestore**: Used for storing and retrieving images associated with ads, ensuring efficient multimedia management.
- **LDAP (Lightweight Directory Access Protocol)**: Integrated to allow users to authenticate using their IIITA campus credentials.
- **JWT (JSON Web Tokens)**: For managing user sessions and authentication.

## API Documentation

### Authentication Endpoints:
- `POST /api/auth/login` - Log in an existing user using their LDAP credentials and receive a JWT token.

### Product & Ad Management Endpoints:
- `POST /api/products/search` - Search for products using keywords.
- `GET /api/products` - Fetch a list of all products/ads.
- `POST /api/products` - Create a new product/ad (Requires authentication).
- `GET /api/products/:id` - Fetch details of a specific product/ad.
- `PUT /api/products/:id` - Update an existing product/ad (Requires authentication).
- `DELETE /api/products/:id` - Delete a product/ad (Requires authentication).

### User & Profile Management Endpoints:
- `GET /api/users/profile` - Fetch the current user’s profile data (Requires authentication).
- `PUT /api/users/updateProfile/:id` - Update the user’s profile (Requires authentication).
- `GET /api/users/products` - Get all products posted by the current user (Requires authentication).
