# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# Pack2Product

Pack2Product is an AI-assisted web application that helps food processing businesses generate professional product descriptions for e-commerce platforms.

## Features

- User Authentication (Login & Register)
- Dashboard
- Generate Product Description
- Save Generated Description
- View History
- Search History
- Delete Saved Description
- Recent Content Dashboard
- Responsive UI
- Toast Notifications
- Loading Spinner

## Tech Stack

### Frontend
- React.js
- React Router
- Tailwind CSS
- Axios
- Lucide React

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs

## Folder Structure

```
Pack2Product
│
├── frontend
│
├── backend
│
├── README.md
│
└── .env.example
```

## Installation

### Clone the repository

```bash
git clone <repository-url>
```

### Backend

```bash
cd backend
npm install
```

Create a `.env` file using `.env.example`.

Start the server:

```bash
npm start
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## Environment Variables

```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

## API Endpoints

### Authentication

| Method | Endpoint |
|---------|----------|
| POST | /auth/register |
| POST | /auth/login |

### Product Description

| Method | Endpoint |
|---------|----------|
| POST | /content/generate |
| POST | /content/save |
| GET | /content |
| GET | /content/:id |
| PUT | /content/:id |
| DELETE | /content/:id |

## Future Enhancements

- AI-powered content generation using Google Gemini
- Ingredient Benefits Generator
- Packaging Content Generator
- Marketplace Listing Generator
- Multi-language Support

## Author

Sudhanshu Kumar