# ModernBlog Frontend (React)

This is the frontend for ModernBlog, built with React and designed to work with the **blog-laravel** backend API.

---

## 🚀 Getting Started

### 1. **Clone the Repositories**

```bash
# Clone the frontend
git clone https://github.com/your-username/blog-frontend.git
cd blog-frontend


```

---

### 2. **Install Frontend Dependencies**

```bash
cd blog-frontend
npm install
```

---

### 3. **Run the Frontend**

```bash
cd blog-frontend
npm run dev
```

- The app will start at [http://localhost:5173](http://localhost:5173).

---

### 4. **Configure the Backend API**

- Make sure your **blog-laravel** backend is running (usually at `http://localhost:8000`).
- And msql server is runing (recomended installing xampp for full package)
- Update the API base URL in `src/services/api.js` if needed:
  ```js
  // src/services/api.js
  import axios from "axios";
  export default axios.create({
    baseURL: "http://localhost:8000/api",
    withCredentials: true, // if using cookies
  });
  ```

---


### 6. **Login & Register**

- Register a new user or log in with existing credentials.
- You can now create, view, edit, and delete blog posts.

---

## 🛠 Features

- Modern UI with React and Tailwind CSS
- Authentication (JWT or HTTP-only cookies)
- Create, edit, and delete posts
- Categories, tags, and Markdown support
- Responsive design

---
