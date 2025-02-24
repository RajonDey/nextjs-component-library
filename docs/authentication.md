

# Next.js Authentication Component Library (MVP)

This is a minimal viable product (MVP) for a reusable authentication system built with **Next.js 15 (App Router)**, **React**, **TypeScript**, and **Tailwind CSS**. It provides a simple, functional foundation for user authentication, including login, signup, forgot password, and a dashboard page for logged-in users. The system is lightweight, customizable, and easy to integrate into any Next.js project.

---

## Table of Contents
1. [Features](#features)
2. [How It Was Built](#how-it-was-built)
3. [Project Structure](#project-structure)
4. [Prerequisites](#prerequisites)
5. [Installation](#installation)
6. [Usage](#usage)
7. [What You Get](#what-you-get)
8. [Customization & Extensions](#customization--extensions)
9. [Limitations](#limitations)
10. [Next Steps](#next-steps)

---

## Features
- **Login**: Authenticate users with email and password.
- **Signup**: Register new users with name, email, and password (includes password confirmation).
- **Forgot Password**: Simulate sending a password reset link (logs to console for MVP).
- **Dashboard**: A protected page showing a welcome message for logged-in users, with logout functionality.
- **Client-Side Validation**: Form validation using `react-hook-form`.
- **API Routes**: Simple in-memory RESTful API for authentication (replaceable with a database).
- **Responsive Design**: Styled with Tailwind CSS for a clean, mobile-friendly UI.
- **Redirects**: Automatically redirects logged-in users to the dashboard and unauthenticated users to the login page.

---

## How It Was Built
This library leverages Next.js’s App Router and React Server Components (RSC) for a modern, performant architecture:
- **Components**: Reusable UI components (`LoginForm`, `SignupForm`, `ForgotPasswordForm`) are marked `"use client"` to handle client-side interactivity with `react-hook-form`.
- **API**: Server-side API routes (`/api/auth/*`) manage user data using an in-memory array (for MVP simplicity).
- **State Management**: Uses `localStorage` to track logged-in users (replaceable with cookies or JWT).
- **Routing**: App Router handles navigation (e.g., `/login`, `/dashboard`) with client-side redirects via `next/navigation`.
- **Styling**: Tailwind CSS provides a consistent, customizable look.

The system balances Server Components (for static rendering) and Client Components (for interactivity), adhering to Next.js 15 conventions.

---

## Project Structure
```
my-component-library/
├── app/
│   ├── api/
│   │   ├── auth/
│   │   │   ├── login/route.ts         # Login API
│   │   │   ├── signup/route.ts        # Signup API
│   │   │   ├── forgot-password/route.ts # Forgot Password API
│   │   │   └── users.ts               # In-memory user storage
│   ├── login/page.tsx                 # Login page
│   ├── signup/page.tsx                # Signup page
│   ├── forgot-password/page.tsx       # Forgot Password page
│   ├── dashboard/page.tsx             # Dashboard page
│   ├── layout.tsx                     # Root layout
│   ├── page.tsx                       # Home page
├── components/
│   ├── auth/
│   │   ├── AuthContainer.tsx          # Shared layout wrapper
│   │   ├── LoginForm.tsx              # Login form
│   │   ├── SignupForm.tsx             # Signup form
│   │   ├── ForgotPasswordForm.tsx     # Forgot Password form
│   └── index.tsx                      # Exports all components
├── styles/
│   └── globals.css                    # Tailwind CSS setup
├── public/
└── package.json
```

---

## Prerequisites
- **Node.js**: v18 or higher
- **npm**: v9 or higher
- Basic familiarity with Next.js, React, and TypeScript

---

## Installation
1. **Clone or Copy the Project**:
   - If this is a standalone repo: `git clone <repo-url> && cd my-component-library`
   - Or copy the files into your existing Next.js project.

2. **Install Dependencies**:
   ```bash
   npm install
   ```
   Ensure your `package.json` includes:
   ```json
   {
     "dependencies": {
       "next": "^15.1.7",
       "react": "^19.0.0",
       "react-dom": "^19.0.0",
       "react-hook-form": "^7.54.2",
       "uuid": "^10.0.0"
     },
     "devDependencies": {
       "@types/node": "^20",
       "@types/react": "^19",
       "@types/react-dom": "^19",
       "@types/uuid": "^10",
       "eslint": "^9",
       "eslint-config-next": "15.1.7",
       "postcss": "^8",
       "tailwindcss": "^3.4.1",
       "typescript": "^5"
     }
   }
   ```

3. **Run the App**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

---

## Usage
1. **Access Pages**:
   - **Home**: `/` (links to all auth pages)
   - **Login**: `/login`
   - **Signup**: `/signup`
   - **Forgot Password**: `/forgot-password`
   - **Dashboard**: `/dashboard` (protected)

2. **Test the Flow**:
   - **Signup**: Register with a name, email, and password (e.g., `John`, `john@example.com`, `password123`).
   - **Login**: Use the same credentials to log in; you’ll be redirected to `/dashboard`.
   - **Dashboard**: See "Welcome, John!" and a logout button.
   - **Forgot Password**: Enter an email to simulate a reset link (logs to console).

3. **Integrate into Your Project**:
   - Copy the `components/auth/` folder and `app/api/auth/` folder into your Next.js app.
   - Use the components in your pages (e.g., `<LoginForm />` in `app/login/page.tsx`).
   - Customize the API logic or UI as needed (see [Customization](#customization--extensions)).

---

## What You Get
- **Reusable Components**: Pre-built forms (`LoginForm`, `SignupForm`, `ForgotPasswordForm`) with validation and API integration.
- **Simple API**: RESTful endpoints for authentication, using an in-memory store (replaceable with a database).
- **Protected Route**: A dashboard page that only logged-in users can access.
- **Basic Auth Flow**: Signup → Login → Dashboard → Logout.
- **Responsive UI**: Clean, Tailwind-styled forms and dashboard.

---

## Customization & Extensions
This MVP is a starting point—here’s how to enhance it:

### 1. Replace In-Memory Storage
- **Database**: Swap `app/api/auth/users.ts` with a real database (e.g., MongoDB, PostgreSQL).
  ```typescript
  // app/api/auth/users.ts
  import { connectToDatabase } from 'your-db-config';
  export async function getUsers() {
    const db = await connectToDatabase();
    return db.collection('users').find().toArray();
  }
  export async function addUser(user: User) {
    const db = await connectToDatabase();
    return db.collection('users').insertOne(user);
  }
  ```

### 2. Secure Passwords
- **Hashing**: Use `bcrypt` to hash passwords.
  - Install: `npm install bcrypt && npm install --save-dev @types/bcrypt`
  - Update `signup/route.ts`:
    ```typescript
    import bcrypt from 'bcrypt';
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { id: uuidv4(), name, email, password: hashedPassword };
    ```

### 3. Session Management
- **JWT**: Replace `localStorage` with JSON Web Tokens.
  - Install: `npm install jsonwebtoken`
  - Update `login/route.ts` to return a token:
    ```typescript
    import jwt from 'jsonwebtoken';
    const token = jwt.sign({ id: user.id, email: user.email }, 'your-secret', { expiresIn: '1h' });
    return NextResponse.json({ success: true, data: { token } });
    ```
  - Store the token in cookies or `localStorage` and verify it on the dashboard.

### 4. Email Sending
- **Real Reset Links**: Use `nodemailer` for the forgot password feature.
  - Install: `npm install nodemailer`
  - Update `forgot-password/route.ts`:
    ```typescript
    import nodemailer from 'nodemailer';
    const transporter = nodemailer.createTransport({ /* SMTP config */ });
    await transporter.sendMail({
      to: email,
      subject: 'Password Reset',
      text: 'Click here to reset: [link]',
    });
    ```

### 5. Middleware for Auth
- Protect `/dashboard` with Next.js middleware:
  ```typescript
  // app/middleware.ts
  import { NextRequest, NextResponse } from 'next/server';
  export function middleware(req: NextRequest) {
    if (req.nextUrl.pathname === '/dashboard' && !req.cookies.get('user')) {
      return NextResponse.redirect(new URL('/login', req.url));
    }
    return NextResponse.next();
  }
  ```

### 6. Styling
- Modify Tailwind classes in `AuthContainer.tsx` or `globals.css` to match your design system.

---

## Limitations
- **In-Memory Storage**: User data resets on server restart (replace with a database for persistence).
- **Security**: Passwords are stored in plain text (add hashing for production).
- **Session**: Uses `localStorage` (not secure for real apps; replace with JWT or cookies).
- **Forgot Password**: Only logs to console (add email integration for functionality).
- **Scalability**: No middleware or server-side auth checks (add for larger apps).

---

## Next Steps
- **Enhance Security**: Add password hashing and JWT-based sessions.
- **Add Features**: Expand the dashboard with user profile data or navigation.
- **Component Library**: Build additional components like Pagination, Search, etc.
- **Testing**: Add unit tests with Jest or Playwright.

To extend this further or add more components, start by defining your requirements and integrating them into the existing structure. Contributions or feedback are welcome!

