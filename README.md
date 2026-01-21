# E-commerce Web Application (Next.js)

A full-stack e-commerce web application built with **Next.js App Router**, focusing on scalability, SEO optimization, clean architecture, and real-world checkout & payment flows.

> 🚧 **Status:** In development (not deployed yet)

---

## Features

### Product & Variant Management
- Support multiple variants (color, size, SKU)
- Variant-based pricing and inventory management
- Shared images across variants to avoid data duplication

### SEO-Friendly Architecture
- Server-Side Rendering (SSR)
- Next.js Server Components
- Optimized routing with App Router

### Shopping Cart & Checkout
- Add and remove items by SKU
- Persistent cart handling
- Order creation before payment
- Payment status tracking (`pending`, `paid`)

### Payment Integration
- PayPal payment gateway integration
- Secure checkout flow with order validation

### Form Handling & Validation
- React Hook Form for form management
- Zod schema-based validation
- Dynamic validation rules based on shipping method and location

### Clean Architecture
- Controller–Service pattern for REST APIs
- Clear separation of concerns (UI, business logic, data layer)
- Reusable UI components and custom hooks

### Performance Optimization
- Optimized client/server component boundaries
- Fixed hydration issues
- Efficient data fetching strategies

---

## Tech Stack

### Frontend
- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- React Hook Form
- Zod
- React Query

### Backend
- Node.js
- RESTful APIs
- JWT Authentication
- Supabase / MongoDB

### Payment & Media
- PayPal API
- Cloudinary / AWS S3 (planned)

---
